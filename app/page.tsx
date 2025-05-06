import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="Renka Logo"
            width={500}
            height={400}
            priority
          />
        </div>
        <p
          className={`mt-7 text-3xl italic text-zinc-400 ${greatVibes.className}`}
        >
          Time doesn&#39;t heal. But it remembers.
        </p>
      </section>

      {/* Watch Lines */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-20 max-w-6xl mx-auto">
        {[
          {
            title: "Unspoken Collection",
            desc: "A watch that matches your emotion, without trying to change it.",
            img: "/sad-watch.png",
            link: "/unspoken",
          },
          {
            title: "Undying Hope Collection",
            desc: "For those still standing.",
            img: "/inspirational-watch.png",
            link: "/undying-hope",
          },
          {
            title: "Vintage Soul Collection",
            desc: "Original dials, reborn.",
            img: "/vintage-soul-watch.png",
            link: "/vintage-soul",
          },
          {
            title: "Identity Collection",
            desc: "One of one. Just like them.",
            img: "/personality-watch.png",
            link: "/identity",
          },
        ].map((line) => (
          <a
            key={line.title}
            href={line.link}
            className="block relative h-64 rounded-xl overflow-hidden group shadow-md cursor-pointer"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${line.img})` }}
              />
              <div className="absolute inset-0 backdrop-blur-[2px]" />
            </div>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
              <h2 className="text-3xl font-bold">{line.title}</h2>
              <p className="text-sm text-gray-300 mt-1">{line.desc}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
