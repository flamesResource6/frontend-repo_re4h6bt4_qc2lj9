import { useState } from 'react'

const BOX_IMG = "https://media.discordapp.net/attachments/692077531272052768/1440123736064917534/image0.jpg?ex=691dabfe&is=691c5a7e&hm=6fc8885ec508c053a319411971290ce5222535311a6002d43b159addb44a75e6&=&format=webp&width=928&height=930"
const REFILL_IMG = "https://allianceofhope.org/wp-content/uploads/2021/01/AdobeStock_246697517-Cropped-to-GR-scaled.jpg"

export default function Shop(){
  const [cart, setCart] = useState([])

  const products = [
    { id: 'box', name: 'The Cutty Box', price: 12.95, image: BOX_IMG, desc: 'Dahlia cutting + soil, pot, fertilizer, mini greenhouse.' },
    { id: 'refill', name: 'Refill Kit', price: 7.95, image: REFILL_IMG, desc: 'Soil + fertilizer + markers to continue growing.' },
  ]

  const add = (p) => setCart((c)=>[...c,p])
  const total = cart.reduce((s,p)=>s+p.price,0)

  return (
    <div className="bg-emerald-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-emerald-900">Shop</h1>
        <p className="mt-2 text-emerald-800/90">Simple kits to get growing. Delivered to your door.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {products.map((p)=>(
            <div key={p.id} className="rounded-2xl bg-white border border-emerald-100 overflow-hidden flex flex-col">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <p className="font-semibold text-emerald-900">{p.name}</p>
                <p className="text-sm text-emerald-700/90 mt-1">{p.desc}</p>
                <div className="mt-auto flex items-center justify-between">
                  <p className="font-semibold text-emerald-900">€{p.price.toFixed(2)}</p>
                  <button onClick={()=>add(p)} className="rounded-full bg-emerald-600 text-white px-4 py-2 text-sm">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white border border-emerald-100 p-6">
          <p className="font-semibold text-emerald-900">Cart</p>
          {cart.length === 0 ? (
            <p className="text-sm text-emerald-700/90 mt-2">Your cart is empty.</p>
          ) : (
            <>
              <ul className="mt-3 space-y-2 text-sm">
                {cart.map((p,i)=>(
                  <li key={i} className="flex justify-between border-b border-emerald-100 pb-2"><span>{p.name}</span><span>€{p.price.toFixed(2)}</span></li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between font-semibold"><span>Total</span><span>€{total.toFixed(2)}</span></div>
              <button className="mt-4 rounded-full bg-emerald-600 text-white px-6 py-2">Checkout</button>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
