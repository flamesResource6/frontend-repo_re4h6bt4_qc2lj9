import { useState } from 'react'
import { Sprout, MessageCircle, Hashtag, Heart, Leaf } from 'lucide-react'

const demoProfiles = [
  { id: 1, name: 'Ava', bio: 'Dahlia dreamer • tea lover', stage: 'Seedling', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Leo', bio: 'Urban balcony gardener', stage: 'Growing', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Maya', bio: 'Science teacher • kids track', stage: 'Blooming', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
]

const demoFeed = [
  {
    id: 101,
    user: demoProfiles[0],
    photo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop',
    caption: 'First sprout today! Tiny but mighty 🌱',
    hashtags: ['SpringStart', 'FirstSprout']
  },
  {
    id: 102,
    user: demoProfiles[1],
    photo: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop',
    caption: 'Repotted and added support stakes. Feeling hopeful!',
    hashtags: ['Growing', 'Dahlia']
  },
]

export default function Community() {
  const [cheers, setCheers] = useState({})
  const [comments, setComments] = useState({})

  const addCheers = (id) => setCheers((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  const addComment = (id, text) => setComments((c) => ({ ...c, [id]: [...(c[id]||[]), text] }))

  return (
    <div className="bg-emerald-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-emerald-900">Community</h1>
          <p className="text-emerald-800/90 mt-2">A kind space to share plant progress, ask questions, and cheer each other on.</p>
        </div>

        {/* Profiles */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-4">
            {demoProfiles.map((p) => (
              <div key={p.id} className="min-w-[220px] rounded-2xl bg-white border border-emerald-100 p-4">
                <div className="flex items-center gap-3">
                  <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-emerald-900">{p.name}</p>
                    <p className="text-xs text-emerald-700/90">{p.bio}</p>
                  </div>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs border border-emerald-100">
                  <Sprout className="w-3 h-3" /> {p.stage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feed */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {demoFeed.map((post) => (
            <article key={post.id} className="rounded-3xl overflow-hidden bg-white border border-emerald-100">
              <img src={post.photo} alt="plant post" className="w-full h-64 object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <img src={post.user.avatar} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-emerald-900">{post.user.name}</p>
                    <p className="text-xs text-emerald-700/80">{post.user.bio}</p>
                  </div>
                </div>
                <p className="mt-3 text-emerald-900">{post.caption}</p>
                <div className="mt-2 flex gap-2 text-xs text-emerald-700/90">
                  {post.hashtags.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 border border-emerald-100"><Hashtag className="w-3 h-3"/>#{h}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <button onClick={() => addCheers(post.id)} className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm hover:bg-emerald-700">
                    🌱 cheers {cheers[post.id] ? `(+${cheers[post.id]})` : ''}
                  </button>
                  <div className="text-emerald-700/80 text-sm inline-flex items-center gap-1"><MessageCircle className="w-4 h-4"/> Comments {comments[post.id]?.length ? `(${comments[post.id].length})` : ''}</div>
                </div>
                <form className="mt-3 flex gap-2" onSubmit={(e)=>{e.preventDefault(); const v=e.target.comment.value.trim(); if(v){ addComment(post.id, v); e.target.reset(); }}}>
                  <input name="comment" placeholder="Say something kind..." className="flex-1 rounded-full border border-emerald-200 px-4 py-2 bg-white/70" />
                  <button className="rounded-full bg-emerald-50 border border-emerald-200 px-4">Send</button>
                </form>

                {comments[post.id]?.length ? (
                  <ul className="mt-3 space-y-2">
                    {comments[post.id].map((c,i)=>(
                      <li key={i} className="text-sm text-emerald-900 bg-emerald-50 border border-emerald-100 px-3 py-2 rounded-xl">{c}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {/* Q&A */}
        <div className="mt-12 rounded-3xl bg-emerald-100/60 border border-emerald-200 p-6">
          <div className="flex items-center gap-2 text-emerald-900 font-semibold"><Leaf className="w-4 h-4"/> Ask a senior gardener</div>
          <p className="text-sm text-emerald-800/90 mt-2">Leave a question and someone experienced will gently guide you.</p>
          <form className="mt-3 grid md:grid-cols-4 gap-2" onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="Your name" className="rounded-full border border-emerald-300 px-4 py-2 bg-white/70"/>
            <input placeholder="Email" className="rounded-full border border-emerald-300 px-4 py-2 bg-white/70"/>
            <input placeholder="Your question" className="md:col-span-2 rounded-full border border-emerald-300 px-4 py-2 bg-white/70"/>
            <button className="rounded-full bg-emerald-600 text-white px-6 py-2 md:col-span-1">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
