import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="w-[90%] sm:w-[80%] mx-auto my-[100px]  2xl:w-[1500px] overflow-x-hidden" id="projects">
      <div className="mb-6">
        <h1 className="font-bold  text-3xl" data-aos="zoom-in">Projects</h1>
        <div className="h-1 w-7 bg-yellow-500"></div>
      </div>

      <div className="grid grid-cols-6 gap-5">
        {projects.map((project, index) => (
          <article
            key={index}
            data-aos="zoom-in"
            className="col-span-6 sm:col-span-3 lg:col-span-2 bg-black/60 min-h-fit pb-3 border border-yellow-500/30 shadow-lg"
          >
            <img
              src={project.image}
              alt={`project ${index}`}
              className="h-[150px] w-full"
            />
            <div className="p-2 h-[200px]">
              <p className="font-semibold">{project.name}</p>
              <p className="text-sm text-gray-400 my-2">{project.content}</p>
              <div className="flex gap-3 text-sm">
                <Link to={project.github} className="underline">
                  View Code
                </Link>
                <Link to={project.live} className="underline">
                  Live App
                </Link>
              </div>
              
              <div className="flex gap-3 mt-4">
                {project.stack.map((stack) => (
                  <span key={stack} className="inline-block bg-yellow-600 px-3 py-1 rounded-md text-sm font-semibold text-black">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
