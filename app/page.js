"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import {
  SiTailwindcss,
  SiSvelte,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "bg-gray-900 dark" : " bg-white"}>
      <main className="px-10 mx-auto max-w-4xl dark:text-gray-400 pb-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Maksymilian Dendura</h1>
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl hover:text-teal-500"
              onClick={() => setDarkMode(!darkMode)}
            />
          </nav>
          <div className="text-center py-6">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl">
              Maksymilian Dendura
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Front end developer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-400">
              I graduated from{" "}
              <span className="text-teal-600">
                Rzeszow University of Technology
              </span>{" "}
              this year. Beside the lectures, I was also a member of{" "}
              <span className="text-teal-600">SKNI "KOD"</span> - a Student
              Scientific Association where I participated in projects and
              courses. I have already got my first work experience during
              holiday internship.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <Link
              href="https://github.com/Noniv"
              className="hover:scale-110 transition-transform hover:text-teal-500"
              aria-label="Github"
            >
              <AiFillGithub />
            </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden p-4">
            <Image
              src="/photo.png"
              fill
              className="object-contain pt-8"
              alt="My photo"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <Link
            className="flex items-center gap-2 justify-center text-lg mt-6 hover:text-teal-500 md:text-xl"
            href="mailto:maksymilian.dendura@gmail.com"
          >
            <FiMail />
            maksymilian.dendura@gmail.com
          </Link>
        </section>

        <section className="mt-10">
          <h3 className="text-3xl py-1 mb-6">My projects</h3>
          <div className="lg:flex gap-10 flex-wrap justify-between">
            <Card
              src="/site-1.png"
              title='"KOD" conference website'
              description='Website made for SKNI "KOD" special conference. 25 years passed really quick!'
              href="https://kod.prz.edu.pl/konferencja"
            >
              <SiTailwindcss className="text-blue-400" />
              <SiNextdotjs className="text-black dark:text-white" />
            </Card>
            <Card
              src="/site-2.png"
              title='"Maden" hair salon'
              description="Website made as a part of my engineering project. Sadly, not a real salon."
              href="https://maden.vercel.app/"
            >
              <SiTailwindcss className="text-blue-400" />
              <SiSvelte className="text-orange-600" />
            </Card>
            <Card
              src="/site-3.png"
              title="Pogodeo"
              description="Weather app made for internship recruitment process."
              href="https://pogodeo.vercel.app/home"
            >
              <SiTailwindcss className="text-blue-400" />
              <SiReact className="text-cyan-400" />
              <SiTypescript className="text-blue-600" />
            </Card>
            <Card
              src="/site-4.png"
              title="Front End Developer Clicker"
              description="One of my first websites - simple clicker game made with pure HTML, CSS and JavaScript."
              href="https://noniv.github.io/Front-End-Developer-Clicker/"
            >
              <SiHtml5 className="text-orange-600" />
              <SiCss3 className="text-blue-700" />
              <SiJavascript className="text-yellow-500" />
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
