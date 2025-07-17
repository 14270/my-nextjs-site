import Image from "next/image";
import Link from "next/link";

const mediaCoverage = [
  {
    title: "Sajjanar Sir Tweeted About Us",
    description: "IPS VC Sajjanar appreciated our innovation on X.",
    image: "/images/about/Coverage1.jpg",
    link: "https://x.com/SajjanarVC/status/1897180737029231028?t=cG5iWGvCGcDVK9YVBmNjRg&s=08",
  },
  {
    title: "Quadratic IT at Bio Asia",
    description: "Quadratic IT unveils Smart AI Notebook at Bio Asia.",
    image: "/images/about/coverage2.jpg",
    link: "https://www.deccanchronicle.com/southern-states/telangana/quadratic-it-unveils-smart-ai-notebook-at-bio-asia-1863716",
  },
  {
    title:
      "Quadratic IT Unveils AI-Powered Sustainable Innovations at Bio Asia 2025 in Hyderabad",
    description:
      "Check out the latest feature covering our AI-powered innovations.",
    image: "/images/about/coverage3.jpg",
    link: "https://www.globaltimes.tv/index.php/2025/02/27/quadric-it-unveils-ai-powered-sustainable-innovations-at-bio-asia-2025-in-hyderabad/",
  },
];

const AboutSectionTwo = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-3xl font-bold text-black md:text-4xl dark:text-white">
          Media Coverage
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {mediaCoverage.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg dark:bg-gray-800"
            >
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-[250px] w-full cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-black drop-shadow-sm dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
