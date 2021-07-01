import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
          <div>
                           <style dangerouslySetInnerHTML={{__html: "\n  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap');\n\n  .font-mont{\n      font-family: 'Montserrat', sans-serif;\n  }\n  " }} />
        <section className="w-full px-3 antialiased lg:px-6 font-mont" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1614588359734-b438b290844a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80")'}}>
          <div className="mx-auto max-w-7xl">
            <div className="container py-32 mx-auto text-center sm:px-4">
              <h1 className="text-4xl leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-6xl">
                <span className="block">Convert your Unstructured Data</span>
                <span className="relative inline-block mt-3 text-green-400">
                  Easy Solution to Develop API
                </span>
              </h1>
              <div className="max-w-lg mx-auto mt-6 text-sm text-center text-gray-300 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing</div>
              <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">
                <input type="text" name="email" placeholder="Email Address" className="w-full h-12 px-6 py-2 font-medium text-white focus:outline-none bg-gray-900" /> <span className="relative top-0 right-0 block">
                  <button type="button" className="inline-flex items-center w-32 h-12 px-8 text-base leading-6 text-black transition duration-150 ease-in-out bg-green-400 border border-transparent hover:bg-green-500 focus:outline-none active:bg-green-500">
                    SIGNUP
                  </button>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-800 body-font bg-white font-bold">
          <div className="container px-5 py-20 sm:px-12 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-xl text-lg title-font mb-2 text-green-400">
                Tools
              </h1>
              <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900">
                Usecases and Industries
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded shadow-xl mb-6 h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=428&q=80" />
                </div>
                <h2 className="text-2xl title-font text-green-800 mt-5">
                  Agriculture
                </h2>
                <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p> <a href="#_" className="text-green-800 inline-flex items-center mt-3">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded shadow-xl mb-6 h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://source.unsplash.com//random/profile" />
                </div>
                <h2 className="text-2xl title-font text-green-800 mt-5">
                  Medicine
                </h2>
                <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p> <a href="#_" className="text-green-800 inline-flex items-center mt-3">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded shadow-xl mb-6 h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://source.unsplash.com/random/office" />
                </div>
                <h2 className="text-2xl title-font text-green-800 mt-5">
                  Engineering
                </h2>
                <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p> <a href="#_" className="text-green-800 inline-flex items-center mt-3">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded shadow-xl mb-6 h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://source.unsplash.com/random/nature" />
                </div>
                <h2 className="text-2xl title-font font-bold text-green-800 mt-5">
                  Education
                </h2>
                <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p> <a href="#_" className="text-green-800 inline-flex items-center mt-3">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-green-800 to-green-900 font-mont">
          <div className="container px-6 py-16 mx-auto">
            <div className="items-center md:flex">
              <div className="w-full md:w-1/2">
                <div className="max-w-lg">
                  <div className="max-w-6xl px-5 mx-auto space-y-6">
                    <h1 className="tracking-tight leading-10 text-left text-white text-4xl md:text-4xl">
                      <span className="block">
                        Design API 
                        <span className="block mt-1 text-gray-100 lg:inline lg:mt-0 border-b-2 border-yellow-200">
                          Simple JSON
                        </span>
                      </span>
                    </h1>
                    <p className="w-full mx-auto text-base text-left text-white md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="relative flex flex-col md:flex-row md:space-x-4"> <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-green-500 md:mb-0 hover:bg-green-600 md:w-auto rounded-full">
                        Try It Free
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
                <img className="w-full h-full max-w-2xl shadow-2xl rounded" src="https://source.unsplash.com/collection/190727/620x360/" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-800 body-font font-bold font-mont bg-white">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img className="lg:w-5/6 mb-10 h-64 object-cover object-center" alt="hero" src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" />
            <div className="lg:w-5/6 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                We feel happy everytime you contact us.
              </h1>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 border-b" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 border-b" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 border-b" defaultValue={""} />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="text-white bg-green-400 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 text-lg rounded-full">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-black bg-opacity-90 body-font font-mont">
          <div className="container px-5 pt-12 mx-auto flex md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="flex-grow flex flex-wrap md:text-left text-center">
              <div className="lg:w-1/4 w-full px-4">
                <h2 className="text-green-400 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="#_" className="text-white">First Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Second Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Third Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 w-full px-4">
                <h2 className="text-green-400 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="#_" className="text-white">First Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Second Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Third Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 w-full px-4">
                <h2 className="text-green-400 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="#_" className="text-white">First Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Second Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Third Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 w-full px-4">
                <h2 className="text-green-400 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="#_" className="text-white">First Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Second Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Third Link</a>
                  </li>
                  <li>
                    <a href="#_" className="text-white">Fourth Link</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 py-4 flex flex-wrap flex-col sm:flex-row justify-center text-center bg-green-900">
            <p className="text-gray-400 text-sm text-center">© 2021-2022 
              <a href="#_" rel="noopener noreferrer" className="text-gray-100 ml-1" target="_blank">All rights reserved.</a>
            </p>
          </div>
        </footer>
            </div>
        )
    }
}

export default Navbar
