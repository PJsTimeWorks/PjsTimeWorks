export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">Renka</h1>
        <p className="mt-4 text-lg text-gray-400 italic">
          Time doesn’t heal. But it remembers.
        </p>
      </section>

      {/* Watch Lines */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-20 max-w-6xl mx-auto">
        {[
          {
            title: "Sad",
            desc: "For when the world goes quiet.",
            bg: "bg-gradient-to-tr from-gray-700 to-black",
          },
          {
            title: "Inspirational",
            desc: "For those still standing.",
            bg: "bg-gradient-to-tr from-yellow-600 to-orange-500",
          },
          {
            title: "Vintage Soul",
            desc: "Original dials, reborn.",
            bg: "bg-gradient-to-tr from-zinc-800 to-neutral-600",
          },
          {
            title: "Personality",
            desc: "One of one. Just like them.",
            bg: "bg-gradient-to-tr from-indigo-700 to-purple-600",
          },
        ].map((line) => (
          <div
            key={line.title}
            className={`rounded-xl p-6 ${line.bg} hover:scale-105 transition-transform duration-300 cursor-pointer`}
          >
            <h2 className="text-3xl font-semibold">{line.title}</h2>
            <p className="mt-2 text-gray-300">{line.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
