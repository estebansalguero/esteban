/* eslint-disable react/no-unescaped-entities */
// import { BlogCard } from "@/components/BlogCard";
import { Header } from "@/components/Header";

const Blog = () => {
  return (
    <main className="relative isolate">
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
      <Header />
      <div className="mx-auto my-8 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Soon
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            I'm working on it, I promise.
          </p>
        </div>
        {/* <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <BlogCard
            title="Biotopika"
            href="https://biotopika.com"
            imageUrl="https://vrbvyfydfpqscdwhrpio.storage.eu-central-1.nhost.run/v1/files/f5938cbb-4aa1-486c-b29d-8ca725b54e03/presignedurl/content?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASMFSI6OTPV4PO7GY%2F20230906%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230906T043806Z&X-Amz-Expires=30&X-Amz-SignedHeaders=host&X-Amz-Signature=4a29f51f00506a20801eaef5accec19b517f5d2f37c6232c9b221f3dd947fecc"
            author={{
              name: "Esteban Salguero",
              imageUrl:
                "https://media.licdn.com/dms/image/D4E03AQGxgCOwjCvfdA/profile-displayphoto-shrink_800_800/0/1693114264555?e=1699488000&v=beta&t=NBlIDDn0jlcxGCxTREm-tjmQqCXOfCfNSnOW3A6-I6k",
            }}
            dateTime="2023"
            date="Dec, 2022"
          />
        </div> */}
      </div>
    </main>
  );
};

export default Blog;
