import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useHomeGsap = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
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

    timelineItems.forEach((_, index) => {
      const colorChangeTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.timeline-item-${index}`,
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
      });

      colorChangeTimeline.to(`.timeline-item-${index}`, {
        backgroundColor: "white",
        color: "black",
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
};

export default useHomeGsap;
