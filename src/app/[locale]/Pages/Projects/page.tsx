import React from "react";
import { useTranslations } from "next-intl";
import ProjectCard from "@/Components/ProjectCard";

function Projects() {
  const t = useTranslations("Projects");
  return (
    <div className="flex flex-col p-10 items-center justify-center ">
      <h1 className="text-white text-4xl font-bold">{t("title")}</h1>
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
          techs={["Java", "WebSocket", "MySQL", "NetBeans","jdk 14","PhpMyAdmin"]}
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
        <ProjectCard
          title={t("items.KodoTakai.title")}
          techs={["Next.js", "Tailwind CSS", "TypeScript", "React"]}
          imageSrc="/KodoTakai/KodoTakai-Home.png"
          gallery={[
            "/KodoTakai/KodoTakai-Home.png",
            "/KodoTakai/KodoTakai-Contador.png",
            "/KodoTakai/KodoTakai-Planes.png",
            "/KodoTakai/KodoTakai-Footer.png",
          ]}
          description={t("items.KodoTakai.description")}
          githubUrl="https://github.com/KenithDev/KodoTakai"
          liveUrl="https://kodo-takai.vercel.app/"
        />
        <ProjectCard
          title={t("items.PedroDev | Portfolio website.title")}
          techs={["Next.js", "Tailwind CSS", "TypeScript", "React"]}
          imageSrc="/PedroDev/PedroDev-Home.png"
          gallery={[
            "/PedroDev/PedroDev-Professional Development.png",
            "/PedroDev/PedroDev-Services.png",
            "/PedroDev/PedroDev-Projects.png",
            "/PedroDev/PedroDev-Professional Experience.png",
          ]}
          description={t("items.PedroDev | Portfolio website.description")}
          githubUrl="https://github.com/KenithDev/Web-portfolio"
          liveUrl="https://portfolio-orcin-psi-23.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Projects;
