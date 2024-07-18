import { aboutMe } from "../data";

export default function MoreAbout() {
    return (
        <section id="moreabout">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40 mt-20">
                <div className="flex flex-col w-full mb-20">
                  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-stone-300">The man behind the Software Engineer</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-left text-stone-300">
                  I'm a hands-on professional who's tackled everything from trimming trees around powerlines to mastering welding and commercial HVAC work. My love for challenges extends beyond the workplace, as I spend my free time shooting, gaming, playing hockey, and indulging in fishing and hunting.<br></br>
                  <br></br>
                  My journey has taken a digital turn as I transitioned from physical craftsmanship to become a software engineer. I bring the problem-solving skills I honed in hands-on trades to conquer new challenges in coding. It's a dynamic career journey that reflects my passion for continuous growth, adaptability, and overcoming obstacles, whether in the physical or virtual realm. Here are some things I have built and designed in my free time that pertain to the physical realm.
                </p>
                </div>
              <div className="flex flex-wrap justify-center -m-4 mb-10">
              {aboutMe.map((aboutMe) => (
                <div data-aos="fade-up" data-aos-duration="1000" className="sm:w-1/3 w-80 h-auto p-4 text-center mb-10">
                    <img
                      alt="gallery"
                      className="w-full h-full object-center m-auto px-2 rounded-3xl shadow-xl shadow-black"
                      src={aboutMe.image}
                    />
                      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-stone-300">{aboutMe.description}</p>
                </div>
              ))}
              </div>
          </div>
        </section>
      );
    }
