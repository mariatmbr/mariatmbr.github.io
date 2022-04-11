import * as React from "react";
import Layout from "../components/Layout";
import fata_in_munti from "../images/fata_in_munti.jpg";
import first from "../images/1st.jpg";
import skills from "../images/skills.png";
import project from "../images/project.png";
import { navigate } from "gatsby";

export default function About() {
    return <Layout img={fata_in_munti}>
        <div class="grid grid-cols-2 items-start bg-part-about justify-items-start place-items-start">

            <div class="card glass lg:card-side text-neutral-content mt-4 mr-4">
                <figure class="p-6">
                    <img src="https://toppng.com/uploads/preview/icons-education-education-icon-purple-11553430165fbcetvy8ll.png" class="rounded-lg shadow-lg w-20 h-20 rounded-full" />
                </figure>
                <div class="max-w-md card-body">
                    <h2 class="card-title">Education</h2>
                    <p className="font-bold">University “Politehnica” of Bucharest:
                        <span className="font-light"> Faculty of Automatic Control and Computer Science  </span></p>
                    <p className="font-bold">    Expected graduation date: <span className="font-light"> July 2023 </span> </p>
                    <p className="font-bold">    Computer Science: <span className="font-light"> Bachelor’s degree, 3rd year  </span></p>
                    <p className="font-bold">    Current average GPA: <span className="font-light"> 9.83/10  </span> </p>
                </div>
            </div>


            <div class="card glass lg:card-side text-neutral-content mt-4 mr-4">
                <figure class="p-6">
                    <img src={project} class="rounded-lg shadow-lg w-20 h-20 rounded-full " />
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




            <div class="card glass lg:card-side text-neutral-content mt-4 mr-4">
                <figure class="p-6">
                    <img src={skills} class="rounded-lg shadow-lg w-20 h-20 rounded-full" />
                </figure>
                <div class="max-w-md card-body">
                    <h2 class="card-title">Skills</h2>
                    <div class="p-4 space-y-1 flex flex-col w-96">
                        <div className="flex flex-row w-full items-center">
                            <span className="font-normal">C</span>
                            <progress class="progress pl-20" value="70" max="100"></progress>
                        </div>
                        <div className="flex flex-row w-full items-center">
                            <p className="font-normal">C++</p>
                            <progress class="progress pl-16" value="60" max="100"></progress>
                        </div>
                        <div className="flex flex-row w-full items-center">
                            <p className="font-normal">Java</p>
                            <progress class="progress pl-14" value="70" max="100"></progress>
                        </div>
                        <div className="flex flex-row w-full items-center">
                            <p className="font-normal">HTML,CSS</p>
                            <progress class="progress pl-3" value="80" max="100"></progress>
                        </div>
                        <div className="flex flex-row w-full items-center">
                            <p className="font-normal">Javascript</p>
                            <progress class="progress pl-4" value="40" max="100"></progress>
                        </div>
                        <div className="flex flex-row w-full items-center">
                            <p className="font-normal">Assembly</p>
                            <progress class="progress pl-5" value="50" max="100"></progress>
                        </div>
                        <div className="flex flex-row w-full items-center">
                            <p className="font-normal">Matlab</p>
                            <progress class="progress pl-10" value="80" max="100"></progress>
                        </div>
                        <div className="flex flex-row w-full items-center">
                            <p className="font-normal">GitHub</p>
                            <progress class="progress pl-10" value="60" max="100"></progress>
                        </div>


                    </div>
                </div>
            </div>


            <div class="card glass lg:card-side text-neutral-content mt-4 mr-4">
                <figure class="p-6">
                    <img src={first} class="rounded-lg shadow-lg w-20 h-20 rounded-full" />
                </figure>
                <div class="max-w-md card-body">
                    <h2 class="card-title">Awards & Achievements</h2>
                    <ul class="list-disc">
                        <li className="pb-2"> <span className="font-semibold">2021 Summer Insight Series Participant at Goldman Sachs: </span>
                        <span className="font-light">this program is focused on reviewing
                            interview best-practices, and networking with professionals from across the firm. </span></li>

                        <li className="pb-2"> <span className="font-semibold">Volunteering at “GirlsGoIT” community </span> <span className="font-light">by organizing Bootcamps in my hometown and spreading love for STEM
                            among women </span></li>
                        <li> <span className="font-semibold">Qualified for 12 different National Olympiads, </span> <span className="font-light">including Maths, Science, History, Geography and French</span> </li>
                    </ul>
                </div>
            </div>
        </div>


    </Layout>
}