import * as React from "react";
import Layout from "../components/Layout";
import background from "../images/fata_in_munti2.jpg";
import google1 from "../images/google1.jpeg";
import { navigate } from "gatsby";

export default function Blog() {
    return <Layout img={background}>
        <div class="grid items-start bg-part-about justify-items-start place-items-start">
            <div class="card w-80 bg-black shadow-xl">
                <figure><img src={google1} /></figure>
                <div class="card-body justify-items-start">
                    <h2 class="card-title text-white">
                    How I got my 2 internships at Google
                    </h2>
                    <p class="text-white">Tips and tricks about getting an internship @ Google.</p>
                    <div class="card-actions">
                    <div class="badge badge-outline text-white">Tech</div> 
                    <div class="badge badge-outline text-white">Prep</div> 
                    <div class="badge badge-outline text-white">Computer Science</div>
                    <div class="badge badge-outline text-white">Experience</div>
                    </div>
                    <button class="b(tn btn-primary mt-5">
                        <a href="https://mariatimbur.medium.com/how-i-got-my-2-internships-at-google-the-interview-process-with-tips-tricks-66a252489d6e" target="_blank">Read More</a>
                    </button>
                </div>
            </div>
        </div>
    </Layout>
}
