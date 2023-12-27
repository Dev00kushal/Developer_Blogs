import _, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const animateElement = (
      element: string,
      options: { opacity?: number; toggleActions?: string }
    ) => {
      gsap.from(element, {
        opacity: options.opacity || 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 50%",
          toggleActions: options.toggleActions || "play none none reverse",
        },
      });
    };

    gsap.from(".hero-content p", {
      opacity: 0,
      y: 30,
      scrollTrigger: {
        trigger: ".hero-content p",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    animateElement(".hero-content", { opacity: 1 });
    animateElement(".section", { opacity: 1 });

    gsap.from(".btn-error, .contentall", {
      opacity: 0,
      y: 30,
      scrollTrigger: {
        trigger: ".btn-error",
        start: "top 90%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.set(".mockup-browser", { opacity: 0 });

    gsap.to(".mockup-browser", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".mockup-browser",
        start: "top 90%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    const colorTimeline = gsap.timeline({ repeat: -1, yoyo: true });

    colorTimeline.to(".mockup-browser", {
      boxShadow: "0 0 10px rgba(255, 0, 0, 0.8)",
      scrollTrigger: {
        trigger: ".mockup-browser",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    colorTimeline.to(".mockup-browser", {
      boxShadow: "0 0 10px rgba(0, 255, 0, 0.8)",
    });

    colorTimeline.to(".mockup-browser", {
      boxShadow: "0 0 10px rgba(0, 0, 255, 0.8)",
    });

    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      pin: ".hero-content",
      pinSpacing: false,
    });

    const itemTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });

    const timelineItems = document.querySelectorAll(".timeline li");
    timelineItems.forEach((item, index) => {
      item.classList.add(`timeline-item-${index}`);
    });

    // Add animations for each list item
    timelineItems.forEach((_, index) => {
      const colorChangeTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.timeline-item-${index}`,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
      });

      colorChangeTimeline.to(`.timeline-item-${index}`, {
        backgroundColor: "green", // Change this to the color you prefer
      });
      itemTimeline.from(
        `.timeline-item-${index} div.timeline-middle`,
        { opacity: 0, y: 20, duration: 0.5 },
        index * 0.2
      );
      itemTimeline.from(
        `.timeline-item-${index} div.timeline-start, .timeline-item-${index} div.timeline-end`,
        { opacity: 0, y: 20, duration: 0.5 },
        index * 0.2
      );
      itemTimeline.from(
        `.timeline-item-${index} div.mb-10`,
        { opacity: 0, y: 20, duration: 0.5 },
        index * 0.2
      );
      itemTimeline.from(
        `.timeline-item-${index} hr`,
        { scaleX: 0, transformOrigin: "left center", duration: 0.5 },
        index * 0.2
      );
    });

    gsap.from(".phone-1", {
      opacity: 0,
      y: 50,
      yoyo: true,
      scrollTrigger: {
        trigger: ".artboard-demo.phone-1",
        start: "top 50%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <div className="mockup-browser border bg-base-300 scale-75 mb-10">
        <div className="mockup-browser-toolbar">
          <div className="input">https://shittyDevBlogs.com</div>
        </div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(../public/mock.gif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "300px",
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">Hello there</h1>
              <p className="mb-5 text-2xl">
                Created a blogging platform for my side project and practice.
                Welcome all to explore and engage! It's a space where thoughts
                find a home. Join in the conversation and share your ideas. A
                platform crafted for both learning and expression. Dive into the
                world of blogging I've built for us.
              </p>
              <Button
                btnName="Get started"
                styler="btn  btn-accent btn-lg"
                route="/login"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scale-90 mb-20">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end ">
              <time className="font-mono italic">1984</time>
              <div className="text-lg font-black">First Macintosh computer</div>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the
              original Apple Macintosh personal computer. It played a pivotal
              role in establishing desktop publishing as a general office
              function. The motherboard, a 9 in (23 cm) CRT monitor, and a
              floppy drive were housed in a beige case with integrated carrying
              handle; it came with a keyboard and single-button mouse.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end ">
              <time className="font-mono italic">1998</time>
              <div className="text-lg font-black">iMac</div>
              iMac is a family of all-in-one Mac desktop computers designed and
              built by Apple Inc. It has been the primary part of Apple's
              consumer desktop offerings since its debut in August 1998, and has
              evolved through seven distinct forms
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end ">
              <time className="font-mono italic">2001</time>
              <div className="text-lg font-black">iPod</div>
              The iPod is a discontinued series of portable media players and
              multi-purpose mobile devices designed and marketed by Apple Inc.
              The first version was released on October 23, 2001, about 8+1⁄2
              months after the Macintosh version of iTunes was released. Apple
              sold an estimated 450 million iPod products as of 2022. Apple
              discontinued the iPod product line on May 10, 2022. At over 20
              years, the iPod brand is the oldest to be discontinued by Apple
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end ">
              <time className="font-mono italic">2007</time>
              <div className="text-lg font-black">iPhone</div>
              iPhone is a line of smartphones produced by Apple Inc. that use
              Apple's own iOS mobile operating system. The first-generation
              iPhone was announced by then-Apple CEO Steve Jobs on January 9,
              2007. Since then, Apple has annually released new iPhone models
              and iOS updates. As of November 1, 2018, more than 2.2 billion
              iPhones had been sold. As of 2022, the iPhone accounts for 15.6%
              of global smartphone market share
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end ">
              <time className="font-mono italic">2015</time>
              <div className="text-lg font-black">Apple Watch</div>
              The Apple Watch is a line of smartwatches produced by Apple Inc.
              It incorporates fitness tracking, health-oriented capabilities,
              and wireless telecommunication, and integrates with iOS and other
              Apple products and services
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <div className="mockup-phone border-primary ml-10 scale-100">
          <div className="camera"></div>
          <div className="display">
            <div
              className="artboard artboard-demo phone-1"
              style={{
                backgroundImage: "url(../public/writing.gif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "500px",
                width: "250px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="text-5xl text-center scale-90 font-bold text-white">
                Start Exploring ..
              </p>
            </div>
          </div>
        </div>
        <div className="ml-5">
          <h1 className="text-5xl font-bold">
            Write your stories,Gossips,experiences!
          </h1>
          <p className="py-6 mr-20">
            Its a platform where narratives unfold, secrets are shared, and
            experiences are immortalized. <br /> Explore the diverse tapestry of
            stories, gossips, and experiences contributed by individuals from
            various walks of life. <br /> Immerse yourself in the richness of
            human perspectives and discover the myriad of tales that shape our
            world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
