import { Header } from "../components/Header";
import { useState } from "react";
import {
  AcademicCapIcon,
  LanguageIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const formalEducation = [
  {
    name: "Fidélitas University",
    description: "Systems Engineering – 2021 - Studying",
    icon: AcademicCapIcon,
  },
  {
    name: "Professional Technical College of Granadilla",
    description: "Baccalaureate in Secondary Education – 2020",
    icon: AcademicCapIcon,
  },
];
const certificates = [
  {
    name: "CCNAv7: Introduction to Networks",
    description: "Cisco Networking Academy (2021)",
    icon: AcademicCapIcon,
  },
  {
    name: "Introduction to IoT",
    description: "Cisco Networking Academy (2021)",
    icon: AcademicCapIcon,
  },
  {
    name: "Scrum Fundamentals Certified",
    description: "SCRUMstudy (2021)",
    icon: AcademicCapIcon,
  },
  {
    name: "CCNAv7: Switching, Routing and Wireless Essentials",
    description: "Cisco Networking Academy (2022)",
    icon: AcademicCapIcon,
  },
];
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
const languages = [
  {
    name: "Spanish",
    level: "Native",
    icon: LanguageIcon,
  },
  {
    name: "English",
    level: "70%",
    icon: LanguageIcon,
  },
];

const Resume = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-esteban_blue">
      <Header />
      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
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

        {/* Header section */}
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center sm:pt-10">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              José Esteban Salguero Vásquez
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Software Engineer
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium leading-6 text-white">
                  Professional Experience:
                </h3>
                <p className="mt-2">
                  05/2022 – Present [Software Developer React/React Native]
                  [Novusource]
                </p>
                <div className="mt-5">
                  <h4 className="text-lg font-medium leading-6 text-white">
                    Responsibilities:
                  </h4>
                  <p className="mt-2">
                    Activities carried out by me at Novusource as a software
                    developer are:
                    <br />
                    1. Development of web applications using React.
                    <br />
                    2. Development of mobile applications using React Native.
                    <br />
                    3. Consumption of APIs.
                    <br />
                    4. Design of pages and components using Tailwind as a
                    framework.
                    <br />
                    5. Management of the Git version control system.
                    <br />
                    6. Creation of components with StoryBook.
                    <br />
                    7. Development of Queries using GraphQL.
                    <br />
                    8. Interface design and improvement of the user experience
                    using Adobe XD and Figma tools.
                    <br />
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-white">
                  Professional Objective:
                </h3>
                <p className="mt-2">
                  Technology enthusiast with great willingness to learn the use
                  of new tools constantly, willing to perform different tasks
                  involved in software development, especially in
                  frontend-focused programming using Typescript as development
                  language, Tailwind as design framework and using React as
                  development library, as well as React Native if it is mobile
                  development.
                </p>
                <div className="mt-5">
                  <h4 className="text-lg font-medium leading-6 text-white">
                    About me:
                  </h4>
                  <p className="mt-2">
                    Advanced student of Systems Engineering at Fidélitas
                    University with 89% of the degree completed, willing to
                    learn new technologies and committed to delivering the best
                    quality of work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-16 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Formal Education:
            </h2>
          </div>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {formalEducation.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <value.icon
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  {value.name}
                </dt>{" "}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-8 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Certificates:
            </h2>
          </div>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {certificates.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <value.icon
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  {value.name}
                </dt>{" "}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-8 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Languages:
            </h2>
          </div>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {languages.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <value.icon
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  {value.name}
                </dt>{" "}
                <dd className="inline">({value.level})</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-16 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Work Experience:
            </h2>
            <ul
              role="list"
              className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
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
