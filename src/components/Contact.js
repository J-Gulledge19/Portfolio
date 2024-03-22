import React from "react";
import Popup from 'reactjs-popup';
import { MdOutlineConnectWithoutContact } from "react-icons/md"

export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        // .then(() => alert("Message sent!"))
        // .catch((error) => alert(error));
    }
    return (
      <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=Elbert,+CO,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-4 px-8 rounded shadow-md">
              <div className="lg:w-1/2 px-2">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Elbert, CO 80106
                </p>
              </div>
              <div className="lg:w-1/2 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <h2 className="text-indigo-400 leading-relaxed">
                  Jgulledge19@gmail.com
                </h2>
              </div>
            </div>
          </div>
          <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-stone-300 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me <MdOutlineConnectWithoutContact className="inline"/>
          </h2>
          <p className="leading-relaxed mb-5 text-stone-300">
          Feel free to reach out and contact me! I would appriciate any opportunity or feed back you may have. Have a great day! 
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Popup trigger=
          {<button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>}  
                modal nested>
                {
                    close => (
                        <div className='p-8 mt-10'>
                            <div className='bg-white w-1/2 mx-auto p-4 rounded-md shadow-lg bg-gray-50'>
                                <h1 className="text-2xl font-bold text-blue-500 mb-4">
                                  Message sent! Thank you for reaching out! I will get back to you as soon as possible.
                                </h1>
                              <div className="text-right">
                                <button className="inline-block bg-blue-500 py-2 px-4 text-white rounded-md font-semibold uppercase text-sm " onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                              </div>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </form>
      </div>
    </section>
  );
}