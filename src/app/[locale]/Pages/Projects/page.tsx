import React from "react";
import { useTranslations } from "next-intl";
import ProjectCard from "@/Components/ProjectCard";

function Projects() {
  const t = useTranslations("Projects");
  return (
    <div className="flex flex-col p-10 items-center justify-center ">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <ProjectCard
          title={t("items.HSMCH.title")}
          techs={[
            "React",
            "Vite",
            "Redux",
            "Formik",
            "Tailwind CSS",
            "TypeScript",
            "Node.js",
            "Express",
            "MySQL",
          ]}
          imageSrc="/HSMCH/HSMCH-Dashboard.svg"
          description={t("items.HSMCH.description")}
          githubUrl="https://github.com/KenithDev/HSMCH-APP"
          gallery={[
            "/HSMCH/HSMCH-Registro.svg",
            "/HSMCH/HSMCH-Deudas.svg",
            "/HSMCH/HSMCH-Ingresos.svg",
            "/HSMCH/HSMCH-Egresos.svg",
            "/HSMCH/HSMCH-Recibos.svg",
          ]}
        />
        <ProjectCard
          title={t("items.SkillConnect.title")}
          techs={[
            "React",
            "Vite",
            "Node.js",
            "MongoDB",
            "Express",
            "Tailwind CSS",
          ]}
          imageSrc="/SkillConnect/SkillConnect-Home.svg"
          description={t("items.SkillConnect.description")}
          githubUrl="https://github.com/KenithDev/SkillFront"
          liveUrl="https://skill-front.vercel.app/"
          gallery={[
            "/SkillConnect/SkillConnect-Perfil.svg",
            "/SkillConnect/SkillConnect-Rutas.svg",
            "/SkillConnect/SkillConnect-Cursos.svg",
            "/SkillConnect/SkillConnect-Becas.svg",
            "/SkillConnect/SkillConnect-Quizz.svg",
            "/SkillConnect/SkillConnect-Planes.svg",
            "/SkillConnect/SkillConnect-Adult.svg",
            "/SkillConnect/SkillConnect-Kids.svg",
          ]}
        />
        <ProjectCard
          title={t("items.StudyRoom.title")}
          techs={["Java", "WebSocket", "MySQL", "NetBeans"]}
          imageSrc="/StudyRoom/StudyRoom.svg"
          description={t("items.StudyRoom.description")}
          githubUrl="https://github.com/KenithDev/Biblioteca-UCV"
          gallery={[
            "/StudyRoom/Asignacion Salas.svg",
            "/StudyRoom/Cronometro.svg",
            "/StudyRoom/EnvioCorreo.svg",
            "/StudyRoom/HistorialRegistro.svg",
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
