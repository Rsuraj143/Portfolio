import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";

function Projects() {
  return (
    <div
      className="flex flex-col items-center main-container pt-10 pb-12 px-4 sm:px-16 "
      id="projects"
    >
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
        My Work
      </h3>
      <div className="flex flex-col items-center space-y-8">
        <ProjectCard
          img="/static/images/trooTheme.svg"
          title="React Themes"
          description="In this portfolio project, I showcase my proficiency in web development by creating a diverse collection of business templates using cutting-edge technologies. Leveraging the power of React.js, Tailwind CSS, and React-Bootstrap, I've crafted a series of templates tailored for various business purposes"
          link="https://www.troothemes.com/products/category/react-js-themes/"
        />
        <ProjectCard
          img="/static/images/push-analytics.svg"
          title="Push-Analytics Admin Pannel"
          description="Push-Analytics Market is a Admin panel. Worked as a Front End Developer in this project at TRooInbound Pvt. Ltd. Used Reactjs, React-Bootstrap, Formic and Rechart to build this project."
          link="/"
        />
      </div>
      <a
        href="https://github.com/Rsuraj143"
        target="_blank"
        className="flex space-x-4 text-xl my-6 items-center bg-white bg-opacity-10 border border-transparent hover:shadow-md hover:border-gray-200 focus:outline-none  text-nik-lightGray px-6 py-4 rounded-3xl cursor-pointer mt-16 hover:border-opacity-20 transition-all"
      >
        <img
          src="/static/images/github.svg"
          alt="Suraj Rauda"
          className="h-7 md:h-11"
        />
        <p>See More</p>
      </a>
    </div>
  );
}

export default Projects;
