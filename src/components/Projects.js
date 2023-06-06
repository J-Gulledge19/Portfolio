// import { CodeIcon } from "@heroicons/react/solid";
import { SiXcode } from 'react-icons/si';
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <SiXcode className="mx-auto inline-block w-12 h-20 mb-4 mt-20" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-stone-300">
            Past Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-stone-300">
            Here are some applications I have built using different frameworks and languages.<br></br> Hover/click on images to see a small description of each site and the technologies used. <br></br>Websites may take a few seconds to load data as they are free deployments on Render.com.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
                <a href={project.link}>
                  <button class="relative inline-flex items-center justify-center p-0.5 mt-2 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Live Link
                    </span>
                  </button>
                </a>
                <a href={project.github}>
                  <button onClick={project.github} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    GitHub
                    </span>
                  </button>
                </a>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}