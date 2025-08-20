"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Locale } from "next-intl";
import "./index.css";

export default function Hero() {
  const t = useTranslations("Hero");
  const router = useRouter();
  const { locale } = useParams() as { locale: Locale };

  return (
    <section className="p-10 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-6 py-8 md:py-12">
          <h1 className="flex flex-col gap-2 text-4xl xl:text-5xl font-bold text-center md:text-left whitespace-pre-line">
            {t("title")}
            <span className="text-blue-500">{t("name")}</span>
            {t("role")}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 text-center md:text-left">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="px-5 py-3 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transform transition duration-300 ease-in-out hover:scale-105"
              onClick={() => router.push(`/${locale}/Pages/Projects`)}
            >
              {t("ctaPrimary")}
            </button>
            <button
              className="px-5 py-3 text-sm font-medium text-white rounded-full border-2 border-blue-500 transform transition duration-300 ease-in-out hover:scale-105 "
              onClick={() => router.push(`/${locale}/Pages/About`)}
            >
              {t("ctaSecondary")}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center ml-8 md:ml-5 xl:ml-20 ">
          <Image
            src="/Assets/KenithDev.svg"
            alt="KenithDev"
            width={320}
            height={320}
            className="w-80 h-80 sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-100 lg:h-100 xl:w-130 xl:h-130 object-cover rounded-full animate-glow"
          />
        </div>
      </div>
    </section>
  );
}
