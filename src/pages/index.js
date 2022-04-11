import * as React from "react"
import Layout from "../components/Layout";
import homeGif from "../images/home-gif.gif";
import { animateHome } from "../components/home-anim";

export default function IndexPage() {

  React.useEffect(() => {
    animateHome();
  }, []);

  return <Layout img={homeGif} bgTopMargin={20}>
    <h1 className="text-white">
      <span className="flex flex-row justify-between">
        <div className="flex flex-col w-1/4 mt-32 ml-5">
          <span className="title inline-block font-mono font-bold text-lg mb-5">
            Hello, I'm Maria Tîmbur
          </span>
          <span className="body font-mono font-medium">
            I am 21 and currently pursuing a Computer Science Major at the University Politechnica of Bucharest.
          </span>
        </div>

        <div className="flex flex-col w-1/4 mt-32">
          <span className="more ml-2 mb-2 font-mono font-bold text-lg mb-5">
            Want to know more?
          </span>
          <a class="more-button btn btn-secondary btn glass mt-2 btn-circle w-1/2 ml-5 bg-color"
            href="/about">
            know more
          </a>


        </div>
      </span>
    </h1>
  </Layout>
}