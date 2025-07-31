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
          description="StudyRoom is software for managing the assignment, monitoring, and administration of rooms at the UCV Library, in addition to enriching the user experience."
          githubUrl="https://github.com/KenithDev/Biblioteca-UCV"
          gallery={["/StudyRoom/Asignacion Salas.svg", "/StudyRoom/Cronometro.svg", "/StudyRoom/EnvioCorreo.svg", "/StudyRoom/HistorialRegistro.svg"]}
        />
      </div>
    </div>
  );
}

export default Projects;
