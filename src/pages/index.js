import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet htmlAttributes={{ lang: "pl" }}>
        <title>Reframe Technologies</title>
        <meta name="description" content="..." />
      </Helmet>
      <Header />

      <main class="flex flex-col gap-10 sm:gap-16 md:gap-20 lg:gap-28 items-center flex-1">
        <section className="text-center text-base sm:text-lg md:text-2xl lg:text-3xl leading-normal sm:leading-normal md:leading-normal lg:leading-normal space-y-9 max-w-3xl w-full flex flex-col justify-center pt-[20vh]">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            Why Isn’t Technology Making Us More Productive?
          </h1>
          <p className="italic">Our computers are failing us.</p>
          <p>
            Despite amazing & powerful capabilities, our favorite tools are
            stuck in silos, unable to truly work together and ultimately are
            failing to make us happier or even that much more productive.
          </p>
          <div
            className="
            max-w-3xl w-full flex flex-col items-center gap-12 pt-8
            before:content-[''] before:block before:w-px before:h-[10vh] sm:before:h-[15vh] md:before:h-[20vh] lg:before:h-[25vh] before:border-l-2 before:border-dotted before:border-gray-300
            after:content-[''] after:block after:w-px after:h-[10vh] sm:after:h-[15vh] md:after:h-[20vh] lg:after:h-[25vh] after:border-l-2 after:border-dotted after:border-gray-300
          "
          >
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              How <strong className="underline font-black">work</strong> should{" "}
              <strong className="italic font-black">work</strong>
            </h2>
          </div>
        </section>
        <section className="rounded-3xl bg-gray-100 text-base sm:text-lg md:text-xl lg:text-2xl px-8 py-8 sm:py-12 md:py-16 lg:py-24 w-full max-w-7xl flex flex-col items-center leading-normal sm:leading-normal md:leading-normal lg:leading-normal">
          <div className="max-w-3xl w-full flex flex-col gap-7 sm:gap-9 md:gap-12 lg:gap-16">
            <header className="flex flex-col gap-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                What we believe
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-3xl leading-normal sm:leading-normal md:leading-normal lg:leading-normal">
                We imagine a world where our computers work{" "}
                <strong className="bg-yellow-300 rounded">for us</strong>, not
                against us. Bringing applications, people, and the right
                information{" "}
                <strong className="bg-yellow-300 rounded">
                  together as one
                </strong>
                .
              </p>
            </header>

            <svg
              width="134"
              height="22"
              viewBox="0 0 134 22"
              fill="none"
              className="self-center"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M127.934 5.82608C127.934 7.29884 129.128 8.49275 130.601 8.49275C132.073 8.49275 133.267 7.29884 133.267 5.82608C133.267 4.35332 132.073 3.15941 130.601 3.15941C129.128 3.15941 127.934 4.35332 127.934 5.82608ZM111.909 17.5819L112.175 18.0051L111.909 17.5819ZM87.5367 15.1998L87.1936 15.5635L87.5367 15.1998ZM80.725 8.77363L81.0681 8.40993V8.40993L80.725 8.77363ZM53.2762 8.77364L52.933 8.40995L53.2762 8.77364ZM46.4645 15.1998L46.1214 14.8361L46.4645 15.1998ZM22.0923 17.5819L22.3585 17.1586L22.0923 17.5819ZM0.733907 5.82608C0.733907 7.29884 1.92781 8.49275 3.40057 8.49275C4.87333 8.49275 6.06724 7.29884 6.06724 5.82608C6.06724 4.35332 4.87333 3.15941 3.40057 3.15941C1.92781 3.15941 0.733907 4.35332 0.733907 5.82608ZM127.934 15.8261C127.934 17.2988 129.128 18.4927 130.6 18.4927C132.073 18.4927 133.267 17.2988 133.267 15.8261C133.267 14.3533 132.073 13.1594 130.6 13.1594C129.128 13.1594 127.934 14.3533 127.934 15.8261ZM111.909 4.07029L112.175 3.64704L111.909 4.07029ZM87.5365 6.45241L87.1934 6.08871V6.08871L87.5365 6.45241ZM80.7248 12.8785L81.0679 13.2422L80.7248 12.8785ZM53.276 12.8785L52.9329 13.2422L53.276 12.8785ZM46.4643 6.4524L46.1212 6.8161L46.4643 6.4524ZM22.0921 4.07029L22.3583 4.49354L22.0921 4.07029ZM0.733724 15.8261C0.733724 17.2988 1.92763 18.4927 3.40039 18.4927C4.87315 18.4927 6.06706 17.2988 6.06706 15.8261C6.06706 14.3533 4.87315 13.1594 3.40039 13.1594C1.92763 13.1594 0.733724 14.3533 0.733724 15.8261ZM130.334 5.40283L111.643 17.1586L112.175 18.0051L130.867 6.24933L130.334 5.40283ZM87.8798 14.8361L81.0681 8.40993L80.3819 9.13733L87.1936 15.5635L87.8798 14.8361ZM52.933 8.40995L46.1214 14.8361L46.8076 15.5635L53.6193 9.13734L52.933 8.40995ZM22.3585 17.1586L3.66677 5.40283L3.13438 6.24933L21.8261 18.0051L22.3585 17.1586ZM46.1214 14.8361C39.6556 20.9358 29.883 21.891 22.3585 17.1586L21.8261 18.0051C29.7364 22.9802 40.0102 21.9761 46.8076 15.5635L46.1214 14.8361ZM81.0681 8.40993C73.1698 0.958693 60.8314 0.958703 52.933 8.40995L53.6193 9.13734C61.1323 2.04957 72.8688 2.04956 80.3819 9.13733L81.0681 8.40993ZM111.643 17.1586C104.118 21.891 94.3455 20.9358 87.8798 14.8361L87.1936 15.5635C93.9909 21.976 104.265 22.9802 112.175 18.0051L111.643 17.1586ZM130.867 15.4028L112.175 3.64704L111.642 4.49354L130.334 16.2493L130.867 15.4028ZM87.1934 6.08871L80.3817 12.5148L81.0679 13.2422L87.8796 6.8161L87.1934 6.08871ZM53.6191 12.5148L46.8074 6.0887L46.1212 6.8161L52.9329 13.2422L53.6191 12.5148ZM21.8259 3.64704L3.1342 15.4028L3.66659 16.2493L22.3583 4.49354L21.8259 3.64704ZM46.8074 6.0887C40.0101 -0.323889 29.7363 -1.32803 21.8259 3.64704L22.3583 4.49354C29.8828 -0.238845 39.6554 0.716315 46.1212 6.8161L46.8074 6.0887ZM80.3817 12.5148C72.8687 19.6026 61.1321 19.6026 53.6191 12.5148L52.9329 13.2422C60.8312 20.6935 73.1696 20.6935 81.0679 13.2422L80.3817 12.5148ZM112.175 3.64704C104.265 -1.32804 93.9907 -0.323882 87.1934 6.08871L87.8796 6.8161C94.3454 0.716321 104.118 -0.23885 111.642 4.49354L112.175 3.64704Z"
                fill="currentColor"
              />
            </svg>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black">
                Total Cohesion
              </h3>
              <p>
                Computers today lack situational awareness, forcing us to
                maintain the context in our heads to fill the gaps between
                applications, team members, and projects.
              </p>
              <p>
                We see a new type of system seamlessly connected to the people,
                the context and the content that we need. A single environment
                where we can{" "}
                <em>
                  efficiently <strong className="italic">orchestrate</strong>
                </em>{" "}
                each initiative regardless of how we want to work, where we want
                to work, and even the choice of tools we use to get the job
                done.
              </p>
              <p>
                The people, the tools and the work come together as one, as if
                all of it was meant to work that way from the start.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black line-through">
                Information Overload
              </h3>
              <p>
                We deserve to be free from the busy work of constant
                communications, creating and recreating contexts around
                projects, and managing the multitude of documents & messages
                flying around.
              </p>
              <p>
                Our computers should work to quiet the noise, leaving only the
                relevant bits from the sea of information, at the ready to
                engage with on our own terms. This is about an approach that
                frees our minds to fully unleash human ingenuity on the work we
                do instead of assuming <em>AI</em> will somehow magically solve
                this for us.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black">
                Work Reframed
              </h3>
              <p>
                We are not cogs in a wheel or widgets on an assembly line.
                Starting from brain science instead of computer science, it is
                time that technology empowers us to be the best version of
                ourselves. Always focused on what matters and set up to achieve
                maximum effectiveness as fully engaged, fulfilled and empowered
                professionals.
              </p>
              <p>
                This is how <strong className="underline">work</strong> should{" "}
                <strong className="italic">work</strong>.
              </p>
            </div>

            <p>
              <span className="transform inline-block -rotate-3 font-handwritten text-4xl sm:text-5xl md:text-6xl">
                The Reframe Team.
              </span>
            </p>
          </div>
        </section>
        <section className="rounded-3xl bg-black text-white px-8 py-10 sm:py-16 md:py-20 lg:py-28 w-full max-w-7xl flex flex-col items-center leading-normal">
          <div className="max-w-3xl w-full flex flex-col gap-10 sm:gap-16 md:gap-20 lg:gap-28">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              A whole new way of working and creating has arrived.
            </h2>

            <form
              action="https://reframetech.us18.list-manage.com/subscribe/post?u=4a191ef5c00ce87868b590e85&amp;id=c7fbbdb34f&amp;f_id=004b67e7f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_self"
            >
              <label
                for="mce-email"
                className=" text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 block"
              >
                Leave your email to get updates:
              </label>
              <div className="relative group flex gap-4 items-center border-b border-white transition focus-within:border-blue-400">
                <input
                  type="email"
                  id="mce-email"
                  name="EMAIL"
                  required
                  placeholder="mail@example.com"
                  className="font-mono bg-transparent py-3 md:py-4 lg:py-6 text-base sm:text-lg md:text-xl lg:text-3xl block w-full focus:outline-none transition"
                />
                <div className="absolute -left-[5000px]" aria-hidden="true">
                  <input
                    type="text"
                    name="b_4a191ef5c00ce87868b590e85_c7fbbdb34f"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <button
                  type="submit"
                  className="hidden group-focus-within:block bg-white/20 p-2 md:p-3 lg:p-5 text-base sm:text-lg md:text-xl lg:text-2xl rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl transition hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home
