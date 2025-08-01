import React from "react";
import ProjectCard from "@/Components/ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col p-10 items-center justify-center ">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <ProjectCard
          title="StudyRoom"
          techs={["Java", "WebSocket"]}
          imageSrc="/StudyRoom/StudyRoom.svg"
          description="assignment, monitoring, and administration of study rooms, while enhancing the overall user experience. Built with WebSocket technology, the system ensures real-time synchronization across all connected devices each room displays a countdown timer, sends alerts when time is up, and shows availability status instantly to both users and administrators.Administrators have access to a control panel where they can view usage records, identify peak hours, and manage room availability. The platform also allows users to make reservations and receive notifications or recommendations via email, making the booking process seamless and efficient."
          githubUrl="https://github.com/KenithDev/Biblioteca-UCV"
          gallery={[
            "/StudyRoom/Asignacion Salas.svg",
            "/StudyRoom/Cronometro.svg",
            "/StudyRoom/EnvioCorreo.svg",
            "/StudyRoom/HistorialRegistro.svg",
          ]}
        />
        <ProjectCard
          title="SkillConnect"
          techs={["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"]}
          imageSrc="/SkillConnect/SkillConnect-Home.svg"
          description="SkillConnect is an educational web platform developed during a hackathon, designed to connect students with mentors for skill development and career guidance. The main challenge was to create a website with four distinct user interface designs tailored to different age groups: Default, Kids, Young, and Adult. Based on the user's age registered in the backend, the platform dynamically displays the appropriate design. Additionally, SkillConnect offers personalized learning paths and scholarship opportunities to support users in their educational journey."
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
      </div>
    </div>
  );
}

export default Projects;
