export default function Home() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900  w-full h-full relative">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kavach</span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-4 dark:text-white md:dark:text-blue-500" aria-current="page">Features</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</a>
              </li>
              <button className="absolute top-3 right-0 md:right-4 m-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 rounded-3xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-500">
                <span className="relative dark:bg-gray-900 rounded-3xl group-hover:bg-opacity-0">
                  Login
                </span>
              </button>
            </ul>
          </div>
        </div>
    </nav>
    <div><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[220%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>

      <section className="bg-white dark:bg-gray-900">
      <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[150%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="relative max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white z-10">Empowering you with Protection, Anytime, Anywhere</h1>
            <p className="relative max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 z-10">Automatically detecting danger, triggering alerts, and enabling anonymous reporting for personal and institutional protection.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-6 text-base font-medium text-center text-white rounded-3xl bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-6 overflow-hidden text-sm font-medium text-gray-900 rounded-3xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-500">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-125 bg-white dark:bg-gray-900 rounded-3xl group-hover:bg-opacity-0">
                Sign Up
              </span>
            </button>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Download App
            </button>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="./img.png " alt="mockup"/>
          </div>                
        </div>
      </section>

      {/* Lorem Ipsum Text */}
      <div className="text-center max-w-screen-md mx-auto my-8">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Features</h1>    
        <p className="text-lg font-light text-gray-600 dark:text-gray-300">
        Our mobile app and web platform are designed to offer robust safety features to ensure your protection and peace of mind. These features are carefully crafted to address critical needs and provide comprehensive support:
        </p>
      </div>

      {/* Card Section */}
      <div className="flex justify-center items-center space-x-6 my-8">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"/>
        </svg>

          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">SOS</h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Instantly alert emergency contacts and authorities with a single tap.</p>
          <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
            See our guideline
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </a>
        </div>
        {/* Second Card */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
        <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg>

          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Automatic Detection</h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Our system detects unusual activity and sends alerts automatically.</p>
          <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
            Learn more
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </a>
        </div>
        {/* Third Card */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 6 2 2 4-4m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
</svg>

          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Reporting Anonymously</h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Report any issues or incidents anonymously without fear of retribution.</p>
          <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
            Get in touch
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </a>
        </div>
      </div>
      <section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Questions & Answers</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Kavach</p>
        </div>

        <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">What is Kavach?</p>
                    <p class="mt-4 text-base text-gray-400">Kavach is a groundbreaking safety app that empowers individuals with automatic protection when needed. Using advanced technology, Kavach senses danger and triggers an SOS alert with your location, even when you can't reach your phone.

</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">What is the Misson?</p>
                    <p class="mt-4 text-base text-gray-400">Our mission is to ensure everyone, especially women, feels secure wherever they are. By analyzing multimodal data—audio, video, images, motion—Kavach proactively detects threats before they escalate.

</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">What about Community?</p>
                    <p class="mt-4 text-base text-gray-400">Kavach fosters safer communities. The web version lets users anonymously report issues, from facilities problems to serious incidents, helping create a more responsive environment.</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">How do you provide support?</p>
                    <p class="mt-4 text-base text-gray-400">Our mobile app and web platform are designed to offer robust safety features to ensure your protection and peace of mind. These features are carefully crafted to address critical needs and provide comprehensive support</p>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center mt-12 md:mt-20">
            <div class="px-8 py-4 text-center bg-gray-800 rounded-full">
                <p class="text-gray-50">Didn’t find the answer you are looking for? <a href="#" title="" class="text-blue-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400 hover:underline">Contact our support</a></p>
            </div>
        </div>
    </div>
</section>
      

<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kavach</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Kavach™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  );
}
