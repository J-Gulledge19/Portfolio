export default function About() {

    return (
      <section id="about">
          <div data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-out" data-aos-duration="900" className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 px-10">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://i.imgur.com/WwCHTKa.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-stone-300">
                Hi, I'm Josh.
                <br className="hidden lg:inline-block" /> I enjoy problem solving and learning new things.
              </h1>
              <p className="mb-8 leading-relaxed mt-10 mb-10 text-stone-300">
              I am a Full Stack Software Engineer who embraces challenges that rely heavily on my 10+ years of experience in problem solving and deductive reasoning. With a strong foundation of adaptability, creativity and collaboration,  I am looking to transition my proven analytical skills into the digital sector where I can continue to create and expand knowledge in software development.
              </p>
              <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/joshgulledge/" class="relative inline-flex items-center mr-1 px-8 py-1 overflow-hidden text-lg font-medium text-stone-300 border-2 border-blue-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span class="absolute left-0 block w-full h-0 transition-all bg-blue-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-8 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="relative">My LinkedIn</span>
                </a>

                <a href="https://github.com/J-Gulledge19" class="relative inline-flex items-center mr-1 px-8 py-1 overflow-hidden text-lg font-medium text-stone-300 border-2 border-blue-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span class="absolute left-0 block w-full h-0 transition-all bg-blue-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-8 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="relative">My GitHub</span>
                </a>

                <a href="https://docs.google.com/document/d/1Q2D7sv1Lea7w44XFhEabS5TpRDWhgKoIZ8oWKgwOBxw/edit?usp=sharing" class="relative inline-flex items-center px-8 py-1 overflow-hidden text-lg font-medium text-stone-300 border-2 border-blue-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span class="absolute left-0 block w-full h-0 transition-all bg-blue-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-8 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="relative">My Resume</span>
                </a>
              </div>
              <br></br>
            </div>

          </div>
        </section>
      );
    }
