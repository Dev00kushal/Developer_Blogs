import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useHomeGsap = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const colorTimeline = gsap.timeline({ repeat: -1, yoyo: true });

    colorTimeline.to(".mockup-browser", {
      boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)",
    });

    colorTimeline.to(".mockup-browser", {
      boxShadow: "0 0 10px rgba(0, 255, 0, 0.8)",
    });

    colorTimeline.to(".mockup-browser", {
      boxShadow: "0 0 10px rgba(0, 0, 255, 0.8)",
    });

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
        // backgroundColor: "#801A86",
        backgroundColor: "#1768AC",
        color: "white",
      });

      const itemTimeline = gsap.timeline();

      itemTimeline.from(
        `.timeline-item-${index} div.timeline-middle`,
        { opacity: 0, y: 20, duration: 0.5 },
      );
      itemTimeline.from(
        `.timeline-item-${index} div.timeline-start, .timeline-item-${index} div.timeline-end`,
        { opacity: 0, y: 20, duration: 0.5 },
      );
      itemTimeline.from(
        `.timeline-item-${index} div.mb-10`,
        { opacity: 0, y: 20, duration: 0.5 },
      );
      itemTimeline.from(
        `.timeline-item-${index} hr`,
        { scaleX: 0, transformOrigin: "left center", duration: 0.5 },
      );

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
