/* eslint-disable @next/next/no-img-element */
import { AcademicCapIcon, LanguageIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const formalEducation = [
  {
    name: "",
    description: "Systems Engineering – October 2024",
    icon: AcademicCapIcon,
  },
  {
    name: "Professional Technical College of Granadilla",
    description: " High School diploma – 2020",
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
  {
    name: "Fidélitas University",
    description: "Videogames development and systems security (2024)",
    icon: AcademicCapIcon,
  },
];
const jobs = [

  {
    name: "Tek Experts",
    role: "Accelerating Progress. Securing Futures",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBo1JoIsPdwGt74gRsVAwZ27C5fk3iAVwZfQ&s",
    githubUrl: "https://www.linkedin.com/company/tekexperts/",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.25C3.48122 1.25 2.25 2.48122 2.25 4C2.25 5.51878 3.48122 6.75 5 6.75C6.51878 6.75 7.75 5.51878 7.75 4C7.75 2.48122 6.51878 1.25 5 1.25ZM3.75 4C3.75 3.30964 4.30964 2.75 5 2.75C5.69036 2.75 6.25 3.30964 6.25 4C6.25 4.69036 5.69036 5.25 5 5.25C4.30964 5.25 3.75 4.69036 3.75 4Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8V21C7.75 21.4142 7.41421 21.75 7 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V8ZM3.75 8.75V20.25H6.25V8.75H3.75Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 8C9.25 7.58579 9.58579 7.25 10 7.25H14C14.4142 7.25 14.75 7.58579 14.75 8V8.43402L15.1853 8.24748C15.9336 7.92676 16.7339 7.72565 17.5433 7.65207C20.3182 7.3998 22.75 9.58038 22.75 12.3802V21C22.75 21.4142 22.4142 21.75 22 21.75H18C17.5858 21.75 17.25 21.4142 17.25 21V14C17.25 13.6685 17.1183 13.3505 16.8839 13.1161C16.6495 12.8817 16.3315 12.75 16 12.75C15.6685 12.75 15.3505 12.8817 15.1161 13.1161C14.8817 13.3505 14.75 13.6685 14.75 14V21C14.75 21.4142 14.4142 21.75 14 21.75H10C9.58579 21.75 9.25 21.4142 9.25 21V8ZM10.75 8.75V20.25H13.25V14C13.25 13.2707 13.5397 12.5712 14.0555 12.0555C14.5712 11.5397 15.2707 11.25 16 11.25C16.7293 11.25 17.4288 11.5397 17.9445 12.0555C18.4603 12.5712 18.75 13.2707 18.75 14V20.25H21.25V12.3802C21.25 10.4759 19.589 8.97227 17.6791 9.14591C17.025 9.20536 16.3784 9.36807 15.7762 9.6262L14.2954 10.2608C14.0637 10.3601 13.7976 10.3363 13.5871 10.1976C13.3767 10.0588 13.25 9.82354 13.25 9.57143V8.75H10.75Z" />
      </svg>
    ),
  },
  {
    name: "NovuSource",
    role: "Coding the next level of technology",
    imageUrl: "https://avatars.githubusercontent.com/u/84299171?s=200&v=4",
    githubUrl: "https://github.com/NovuSource",
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
    level: "80%",
    icon: LanguageIcon,
  },
];

export const Resume = () => {
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

      {/* Header section */}
      <div className="px-2">
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
                Professional Objective:
              </h3>
              <p className="mt-2">
                Technology enthusiast with great willingness to learn the use of
                new tools constantly, willing to perform different tasks
                involved in software development, especially in frontend-focused
                programming using Typescript as development language, Tailwind
                as design framework and using React as development library, as
                well as React Native if it is mobile development.
              </p>

            </div>
            <div>
              <div className="mt-5">
                <h4 className="text-lg font-medium leading-6 text-white">
                  About me:
                </h4>
                <p className="mt-2">
                  Systems Engineer with the career completed at Universidad Fidélitas with total
                  disposition to learn new technologies and committed to deliver
                  the best quality of work.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium leading-6 text-white">
                Professional Experience:
              </h3>
              <p className="mt-2">
                04/2024 - Present [Support Engineer on Microsoft Azure Monitoring and Automation] [Tek Experts]
              </p>
              <div className="mt-5">
                <h4 className="text-lg font-medium leading-6 text-white">
                  Responsibilities:
                </h4>
                <p className="mt-2">
                  Activities carried out by me at Tek Experts as a Support Engineer
                  are:
                  <br />
                  1. Provide advanced technical support for Microsoft Azure services, focused on monitoring and automation.
                  <br />
                  2. Diagnose and resolve complex technical issues related to Azure infrastructure and monitoring solutions.
                  <br />
                  3. Collaborate with internal and external teams to enhance automation solutions in Azure.
                  <br />
                  4. Configure and maintain custom alerts to monitor cloud resource performance.
                  <br />
                  5. Analyze resource usage and suggest improvements to optimize costs and performance.
                  <br />
                  6. Automate repetitive tasks through scripts and workflows to save time and reduce human error.
                  <br />
                  7. Provide technical support and troubleshoot user inquiries and issues via tickets or direct communication.
                  <br />
                  8. Document procedures and solutions, and provide training on effectively utilizing Azure services.
                  <br />
                </p>
              </div>
            </div>
            <div>
              <div className="mt-0">
                <p className="mt-2">
                  05/2022 – 01/2024 [Software Developer React/React Native]
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
                    1. Develop web applications using React, creating dynamic, high-performance user interfaces.
                    <br />
                    2. Build mobile applications with React Native, ensuring cross-platform functionality for iOS and Android.
                    <br />
                    3. Integrate and consume APIs to fetch and display dynamic data.
                    <br />
                    4. Design and implement pages and components using Tailwind CSS, maintaining visual consistency.
                    <br />
                    5. Manage code repositories with Git, ensuring effective version control and collaboration.
                    <br />
                    6. Create and document reusable UI components using StoryBook for a consistent design system.
                    <br />
                    7. Develop and optimize GraphQL queries for efficient data retrieval and manipulation.
                    <br />
                    8. Design user interfaces and enhance user experience with Adobe XD and Figma, focusing on usability and accessibility.
                    <br />
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
                        <jobs.icon className="h-6 w-6" aria-hidden="true" />
                      </Link>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
