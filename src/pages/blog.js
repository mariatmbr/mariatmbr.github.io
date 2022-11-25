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
                    <h2 class="card-title">
                    My experience as a STEP Intern! 
                    <div class="badge badge-primary"> NEW</div>
                    </h2>
                    <p>Tips and tricks about getting an internship @ Google.</p>
                    <div class="card-actions">
                    <div class="badge badge-outline">Tech</div> 
                    <div class="badge badge-outline">Prep</div> 
                    <div class="badge badge-outline">Computer Science</div>
                    <div class="badge badge-outline">Experience</div>
                    </div>
                    
                    <button class="btn btn-primary mt-5">Read more</button>

                </div>
            </div>

            <div class="card glass lg:card-side text-neutral-content mt-4 mr-4">
                <figure class="p-6">
                </figure>
                <div class="max-w-md card-body">
                    <h2 class="card-title">Projects & Experience</h2>
                    <p className= "font-semibold">Want to know more about my Projects & Experience?
                        <span className="font-light">Be my guest! </span>
                    </p>
                    <div class="card-actions">
                        <button class="btn glass rounded-full" onClick={() => navigate("/about/projects")}> know more</button>
                    </div>
                </div>
            </div>

        </div>


    </Layout>
}