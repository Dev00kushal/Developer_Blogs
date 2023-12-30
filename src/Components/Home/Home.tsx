import { useRef } from "react";
import Button from "../Button/Button";
import useHomeGsap from "../../Utils/Home.gsap";
import { TimelineContent } from "../../Constants/Home.constants";

const TimelineItem = ({
  title,
  description,
  isStart,
}: {
  title: string;
  description: string;
  isStart: boolean;
}) => (
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
    <div className={`timeline-${isStart ? "start" : "end"}`}>
      <div className="text-lg font-black underline">{title}</div>
      {description}
    </div>
    <hr />
  </li>
);

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useHomeGsap();

  const backgroundImageUrl = "../public/mock.gif";
  const writingGifUrl = "../public/writing.gif";

  return (
    <div data-scroll-container ref={scrollRef}>
      <div className="mockup-browser border bg-base-300 scale-75 mb-10">
        <div className="mockup-browser-toolbar">
          <div className="input">https://DevBlogs.com</div>
        </div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
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
          <div className="hero-TimelineContent text-center text-neutral-TimelineContent">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold mb-5">Hello there</h1>
              <div className="flex">
                <p className="text-2xl mb-5">
                  Welcome to our blogging platform a space where thoughts find a
                  home. Whether you're here to share your ideas or explore those
                  of others, we invite you to join the conversation. Ready to
                  dive in? Take the first step by creating an account. Sign up
                  to unlock a world of learning and expression. Your journey
                  into the blogging realm begins here.
                </p>
              </div>
              <Button
                btnName="Get started"
                styler="btn  btn-accent btn-lg"
                route="/signup"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scale-90 mb-20 ">
        <h1 className="text-5xl white font-mono ">Why are we here ?</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {TimelineContent.map((content, index) => (
            <TimelineItem
              key={index}
              title={content.title}
              description={content.description}
              isStart={index % 2 === 0}
            />
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <div className="mockup-phone border-primary ml-10 scale-100">
          <div className="camera"></div>
          <div
            className="artboard artboard-demo phone-1"
            style={{
              backgroundImage: `url(${writingGifUrl})`,
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
          ></div>
        </div>
        <div className="ml-5">
          <h1 className="text-5xl font-bold">
            Write your stories, Gossips, experiences!
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
