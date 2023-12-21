import { aboutMe } from "../data";

export default function MoreAbout() {
    return (
        <section id="moreabout">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40 mt-20">
                <div className="flex flex-col w-full mb-20">
                  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-stone-300">The man behind the Software Engineer</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-stone-300">
                  I enjoy spending time with my family and friends. As well as spending my free time shooting, gaming, playing hockey, and fishing/hunting. I also love building and designing new things whether its a new application or a at home project! I am always looking for new ways to learn and grow as a person and a developer. Here are some things I have built and designed in my free time.
                </p>
                </div>
              <div className="flex flex-wrap justify-center -m-4 mb-10">
              {aboutMe.map((aboutMe) => (
                <div className="sm:w-1/3 w-80 h-auto p-4 text-center mb-10">
                    <img
                      alt="gallery"
                      className="w-full h-full object-center m-auto px-2"
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
