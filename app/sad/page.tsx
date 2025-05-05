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
          they’ll make it through the day. They don’t shine, they don’t
          distract. They don’t feed you false hope. They sit with you, quietly,
          sometimes, that’s all we need. Each watch in this collection carries a
          message, etched into the dial, whispered at the 6 o’clock mark, and
          resting heavy in its design. There is also a secret engraved on the
          case back: a message, and a number. Because when you're at the edge,
          just one conversation can be enough to pull you back. These watches
          aren’t meant to cheer you up. They’re built to hold space for you, and
          to remind the owner of person that loved them enough to give it to
          them. If you bought this for yourself…I can relate. Perhaps, this is
          exactly what you needed to feel something again.
        </p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            name: "Please don't go",
            img: "/please.png",
            price: "$680",
            desc: "Built for the ones hanging on—or for those who love them.This piece is a plea, a reminder, and a companion. Sometimes it’s a whisper to yourself. Sometimes it’s a quiet message from someone who cares. And sometimes, it feels like the watch itself is speaking—your companion, keeping time when you're on the edge of something irreversible. Wherever it lands, it’s here to say: Don’t go. Not yet.",
          },
          {
            name: "I love you. Goodbye.",
            img: "/sad-watch.png",
            price: "$720",
            desc: "Final words, never forgotten. A warm, worn memory built into the dial.",
          },
          {
            name: "You're Not Alone.",
            img: "/stay.png",
            price: "$660",
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
