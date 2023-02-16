import Link from "next/link";
import { Header } from "../components/Header";

const jobs = [
  {
    name: "NovuSource",
    role: "Coding the next level of technology",
    imageUrl: "https://avatars.githubusercontent.com/u/84299171?s=200&v=4",
    githubUrl: "https://github.com/NovuSource",
    linkedinUrl: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  // More jobs...
];

const Resume = () => {
  return (
    <div className="bg-esteban_blue">
      <Header />
      <main className="mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Resume
          </h2>
        </div>
        <div className="relative h-full w-full items-center justify-center text-center">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl">
              <p className="mt-4 text-lg leading-8 text-gray-400">
                My professional experience
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
            >
              {jobs.map((jobs) => (
                <li
                  key={jobs.name}
                  className="rounded-2xl bg-gray-800 py-10 px-8"
                >
                  <img
                    className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                    src={jobs.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                    {jobs.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-400">{jobs.role}</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    <li>
                      <Link
                        href={jobs.githubUrl}
                        className="text-gray-400 hover:text-gray-300"
                        target="_blank"
                      >
                        <span className="sr-only">Github</span>
                        <jobs.icon
                          className="h-6 w-6"
                          aria-hidden="true"
                          _blank
                        />
                      </Link>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <footer className="bg-esteban_blue">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8" />
      </footer>
    </div>
  );
};

export default Resume;
