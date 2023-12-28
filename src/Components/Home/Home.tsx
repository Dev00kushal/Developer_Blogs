import { useRef } from "react";
import Button from "../Button";
import useHomeGsap from "../Utils/Home.gsap";
const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useHomeGsap();
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
                route="/login"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scale-90 mb-20 ">
        <h1 className="text-5xl white font-mono ">Why are we here ?</h1>
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
              <div className="text-lg font-black">
                Introduction to Blogging:
              </div>
              Welcome to our blog space, a platform where ideas come to life.
              Blogs are more than words on a screen; they're a canvas for
              expressing thoughts, sharing experiences, and fostering a
              community of like-minded individuals.
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
              <div className="text-lg font-black">The Coder's Perspective </div>
              In the coding world, blogging is a powerful tool. It goes beyond
              writing code; it's about sharing knowledge, insights, and
              problem-solving approaches. By documenting experiences, coders
              contribute to the collective learning and growth of the
              programming community.
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
              <div className="text-lg font-black">
                Crafting the Blogging Experience
              </div>
              Our blog has evolved to offer a seamless and enriching experience.
              Join us on a visual journey through our blog's interface, designed
              for an immersive reading experience.
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
              <div className="text-lg font-black">The Art of Sharing</div>
              Our blog captures and shares moments. It's a space where
              narratives unfold, secrets are shared, and experiences are
              immortalized. Join us in exploring the diverse tapestry of
              stories, gossips, and experiences contributed by individuals from
              various walks of life.
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
              <div className="text-lg font-black">
                Engage with Dynamic Content
              </div>
              Our blog adapts and evolves with each post. It's not just static
              content; it's a dynamic space where you can explore various
              topics. From coding techniques to the latest industry trends, our
              blog offers a spectrum of engaging content.
            </div>
            <hr />
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
            ></div>
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
