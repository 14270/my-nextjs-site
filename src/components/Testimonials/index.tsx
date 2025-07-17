import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";

const testimonialData: Testimonial = {
  id: 4,
  name: "Amita Vikram Pratap",
  designation: "Co Founder – MAV Brand Stories LLC",
  content:
    "A big shoutout to ReNoteAI for the wonderful gift and what an awesome product. The smart reusable notebook is such a big relief from the overpriced and over sensitive gadgets like ipad and remarkable. In less than 24hrs, i am hooked to it. A regular writing device which satisfies the exercise needs of my fingers and wrist while keeping the mind agile by staying in the writing flow without tech interference.",
  image: "",
  star: 5,
};

const Testimonials = () => {
  return (
    <section className="bg-black-100 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Testimonials"
          paragraph="Discover how ReNote AI is transforming the note-taking experience."
          center
        />

        <div className="mt-10 flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg lg:flex-row">
          {/* Testimonial Section */}
          <div className="w-full p-8 lg:w-2/3">
            <div className="mb-4 flex items-center">
              {[...Array(testimonialData.star)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>
            <p className="mb-6 text-lg text-gray-700 italic">
              "{testimonialData.content}"
            </p>
            <div>
              <p className="text-xl font-semibold text-gray-900">
                {testimonialData.name}
              </p>
              <p className="text-gray-600">{testimonialData.designation}</p>
            </div>
          </div>

          {/* Product Promo Side */}
          <div className="flex w-full flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 p-8 text-center text-white lg:w-1/3">
            <h2 className="mb-2 text-2xl font-bold">Our Product</h2>
            <p className="text-lg">out in the world!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
