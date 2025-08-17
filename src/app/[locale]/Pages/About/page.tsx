import {
  ArrowLongUpRight,
  BrandGithub,
  BrandLinkedin,
} from "@mynaui/icons-react";
import Link from "next/dist/client/link";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("about");
  return (
    <section className="flex flex-col justify-center items-center px-6 gap-10 py-15 md:px-10 lg:px-30 md:flex-row md:gap-10">
      <div className="w-full md:w-1/2 flex flex-col gap-6 items-start text-center md:text-left">
        <h1 className="text-6xl font-bold ">{t("title")}</h1>
        <p className="text-lg sm:text-lg text-gray-300 text-justify">
          {t("description")}
        </p>
        <div className="flex flex-row gap-2 ">
          <Link
            href="https://github.com/kenithDev"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <BrandGithub size={30} />
          </Link>{" "}
          <Link
            href="https://www.linkedin.com/in/kenith-guanilo-pizarro-1147ab2ab/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <BrandLinkedin size={30} />
          </Link>
        </div>

        <Link
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-500 focus-visible:text-purple-500 font-semibold group/link text-base"
          href="/Documents/CV-KenithGuanilo.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          {t("Cv")}
          <span className="inline-block ml-1">
            <ArrowLongUpRight size={12} />
          </span>
        </Link>
      </div>
      <div className="flex items-center order-first md:order-last justify-center w-full md:w-1/2">
        <Image
          src="/Assets/KenithDev.svg"
          alt="KenithDev"
          width={320}
          height={320}
          className="w-80 h-80 rounded-t-lg sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-100 lg:h-100 xl:w-130 xl:h-130 object-cover md:rounded-tl-3xl md:rounded-br-3xl shadow-xl shadow-blue-500/50 md:skew-y-6 transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </section>
  );
}

export default About;
