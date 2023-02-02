import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import {} from "@nhost/nextjs";

const Index = () => {
  return (
    <>
      <div className="bg-esteban_blue">
        <Header />
        <main className="mt-20">
          <div className="relative h-full w-full">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-esteban_blue" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="People working on laptops"
                    width={1000}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-esteban_blue_light mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-16 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Hi, I&apos;m Esteban Salguero
                    </span>
                    <span className="block text-indigo-200">
                      Software Engineer
                    </span>
                  </h1>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <Link
                      href="/resume"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-esteban_blue shadow-sm hover:bg-esteban_blue hover:text-white sm:px-8"
                    >
                      See my resume
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="relative left-0 bottom-0 right-0">
        <Footer />
      </div>
    </>
    //  absolute left-0 bottom-0 right-0
  );
};

export default Index;
