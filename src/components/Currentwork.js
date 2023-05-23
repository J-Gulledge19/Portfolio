import { GiAutoRepair } from 'react-icons/gi';
import { GiSilverBullet } from 'react-icons/gi';
// import { projects } from "../data";

export default function CurrentWork() {
  return (
    <section id="currentwork" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <GiAutoRepair className="mx-auto inline-block w-12 h-20 mb-4 mt-20" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-stone-300">
            Current Projects
          </h1>
            <h1 className="grid grid-cols-2 gap-4 place-content-start h-8 sm:text-2xl text-2xl font-medium title-font mt-4 text-stone-300">Sayner Mobil</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-stone-300">
            <GiSilverBullet className="w-8 h-20 inline-block mb-4"/>A website for a gas station in northern Wisconsin. Currenlty in the planning stages awaiting customers specifications.</p>
            <br></br>
            <h1 className="grid grid-cols-2 gap-4 place-content-start h-8 sm:text-2xl text-2xl font-medium title-font mt-4 text-stone-300">Job Tracker</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-stone-300"> 
            <GiSilverBullet className="w-8 h-20 inline-block mb-4"/>Rebuilding my Sheetmetal Job Tracker website using Python, React and adding in Mobx for scalability. Hoping to make it easier for sheetmetal shops to track a job's downloads and due dates.
          </p>
        </div>
      </div>
    </section>
  );
}