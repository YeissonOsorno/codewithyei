import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <>
      <section className="min-w-screen grid items-center justify-between py-8 lg:grid-cols-2 lg:grid-rows-1">
        <div className="mb-10 flex h-full w-full flex-col items-start justify-center pr-8 xl:mb-0">
          <div className="flex flex-col items-center justify-start md:flex-row">
            {/* <span>
                <img
                alt="An image about David Levai" class="border-2 border-gray-200 rounded-full w-32 h-32 shadow-md"
                srcset="/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=96&amp;q=60 1x, /_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=256&amp;q=60 2x"
                src="/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=256&amp;q=60" decoding="async" data-nimg="fixed"
                /><noscript></noscript></span> */}
            <h2 className="font-display ml-2 text-4xl font-extrabold leading-tight sm:text-4xl sm:leading-none md:text-4xl lg:text-4xl xl:text-6xl">
              Yeisson Osorno
            </h2>
          </div>
          <p className="mt-2 text-lg ">
            Un curioso que crea contenido sobre programación y tecnología
          </p>
          <p className="mt-8 text-sm text-gray-400 dark:text-gray-400">
            Temas: React, Node Js, .NET,creación de aplicaciones productividad, ejercicios y algunas
            otras cosas milenarias.
          </p>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/codewithyei">
            <a
              className="my-3 flex flex-row items-center text-sm font-bold leading-6 text-green-600 hover:text-gray-100"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                fill="currentColor"
                stroke="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="mr-1 h-4 w-4"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
              También estoy publicando cosas en Twitter
            </a>
          </a>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
          <div className="my-2 grid items-start gap-8">
            <div className="group relative">
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-green-600 to-amber-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <Link href="/projects">
                <a className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                  <span className="flex items-center space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 -rotate-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      ></path>
                    </svg>
                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                      Algúnas de las aplicaciones construidas
                    </span>
                  </span>
                  <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    Proyectos →
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div className="my-2 grid items-start gap-8">
            <div className="group relative">
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-primary-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <a target="_blank" href="https://www.twitch.tv/codewithyei" rel="noreferrer">
                <a className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                  <span className="flex items-center space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 -rotate-6 text-fuchsia-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                      Ayudando a crecer como Dev
                    </span>
                  </span>
                  <span className="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    Mentorias &amp; Streaming →
                  </span>
                </a>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
