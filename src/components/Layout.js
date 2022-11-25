import * as React from "react";
import NavBar from "./NavBar.js"
import SEO from "./seo.js";

export default function Layout({ children, img, bgTopMargin }) {
    if(!bgTopMargin){
        bgTopMargin = 0;
    }

    return <main className="h-screen">
        <div className="absolute z-0 bg-black w-screen h-screen overflow-hidden">
            <img src={img} className={"object-cover transform scale-110 w-screen h-screen mt-" + bgTopMargin}></img>
        </div>
        <SEO />
        <title>
            Maria's Website
        </title>
        <div className="relative flex flex-col z-100 h-full">
            <NavBar />
            <div className="container mx-auto overflow-hidden my-auto h-full">
                {children}
            </div>
        </div>
    </main>
}