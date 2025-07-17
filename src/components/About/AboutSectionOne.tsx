import SectionTitle from "../Common/SectionTitle";

const features = [
  {
    title: "Sustainable Productivity",
    description:
      "Our Smart Reusable Notebook promotes a zero-waste approach to note-taking, merging sustainability with productivity.",
    icon: "♻️",
    bgColor: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-700 dark:text-green-300",
  },
  {
    title: "Continuous Improvement",
    description:
      "We prioritize research and development to refine our products, ensuring that we stay at the forefront of sustainability and technology while meeting our customers' evolving needs.",
    icon: "⚡",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-700 dark:text-blue-300",
  },
  {
    title: "Empowering Education",
    description:
      "We collaborate with educational institutions to offer our Smart Reusable Notebook, equipping students with tools that bridge the gap between analog and digital learning environments.",
    icon: "📖",
    bgColor: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-700 dark:text-purple-300",
  },
  {
    title: "Digital Integration",
    description:
      "Experience the future of note-taking with our Smart Reusable Notebook, designed to effortlessly digitize your handwritten notes. Access your ideas anytime, anywhere!",
    icon: "📓",
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-700 dark:text-yellow-300",
  },
];

const teamMembers = [
  {
    name: "Suman Balabommu",
    role: "Founder",
    image: "/images/about/Suman.png",
    linkedin: "https://www.linkedin.com/in/suman-balabommu-ba125b1b2/",
  },
  {
    name: "Radhika Katuru",
    role: "Co-Founder",
    image: "/images/about/radhika.png",
    linkedin: "https://www.linkedin.com/in/radhika-katuru-39a020269/",
  },
  {
    name: "Raghu Thatavarthy",
    role: "Advisor & Co-Inventor",
    image: "/images/about/raghu.png",
    linkedin: "https://www.linkedin.com/in/raghu-t-6b485244/",
  },
  {
    name: "Kesari Sai Sabniveesu",
    role: "Advisor & Co-Inventor",
    image: "/images/about/kesari.png",
    linkedin: "https://www.linkedin.com/in/kesari-sabniveesu/",
  },
];

const AboutSectionOne = () => {
  return (
    <section
      id="about"
      className="bg-white pt-16 md:pt-20 lg:pt-28 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="pb-16 md:pb-20 lg:pb-28">
          <SectionTitle
            title="Our Initiatives"
            paragraph="At ReNote AI, our initiatives are driven by a purpose: to create sustainable solutions that empower individuals and organizations to be more productive while reducing their environmental footprint. Here's how we bring this mission to life:"
            mb="44px"
          />

          {/* Features Section */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-md ${feature.bgColor}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xl ${feature.textColor}`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h4>
                </div>
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="pb-16 md:pb-20 lg:pb-28">
          <SectionTitle
            title="Meet Our Team"
            paragraph="We are a passionate team of founders, inventors, and advisors committed to building sustainable and smart solutions."
            mb="44px"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-28 w-28 rounded-full object-cover"
                />
                <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {member.role}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block"
                >
                  <img
                    src="/images/about/linkedin.svg"
                    alt="LinkedIn"
                    className="mx-auto h-6 w-6 filter dark:invert"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
