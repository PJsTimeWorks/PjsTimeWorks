"use client";

import { useState } from "react";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import { useCart } from "../cart-context";

const cinzel = Cinzel({ subsets: ["latin"], weight: "400" });

export default function UnspokenCollectionPage() {
  const [showMeaning, setShowMeaning] = useState<string | null>(null);
  const { addItem } = useCart();

  const watches = [
    {
      name: "Please don't go",
      img: "/please.png",
      price: "$320",
      desc: "The Please Don’t Go is not here to dazzle, it’s here to stay. The 38mm case is finished in dark industrial steel, sandblasted, soaked in aluminum oxide, and acid-rinsed to a raw, unpolished tone. No gloss. No shine. Just truth. Its dial is a grey parchment-style texture, the typeface is simple, grounded, and dark against the dial, intentionally hard to read in low light, because this watch isn’t about performance. It’s about presence. At 6 o’clock, the message: “Please don’t go.” Not decoration. Not branding. A whisper to someone. A plea. A reason. The strap is distressed dark leather, broken in, not broken down. Meant to feel like it's been with you a long time. It has a quality automatic heart that will beat for decades.",
      meaning:
        "Built for the ones hanging on—or those who love them. A quiet reminder to stay, even when it’s hard.",
    },
    {
      name: "I love you. Goodbye.",
      img: "/sad-watch.png",
      price: "$360",
      desc: "The I Love You, Goodbye is a watch for those living with loss. Its dial is designed to look like crumpled, aged college-ruled notebook paper. The words are handwritten in No. 2 pencil and sealed under epoxy. The case is raw dark steel. The strap? Worn leather, like a memory you still carry.",
      meaning:
        "For those who had to let someone go. This isn’t closure. It’s remembrance.",
    },
    {
      name: "You're Not Alone.",
      img: "/stay.png",
      price: "$320",
      desc: "The dial whispers “Stay.” The 38mm dark steel case is matte and quiet. It’s paired with a leather strap that feels like it’s always been there. For when you can’t talk about it—but want to feel understood.",
      meaning:
        "Not a command. A whisper. For when you’re not sure you can—but wear it anyway.",
    },
  ];

  return (
    <main
      className={`min-h-screen bg-black text-white px-6 py-20 ${cinzel.className}`}
    >
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl text-zinc-400 drop-shadow-md mb-4">
          Unspoken Collection
        </h1>
        <p className="text-lg text-gray-400 italic max-w-2xl mx-auto">
          A watch that matches your emotion, without trying to change it.
        </p>
      </section>

      {/* Description */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-300 leading-relaxed">
          These watches were built for people in the darkest places. Not to
          cheer them up, but to sit with them. Silently. Honestly. Every watch
          carries a quiet message, engraved to be seen when it matters. This
          line is a reminder: you are still here.
        </p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {watches.map((watch) => (
          <div key={watch.name} className="text-center">
            <div className="mb-4">
              <Image
                src={watch.img}
                alt={watch.name}
                width={500}
                height={500}
                className="rounded-xl shadow-md object-cover w-full h-auto"
              />
            </div>
            <h3 className="text-2xl text-zinc-300 font-semibold mb-1">
              {watch.name}
            </h3>
            <p className="text-gray-400 italic mb-2">{watch.desc}</p>
            <p className="text-zinc-400 font-bold">{watch.price}</p>
            <button
              onClick={() =>
                setShowMeaning(showMeaning === watch.name ? null : watch.name)
              }
              className="mt-2 text-sm text-blue-400 underline"
            >
              {showMeaning === watch.name ? "Hide meaning" : "Watch meaning"}
            </button>
            {showMeaning === watch.name && (
              <p className="mt-2 text-sm text-gray-400 italic">
                {watch.meaning}
              </p>
            )}
            <button
              onClick={() =>
                addItem({ name: watch.name, price: watch.price, img: watch.img })
              }
              className="mt-4 bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
