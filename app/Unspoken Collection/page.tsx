"use client";

import { useState } from "react";
import { Cinzel } from "next/font/google";
const cinzel = Cinzel({ subsets: ["latin"], weight: "400" });

export default function UnspokenCollectionPage() {
  const watches = [
    {
      name: "Please don't go",
      img: "/please.png",
      gallery: ["/please.png", "/please-angle.png"],
      price: "$320",
      desc: "38mm dark industrial steel case, grey parchment-style dial, distressed charcoal leather strap, faint text at 6 o'clock: 'Please don’t go.' Automatic movement. 1-year warranty.",
      meaning:
        "A whisper to stay. A reason not to give in. Built for the moments that ache the most.",
      story: `The Please Don’t Go is not here to dazzle, it’s here to stay. The 38mm case is finished in dark industrial steel—sandblasted, soaked in aluminum oxide, and acid-rinsed to a raw, unpolished tone. No gloss. No shine. Just truth.

Its dial is a grey parchment-style texture, the typeface is simple, grounded, and dark against the dial, intentionally hard to read in low light, because this watch isn’t about performance. It’s about presence.

At 6 o’clock, the message: “Please don’t go.” Not decoration. Not branding. A whisper to someone. A plea. A reason.

The strap is distressed dark leather, broken in, not broken down. Meant to feel like it's been with you a long time. It has a quality automatic heart that will beat for decades.

This watch is either meant for someone you couldn’t hold onto—or someone you still hope you can. Or maybe, it’s for yourself. A subtle companion when the thoughts get dark. A quiet voice that says: stay.`,
    },
    {
      name: "I love you. Goodbye.",
      img: "/sad-watch.png",
      gallery: ["/sad-watch.png", "/sad-detail.png"],
      price: "$360",
      desc: "Notebook-style dial with handwritten pencil text sealed under epoxy. 38mm blasted case, distressed strap. Quiet and weighty.",
      meaning:
        "Built for those still carrying the words they never wanted to hear.",
      story: `The I Love You, Goodbye is a watch for those living with loss. Its dial is designed to look like crumpled, aged college-ruled notebook paper.

The words “I Love You, Goodbye” and the numbers are handwritten in No. 2 pencil, then sealed under a thin coat of epoxy. These words aren’t meant to reopen wounds. They’re meant to sit with you—to remind you of someone you had to let go.

For some, images hurt too much. But words? They land softer. They echo, not stab. And they can bring back the memories without overwhelming the heart.

The case is dark industrial steel—raw and unpolished. The strap is distressed leather, worn like a memory that’s been carried for years. On the case back there are support tools, engraved for the moments when things get heavy.

This watch won’t fix the pain. But it may help you carry it.`,
    },
    {
      name: "You're Not Alone.",
      img: "/stay.png",
      gallery: ["/stay.png"],
      price: "$320",
      desc: "Soft slate linen dial, matte hands, faint type near 6. 38mm case, distressed strap. Subtle, silent, steady.",
      meaning: "For when you're hurting in silence—this one listens.",
      story: `A soft slate linen dial, subtle matte hands, and faint text just above the 6. The 38mm case holds a blasted steel finish, and the strap is weathered but not torn. Understated and quiet, it won’t draw attention. It will just be there. And sometimes, that’s enough.

This is not a flashy piece—it’s built to be present, not perform. It’s a gentle reminder, worn close, for those who carry too much in silence. The kind of piece that never interrupts—but also never leaves.`,
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
          This isn’t fashion. This isn’t a trend. These watches were built for
          people in the deepest part of the dark. They don’t shine. They don’t
          distract. They sit with you—quietly. Each one has a message, a voice,
          and a reason to exist. This line doesn’t offer comfort. It offers
          companionship.
        </p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {watches.map((watch, i) => {
          const [showStory, setShowStory] = useState(false);

          return (
            <div key={watch.name} className="text-center">
              <img
                src={watch.img}
                alt={watch.name}
                className="mb-4 rounded-xl shadow-md w-full object-cover"
              />
              {watch.gallery.length > 1 && (
                <div className="flex gap-2 justify-center mb-4">
                  {watch.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${watch.name} - ${idx}`}
                      className="w-20 h-20 object-cover rounded shadow"
                    />
                  ))}
                </div>
              )}
              <h3 className="text-2xl text-zinc-300 font-semibold mb-1">
                {watch.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-1">
                {watch.desc}
              </p>
              <p className="italic text-zinc-500 text-sm mb-2">
                {watch.meaning}
              </p>
              <p className="text-zinc-400 font-bold mb-4">{watch.price}</p>
              <button
                onClick={() => setShowStory(!showStory)}
                className="text-sm text-blue-400 underline hover:text-blue-200 mb-2"
              >
                {showStory ? "Hide Watch Meaning" : "Read Watch Meaning"}
              </button>
              {showStory && (
                <p className="text-sm text-gray-300 whitespace-pre-line mb-4">
                  {watch.story}
                </p>
              )}
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-zinc-200 transition">
                Add to Cart
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
}
