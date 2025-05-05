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
          For when the world goes quiet.
        </p>
      </section>

      {/* Description */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-300 leading-relaxed">
          This line wasn't designed. It was felt—in the quiet moments when
          nothing feels worth waking up for. When joy is a memory. When hope has
          packed its bags and left without saying goodbye. These watches aren't
          meant to cheer you up. They don't sparkle. They don't promise things
          will get better. They just exist—like you do—still ticking, even when
          it hurts to move. Every dial in this collection is stripped down, raw,
          and distant. Muted linen textures. Cold steel. Silence between the
          seconds. They're not broken. They're not healed. They're somewhere in
          between—just like the people who wear them. The Sad collection is for
          the ones who cry without reason, for the ones who feel everything and
          nothing all at once. For the ones still here, even when they don't
          know why. This line doesn't offer comfort. It offers companionship.
        </p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            name: "Please don't go",
            img: "/please.png",
            price: "$680",
            desc: "Built for the ones hanging on—or for those who love them. This piece is a plea, a reminder, and a companion. Sometimes it’s the dial begging a friend to stay. Sometimes it’s a whisper to yourself, when you're close to doing something irreversible. Wherever it lands, it’s here to say: don’t leave. Not yet.",
          },
          {
            name: "I love you. Goodbye.",
            img: "/sad-watch.png",
            price: "$720",
            desc: "Final words, never forgotten. A warm, worn memory built into the dial.",
          },
          {
            name: "Stay.",
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
