export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Josh.
                <br className="hidden lg:inline-block" /> I enjoy problem solving and building new applications.
              </h1>
              <p className="mb-8 leading-relaxed mt-10 mb-10">
              I am a Full Stack Software Engineer who embraces challenges that rely heavily on my 10+ years of experience in problem solving and deductive reasoning. With a strong foundation of adaptability, creativity and collaboration,  I am looking to transition my proven analytical skills into the digital sector where I can continue to create and expand knowledge in software development.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/joshgulledge/"
                  className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 focus:outline-none hover:bg-sky-600 rounded text-md mr-2">
                  My LinkedIn
                </a>
                <a 
                  href="https://github.com/J-Gulledge19"
                  className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 focus:outline-none hover:bg-sky-600 rounded text-md mr-2">
                  My GitHub
                </a>
                <a 
                  href="https://docs.google.com/document/d/1Q2D7sv1Lea7w44XFhEabS5TpRDWhgKoIZ8oWKgwOBxw/edit?usp=sharing"
                  className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 focus:outline-none hover:bg-sky-600 rounded text-md mr-2">
                  My Resume
                </a>
              </div>
              <br></br>
              {/* <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Projects
                </a>
              </div> */}
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://i.imgur.com/WwCHTKa.jpg"
              />
            </div>
          </div>
        </section>
      );
    }
