import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden md:h-[40rem]">
          <div
            className="flex items-center hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/img/bg1.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div className="mx-auto max-h-72 max-w-7xl px-6 lg:px-8 backdrop-blur-2xl border border-gray-600 rounded-md my-10">
              <div className="mx-auto max-w-full lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
                  About Us
                </h2>
                <p className="text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  aperiam labore odit laudantium eum optio quisquam, cum aliquid
                  quia, eligendi, accusantium aliquam sapiente vitae quasi ea
                  nam quod sequi? Reprehenderit sequi aperiam in quidem optio
                  repudiandae recusandae porro consequatur, pariatur deleniti,
                  iure laborum natus ex excepturi, deserunt ullam similique ad.
                </p>
              </div>
              {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 mt-10 p-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, illum!
        </div> */}
            </div>
          </div>
          <div
            className="flex items-center hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/img/bg2.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div className="mx-auto max-h-72 max-w-7xl px-6 lg:px-8 backdrop-blur-2xl border border-gray-600 rounded-md my-10">
              <div className="mx-auto max-w-full lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
                  About Us
                </h2>
                <p className="text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  aperiam labore odit laudantium eum optio quisquam, cum aliquid
                  quia, eligendi, accusantium aliquam sapiente vitae quasi ea
                  nam quod sequi? Reprehenderit sequi aperiam in quidem optio
                  repudiandae recusandae porro consequatur, pariatur deleniti,
                  iure laborum natus ex excepturi, deserunt ullam similique ad.
                </p>
              </div>
              {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 mt-10 p-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, illum!
        </div> */}
            </div>
          </div>
          <div
            className="flex items-center hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/img/bg4.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div className="mx-auto max-h-72 max-w-7xl px-6 lg:px-8 backdrop-blur-2xl border border-gray-600 rounded-md my-10">
              <div className="mx-auto max-w-full lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
                  About Us
                </h2>
                <p className="text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  aperiam labore odit laudantium eum optio quisquam, cum aliquid
                  quia, eligendi, accusantium aliquam sapiente vitae quasi ea
                  nam quod sequi? Reprehenderit sequi aperiam in quidem optio
                  repudiandae recusandae porro consequatur, pariatur deleniti,
                  iure laborum natus ex excepturi, deserunt ullam similique ad.
                </p>
              </div>
              {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 mt-10 p-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, illum!
        </div> */}
            </div>
          </div>
          <div
            className="flex items-center hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/img/bg1.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div className="mx-auto max-h-72 max-w-7xl px-6 lg:px-8 backdrop-blur-2xl border border-gray-600 rounded-md my-10">
              <div className="mx-auto max-w-full lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
                  About Us
                </h2>
                <p className="text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  aperiam labore odit laudantium eum optio quisquam, cum aliquid
                  quia, eligendi, accusantium aliquam sapiente vitae quasi ea
                  nam quod sequi? Reprehenderit sequi aperiam in quidem optio
                  repudiandae recusandae porro consequatur, pariatur deleniti,
                  iure laborum natus ex excepturi, deserunt ullam similique ad.
                </p>
              </div>
              {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 mt-10 p-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, illum!
        </div> */}
            </div>
          </div>
          <div
            className="flex items-center hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <img
              src="/img/bg2.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div className="mx-auto max-h-72 max-w-7xl px-6 lg:px-8 backdrop-blur-2xl border border-gray-600 rounded-md my-10">
              <div className="mx-auto max-w-full lg:mx-0 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
                  About Us
                </h2>
                <p className="text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  aperiam labore odit laudantium eum optio quisquam, cum aliquid
                  quia, eligendi, accusantium aliquam sapiente vitae quasi ea
                  nam quod sequi? Reprehenderit sequi aperiam in quidem optio
                  repudiandae recusandae porro consequatur, pariatur deleniti,
                  iure laborum natus ex excepturi, deserunt ullam similique ad.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <Footer />
    </div>
  );
}
