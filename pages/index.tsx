import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

const Index = () => {
  return (
    <div className="bg-esteban_blue">
      <Header />
      <main className="min-h-full isolate">
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
        <div className="relative h-full w-full">
          <div className="relative items-center text-center">
            <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Esteban Salguero
              </p>
              <p className="mt-6 text-base leading-7 text-esteban_blue_light">
                Software Engineer
              </p>
              <div className="mt-8">
                <Link
                  href="/resume"
                  className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-esteban_blue_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  See my resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
