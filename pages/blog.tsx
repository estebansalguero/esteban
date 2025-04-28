/* eslint-disable react/no-unescaped-entities */
// import { BlogCard } from "@/components/BlogCard";
/* eslint-disable react/no-unescaped-entities */
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-esteban_blue">
      <Header />
      <main className="mt-8 isolate flex-grow">
        <div
          className="absolute w-full h-full inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Blog
          </h2>
        </div>

        <div className="relative h-full w-full items-center justify-center text-center">
          <p className="mt-4 text-lg leading-8 text-gray-400">
            I'm working on it, I promise.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
