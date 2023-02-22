"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { BsFillMoonStarsFill, BsTelephone } from "react-icons/bs";
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
  SiVuedotjs,
  SiGit,
  SiMaterialui,
  SiGodotengine,
} from "react-icons/si";
import photo from "../public/photo.png";
import roguelike from "../public/roguelike.png";
import site1 from "../public/site-1.png";
import site2 from "../public/site-2.png";
import site3 from "../public/site-3.png";
import site4 from "../public/site-4.png";
import site5 from "../public/site-5.png";
import site6 from "../public/site-6.png";
import site7 from "../public/site-7.png";
import site8 from "../public/site-8.png";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import Technology from "./Technology";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "bg-gray-900 dark" : " bg-white"}>
      <main className="px-10 mx-auto max-w-4xl dark:text-gray-400 pb-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Maksymilian Dendura</h1>
            <div className="flex gap-4 items-center">
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl hover:text-teal-500 text-black dark:text-gray-400 dark:hover:text-teal-500"
                onClick={() => setDarkMode(!darkMode)}
              />
              <div className="text-3xl text-gray-600 dark:text-gray-400">
                <Link
                  href="https://github.com/Noniv"
                  className="hover:scale-110 transition-transform hover:text-teal-500 text-black dark:text-gray-400 dark:hover:text-teal-500"
                  aria-label="Github"
                  target="_blank"
                >
                  <AiFillGithub />
                </Link>
              </div>
            </div>
          </nav>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden">
            <Image
              src={photo}
              className="object-contain w-full h-full object-bottom pt-8"
              alt="My photo"
            />
          </div>
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
              holiday internship in{" "}
              <span className="text-teal-600">Argonium</span> (2021) and{" "}
              <span className="text-teal-600">Ideo</span> (2022).
            </p>
          </div>
          <Link
            className="flex items-center gap-2 justify-center text-lg hover:text-teal-500 md:text-xl w-fit mx-auto"
            href="mailto:maksymilian.dendura@gmail.com"
          >
            <FiMail />
            maksymilian.dendura@gmail.com
          </Link>
          <Link
            className="flex items-center gap-2 justify-center text-lg hover:text-teal-500 md:text-xl w-fit mx-auto mt-2"
            href="tel:+48782418841"
          >
            <BsTelephone />
            +48 782 418 841
          </Link>
        </section>

        <section>
          <h3 className="text-3xl py-1 mt-10 mb-2 lg:mb-10 text-center">
            Technologies I use
          </h3>
          <div className="text-2xl lg:grid lg:grid-cols-3 lg:gap-10">
            <Technology title="Next.js">
              <SiNextdotjs className="text-black dark:text-white" />
            </Technology>
            <Technology title="React.js">
              <SiReact className="text-cyan-400" />
            </Technology>
            <Technology title="Vue.js">
              <SiVuedotjs className="text-emerald-500" />
            </Technology>
            <Technology title="Svelte.js">
              <SiSvelte className="text-orange-600" />
            </Technology>
            <Technology title="Tailwind CSS">
              <SiTailwindcss className="text-blue-400" />
            </Technology>
            <Technology title="TypeScript">
              <SiTypescript className="text-blue-600" />
            </Technology>
            <Technology title="HTML5">
              <SiHtml5 className="text-orange-600" />
            </Technology>
            <Technology title="CSS3">
              <SiCss3 className="text-blue-700" />
            </Technology>
            <Technology title="JavaScript (ES6)">
              <SiJavascript className="text-yellow-500" />
            </Technology>
            <div></div>
            <Technology title="GIT">
              <SiGit className="text-orange-600" />
            </Technology>
          </div>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-400 text-center mt-4">
            I have also a basic knowledge in raster graphics editors like GIMP
            and design tools like Figma. My English level is around C1, proven
            by TOEIC gold certificate.
          </p>
        </section>

        <section className="mt-10 lg:mt-36">
          <h3 className="text-3xl py-1 mb-6 text-center lg:mb-12">
            My projects
          </h3>
          <div className="lg:grid-cols-2 lg:grid gap-10">
            <Card
              src={site1}
              title='"KOD" conference website'
              description='Website made for SKNI "KOD" special conference. 25 years passed really quick!'
              href="https://kod.prz.edu.pl/konferencja"
            >
              <SiTailwindcss className="text-blue-400" />
              <SiNextdotjs className="text-black dark:text-white" />
              <SiTypescript className="text-blue-600" />
            </Card>
            <Card
              src={site2}
              title='"Maden" hair salon'
              description="Website made as a part of my engineering project. Sadly, not a real salon."
              href="https://maden.vercel.app/"
            >
              <SiTailwindcss className="text-blue-400" />
              <SiSvelte className="text-orange-600" />
            </Card>
            <Card
              src={site3}
              title="Pogodeo"
              description="Weather app made for internship recruitment process."
              href="https://pogodeo.vercel.app/home"
            >
              <SiTailwindcss className="text-blue-400" />
              <SiReact className="text-cyan-400" />
              <SiTypescript className="text-blue-600" />
            </Card>
            <Card
              src={site4}
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

        <section className="mt-20 lg:mt-36">
          <h3 className="text-3xl py-1 text-center">Team projects</h3>
          <p className="text-md pb-8 pt-4 leading-8 text-gray-800 md:text-xl dark:text-gray-400 text-center lg:pt-6 lg:pb-12">
            Some of these websites are not hosted on the web and contain only
            GitHub links as I do not own them. Projects with only one
            contributor were made together with Visual Studio Code Live Share
            tool.
          </p>
          <div className="lg:grid-cols-2 lg:grid gap-10">
            <Card
              src={site5}
              title="Covideo"
              description="Controlling COVID-19 cases in different countries have never been easier."
              href="https://github.com/mateuszaliyev/covideo"
            >
              <SiTailwindcss className="text-blue-400" />
              <SiNextdotjs className="text-black dark:text-white" />
              <SiTypescript className="text-blue-600" />
            </Card>
            <Card
              src={site6}
              title="Power law checker"
              description="A proof that almost every website's words and letters distribution follows the power law."
              href="https://st-163926-163935.vercel.app/"
            >
              <SiNextdotjs className="text-black dark:text-white" />
              <SiTypescript className="text-blue-600" />
            </Card>
            <Card
              src={site7}
              title="ChopTheBill"
              description="Easy costs distribution among friends. Chop the bills, literally!"
              href="https://github.com/mateuszaliyev/chopthebill"
            >
              <SiMaterialui className="text-blue-500" />
              <SiNextdotjs className="text-black dark:text-white" />
            </Card>
            <Card
              src={site8}
              title="Farm Assistant"
              description="Support your farm management with this application."
              href="https://github.com/marioooo0o/FarmAssisant"
            >
              <SiHtml5 className="text-orange-600" />
              <SiCss3 className="text-blue-700" />
              <SiJavascript className="text-yellow-500" />
            </Card>
          </div>
          <div className="mt-10 flex lg:w-1/2 mx-auto">
            <Card
              src={roguelike}
              title="Roguelike"
              description="Not a front end project, but we gave a lot of our hearts for this game."
              href="https://github.com/skni-kod/roguelike"
            >
              <SiGodotengine className="text-blue-500" />
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
