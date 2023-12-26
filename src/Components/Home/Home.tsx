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

    gsap.set(".mockup-browser", { opacity: 0 }); // Set initial opacity to 0

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
      <div className="mockup-browser border bg-base-300 scale-75">
        <div className="mockup-browser-toolbar">
          <div className="input">https://shittyDevBlogs.com</div>
        </div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(../public/mock.gif)",
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
      <div className="flex items-center">
        <div className="mockup-phone border-primary ml-3 scale-100">
          <div className="camera"></div>
          <div className="display">
            <div
              className="artboard artboard-demo phone-1"
              style={{
                backgroundImage:
                  "url(../public/writing.gif)",
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
            Write your stories,Gossips,exprence!
          </h1>
          <p className="py-6 mr-11">
            Welcome to a platform where narratives unfold, secrets are shared,
            and experiences are immortalized. <br /> Explore the diverse
            tapestry of stories, gossips, and experiences contributed by
            individuals from various walks of life. <br /> Immerse yourself in
            the richness of human perspectives and discover the myriad of tales
            that shape our world.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
