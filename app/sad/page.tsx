import { Cinzel } from "next/font/google";
const cinzel = Cinzel({ subsets: ["latin"], weight: "400" });

export default function SadPage() {
  return (
    <main
      className={`min-h-screen bg-black text-white px-6 py-20 ${cinzel.className}`}
    >
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-7xl md:text-7xl text-zinc-400 drop-shadow-md mb-4">
          Sad Collection
        </h1>
        <p className="text-lg text-gray-400 italic max-w-2xl mx-auto">
          A watch that matches your emotion, without trying to change it.
        </p>
      </section>

      {/* Description */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-300 leading-relaxed">
          This isn’t fashion. This isn’t a trend. These watches were built for
          people in the deepest part of the dark, For the ones who don’t know if
          they’ll make it through the day. They don’t shine. They don’t
          distract. They don’t feed you false hope. They sit with you. Quietly.
          And sometimes, that’s all we need. Each watch in this collection
          carries a message, etched into the dial, whispered at the 6 o’clock
          mark, and resting heavy in its design. There is also a secret engraved
          on the case back: a message, and a number. Because when the pain is so
          strong and everything feels hopeless, just one conversation may make
          the difference. These watches aren’t meant to give happiness. They’re
          built as tools for emotional survival, And to remind the wearer of the
          person who loved them enough to give it to them. If you bought this
          for yourself… I can relate. Perhaps, this is exactly what you needed
          to feel something again. PJ
        </p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            name: "Please don't go",
            img: "/please.png",
            price: "$320",
            desc: "The Please Don’t Go is not here to dazzle, it’s here to stay. The 38mm case is finished in dark industrial steel, sandblasted, soaked in aluminum oxide, and acid-rinsed to a raw, unpolished tone. No gloss. No shine. Just truth. Its dial is a grey parchment-style texture, the typeface is simple, grounded, and dark against the dial, intentionally hard to read in low light, because this watch isn’t about performance. It’s about presence. At 6 o’clock, the message: “Please don’t go.” Not decoration. Not branding. A whisper to someone. A plea. A reason. The strap is distressed dark leather, broken in, not broken down. Meant to feel like it's been with you a long time. It has a quality automatic heart that will beat for decades. Full 30 day no questions asked return, and a full 1 year warranty.",
          },
          {
            name: "I love you. Goodbye.",
            img: "/sad-watch.png",
            price: "$360",
            desc: "The I Love You, Goodbye is a watch for those living with loss. Its dial is designed to look like crumpled, aged college-ruled notebook paper. The words “I Love You, Goodbye” and the numbers are handwritten in No. 2 pencil, then sealed under a thin coat of epoxy. These words aren’t meant to reopen wounds. They’re meant to sit with you—to remind you of someone you had to let go. For some, images hurt too much. But words? They land softer. They echo, not stab. And they can bring back the memories without overwhelming the heart. The case is dark industrial steel—raw and unpolished. The strap is distressed leather, worn like a memory that’s been carried for years. On the case back there are support tools, engraved for the moments when things get heavy. This watch won’t fix the pain. But it may help you carry it. 30 day no questions asked return, and a full 1 year warranty.",
          },
          {
            name: "You're Not Alone.",
            img: "/stay.png",
            price: "$320",
            desc: "Not a command. A whisper. For when you're not sure you can—but wear it anyway.",
          },
        ].map((watch) => (
          <div key={watch.name} className="text-center">
            <img
              src={watch.img}
              alt={watch.name}
              className="mb-4 rounded-xl shadow-md w-full object-cover"
            />
            <h3 className="text-2xl text-zinc-300 font-semibold mb-1">
              {watch.name}
            </h3>
            <p className="text-gray-400 italic mb-2">{watch.desc}</p>
            <p className="text-zinc-400 font-bold">{watch.price}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
