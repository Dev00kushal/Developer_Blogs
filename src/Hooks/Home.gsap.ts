import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const useHomeGsap = () => {

  useEffect(() => {
    const colorTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    colorTimeline.to(".mockup-browser", {
      boxShadow: "0 0 20px rgba(128, 0, 128, 0.8)",
    });

    colorTimeline.to(".mockup-browser", {
      boxShadow: "0 0 20px rgba(0, 255, 0, 0.8)",
    });

    colorTimeline.to(".mockup-browser", {
      boxShadow: "0 0 20px rgba(0, 0, 255, 0.8)",
    });


    const techStackTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 0.5,
        once: true,
      },
    });

    techStackTimeline.from(".slide", { x: "-100%", opacity: 0, stagger: 0.2 });

    const timelineItems = document.querySelectorAll(".timeline li");

    timelineItems.forEach((item, index) => {
      item.classList.add(`timeline-item-${index}`);

      const colorChangeTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.timeline-item-${index}`,
          start: "top center",
          toggleActions: "play none play none",
        },
      });

      colorChangeTimeline.to(`.timeline-item-${index}`, {
        backgroundColor: "#1768AC",
        color: "white",
      });

      const itemTimeline = gsap.timeline();

      itemTimeline.from(`.timeline-item-${index} div.timeline-middle`, {
        opacity: 0,
        y: 20,
        duration: 0.5,
      });
      itemTimeline.from(
        `.timeline-item-${index} div.timeline-start, .timeline-item-${index} div.timeline-end`,
        { opacity: 0, y: 20, duration: 0.5 }
      );
      itemTimeline.from(`.timeline-item-${index} div.mb-10`, {
        opacity: 0,
        y: 20,
        duration: 0.5,
      });
      itemTimeline.from(`.timeline-item-${index} hr`, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
      });

      colorChangeTimeline.add(itemTimeline);
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
};

export default useHomeGsap;
