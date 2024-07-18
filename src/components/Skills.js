import { GiSkills } from "react-icons/gi"
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <GiSkills className="w-12 h-20 inline-block mb-4 mt-20" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-stone-300 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-stone-300">
            Ya I got skills what are you going to do about it.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center shadow-2xl shadow-black">
                      <img className="object-scale-down h-20 w-10 ml-4" src={skill.image} alt= ''/>
                    <span className="title-font font-medium text-white p-5">
                      {skill.skill}
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}