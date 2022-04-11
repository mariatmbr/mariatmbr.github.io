import * as React from "react"
import Layout from "../components/Layout";
import cer_si_cladiri from "../images/cer_si_cladiri.jpg";
import purple_mail from "../images/mail3.jpg";
import purple_linkedin from "../images/purple-linkedin.png";
import purple_git from "../images/git5.jpg";
import purple_fb from "../images/fb3.png";

import { animateHome } from "../components/home-anim";

export default function Contact() {

    React.useEffect(() => {
        animateHome();
    }, []);


    return <Layout img={cer_si_cladiri}>
        <div>

            <span className="flex flex-row justify-between text-white">
                <div className="flex flex-col w-1/4 mt-40 ml-5">
                    <span className="title font-mono font-bold text-lg mb-5">
                        Don't hesitate to contact me for further collaborations.
                    </span>
                </div>
                <div className="flex flex-col w-1/4 mt-40">
                    <span className="more ml-10 mb-2 font-mono font-bold text-lg mb-5">
                        Thank you for visiting my personal website!
                    </span>
                </div>
            </span>


            <div className="flex flex-col justify-end items-center h-full">
                <div className="flex justify-between w-1/3 mb-12">
                    <a href="https://www.linkedin.com/in/mariatmbr"> <img src={purple_linkedin} className="rounded-full w-16 h-16" /> </a>
                    <a href="https://github.com/mariatmbr"> <img src={purple_git} className="rounded-full w-16 h-16" /> </a>
                    <a href="https://www.facebook.com/ihaveabaddecade"> <img src={purple_fb} className="rounded-full w-16 h-16" /> </a>
                    <a href="mailto: mariatimbur27@gmail.com"> <img src={purple_mail} className="rounded-full w-16 h-16" /> </a>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full items-center">
            <span className="text-white mb-5 italic justify-end  font-extralight"> <h2>Copyright © by Maria Tîmbur 2022 </h2></span>
        </div>
    </Layout>
}