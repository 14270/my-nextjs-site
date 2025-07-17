import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] pt-[120px] pb-16 text-white md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Content */}
          <div className="mb-12 w-full lg:mb-0 lg:w-1/2">
            <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase">
              Revolutionary
            </span>
            <h1 className="mb-6 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
              Worlds First <span className="text-pink-400">AI-Powered</span>{" "}
              Smart Reusable Notebook
            </h1>
            <p className="mb-8 text-lg text-[#d1d5db] sm:text-xl">
              with Smart Templates & AI Assistance
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                href="#blog"
                className="rounded-md bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
              >
                Order Now →
              </Link>
              <Link
                href="#about"
                className="rounded-md bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-gray-100"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="flex w-full justify-center lg:w-1/2">
            <div className="relative">
              <span className="absolute top-0 right-0 rounded-bl-md bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
                New!
              </span>
              <img
                src="/images/hero/notebook.png"
                alt="Smart Notebook"
                className="mx-auto max-w-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
