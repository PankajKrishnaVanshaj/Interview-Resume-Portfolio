import Header from "@/components/Header";
import { ReceiptText, ScrollText, Speech } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src={"/grid.svg"}
        alt=""
        className="absolute z-[-10] w-full"
        width={1200}
        height={300}
      />
      <Header />
      <section className=" z-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">pankri.com All new Apps</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="block text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            PK JobHive
            <div className="mb-4 text-4xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-br from-pink-900 via-blue-500 to-yellow-600 md:text-5xl lg:text-6xl dark:text-white">
              Your Personal AI Interview Coach
            </div>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Double your chances of landing that job offer with our AI-powered
            interview prep
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Start Free
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </a>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-bold text-gray-400 uppercase">Features</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500  text-2xl font-bold sm:justify-between">
              <a
                href="#"
                className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <Speech />
                <span className="ml-2">Interview</span>
              </a>
              <a
                href="#"
                className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <ReceiptText />
                <span className="ml-2">Resume</span>
              </a>
              <a
                href="#"
                className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <ScrollText />
                <span className="ml-2">Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="how-it-works"
        className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
      >
        <h2 className="font-bold text-3xl">How it Works?</h2>
        <h2 className="text-md text-gray-500">
          Give mock interview in just 4 simplar easy step
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <a
            className="block rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <h2 className="mt-4 text-xl font-bold text-black">
              Write the Topic
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Choose a topic relevant to the interview. This could be a
              technical subject, behavioral scenario, or industry-related
              question.
            </p>
          </a>

          <a
            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <h2 className="mt-4 text-xl font-bold text-black">
              Generate Questions
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Create a list of questions based on the chosen topic. These
              questions should be designed to gauge the interviewee&apos;s
              knowledge, problem-solving skills, and ability to articulate their
              thoughts clearly.
            </p>
          </a>

          <a
            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <h2 className="mt-4 text-xl font-bold text-black">
              Conduct Interview
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Use the questions to conduct the interview. This can be done in
              various formats such as a live conversation, recorded video, or
              written responses.
            </p>
          </a>
          <a
            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <h2 className="mt-4 text-xl font-bold text-black">
              Get AI Feedback
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              After the interview, gather feedback to evaluate the performance
              and identify areas for improvement. This can be done through
              self-assessment, peer review, or feedback from AI
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/dashboard"
            className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
