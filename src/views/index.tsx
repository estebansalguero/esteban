import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Index = () => {
  return (
    <div className="bg-esteban_blue">
      <Header />
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-esteban_blue" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={"../src/assets/Esteban_Salguero.JPG"}
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-esteban_blue_light mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    Hi, I'm Esteban Salguero
                  </span>
                  <span className="block text-indigo-200">
                    Software Engineer
                  </span>
                </h1>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <a
                    href="/Resume"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-esteban_blue shadow-sm hover:bg-esteban_blue hover:text-white sm:px-8"
                  >
                    See my resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
