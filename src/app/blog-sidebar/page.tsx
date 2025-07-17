"use client";

import Image from "next/image";

const events = [
  {
    title: "Global AI Summit at Hyderabad",
    tag: "AI",
    image: "/images/hero/ai.png",
    link: "https://www.linkedin.com/posts/renoteai_globalaisummit-renoteai-aiinnovation-activity-7237387130526728192-wuY6/",
  },
  {
    title: "ReNote AI at GITEX Global 2024!",
    tag: "Global",
    image: "/images/hero/global.jpg",
    link: "https://www.linkedin.com/posts/renoteai_renoteai-gitex2024-smartsustainableworld-activity-7257722929835094016-X6as/",
  },
  {
    title: "India CSR & ESG Summit 2024",
    tag: "Sustainability",
    image: "/images/hero/sustain.png",
    link: "https://www.linkedin.com/posts/renoteai_ices2024-indiacsrandesgsummit2024-sustainability-activity-7252929908190978048-It8J/",
  },
  {
    title: "Exhibition in Bangalore",
    tag: "Exhibitions",
    image: "/images/hero/exibition.jpg",
    link: "https://www.linkedin.com/posts/renoteai_bangaloreexpansion-renoteai-giftsworldexpo2024-activity-7233767274350796800-wJw4/",
  },
  {
    title: "Sustainability Event in Hyderabad",
    tag: "Sustainability",
    image: "/images/hero/sustain2.jpg",
    link: "https://www.linkedin.com/posts/renoteai_sustainability-renoteai-ecofriendly-activity-7230812292840366080-cMs5/",
  },
  {
    title: "Gifts World Expo 2024 at Delhi",
    tag: "Exhibitions",
    image: "/images/hero/exibition2.jpg",
    link: "https://www.linkedin.com/posts/renoteai_renoteai-giftsexpodelhi-b2b-activity-7224333647363915776-e2G1/",
  },
];

const tagColors: Record<string, string> = {
  AI: "bg-purple-700",
  Global: "bg-purple-700",
  Sustainability: "bg-purple-700",
  Exhibitions: "bg-purple-700",
};

export default function GlobalPresence() {
  return (
    <section className="bg-[#0F172A] px-4 pt-28 pb-16 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-2 text-center text-4xl font-bold text-purple-400">
          Global Presence
        </h2>
        <p className="mb-12 text-center text-lg text-gray-300">
          ReNote AI is making waves across international events
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <a
              key={index}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-lg transition duration-300 hover:shadow-2xl"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`absolute top-3 right-3 rounded-full px-3 py-1 text-sm font-semibold text-white ${
                  tagColors[event.tag] || "bg-purple-600"
                }`}
              >
                {event.tag}
              </span>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h3 className="text-lg font-bold text-white">{event.title}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* View All Events Button as Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/company/renoteai/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-purple-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-purple-700"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}
