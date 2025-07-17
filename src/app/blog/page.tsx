import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Exclusive Products"
        description="Discover our carefully selected, premium products"
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog, index) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
