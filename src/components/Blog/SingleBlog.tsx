import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

const SingleBlog = ({ blog, index }: { blog: Blog; index: number }) => {
  const { title, image, paragraph } = blog;

  // Use the same link for all blogs
  const linkUrl = "/blog-details";

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
      {/* Image with dynamic link */}
      <Link href={linkUrl}>
        <div className="relative aspect-[37/22] w-full cursor-pointer">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-t-xs object-cover"
          />
        </div>
      </Link>

      {/* Buy Now Button */}
      <div className="flex justify-center py-4">
        <Link href={linkUrl}>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-blue-700">
            Buy Now <FiShoppingBag size={18} />
          </button>
        </Link>
      </div>

      {/* Title & Paragraph */}
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link href={linkUrl}>
            <span className="hover:text-primary dark:hover:text-primary mb-4 block cursor-pointer text-xl font-bold text-black sm:text-2xl dark:text-white">
              {title}
            </span>
          </Link>
        </h3>
        <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
