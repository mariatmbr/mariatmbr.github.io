import * as React from "react";
import photo from "../images/me.jpeg";

export default function NavBar() {

    return <div class="navbar mb-2 shadow-lg text-neutral-content bg-transparent">
        <div class="px-2 mx-2 navbar-start">
            <a class="btn btn-ghost text-mono font-bold" 
            href = "/">
                MARIA TÎMBUR
            </a>
        </div>
        <div class="navbar-center hidden px-2 mx-2 lg:flex pr-100">
            <div class="flex items-stretch">
                <a class="btn btn-ghost btn-sm rounded-btn" 
                href="/">
                    Home
                </a>
                <a class="btn btn-ghost btn-sm rounded-btn"
                    href="/blog">
                    Blog
                </a>
                <a class="btn btn-ghost btn-sm rounded-btn"
                   href="/about">
                    About
                </a>
                <a class="btn btn-ghost btn-sm rounded-btn"
                    href="/contact">
                    Contact
                </a>
            </div>
        </div>
        <div class="navbar-end">
            <div class="avatar">
                <div class="rounded-full w-20 h-20 m-1">
                <img src={photo} className="w-50 h-50"/>
                </div>
            </div>
        </div>
    </div>
}