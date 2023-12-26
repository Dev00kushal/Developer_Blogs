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

    animateElement(".mockup-browser", { opacity: 0 });
    animateElement(".hero-content", { opacity: 1 });
    animateElement(".section", { opacity: 1 });

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
          <div className="input">https://BlogsByKushal.com</div>
        </div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="contentall max-w-md">
              <h1 className="text-5xl font-bold mb-10" id="changeable-content">
                Hello
              </h1>
              <p className=" text-2xl mb-10 text-white ">
                Welcome to my personal blog website! Here, you can explore a
                collection of my own blogs and also contribute by writing your
                own. I believe in sharing knowledge and experiences, and this
                platform allows me to connect with readers like you. Feel free
                to browse through the articles and get inspired. Happy reading!
              </p>

              <Button route="/Login" btnName="Login" styler="error" onclick={""} />
            </div>
          </div>
        </div>
      </div>

      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
