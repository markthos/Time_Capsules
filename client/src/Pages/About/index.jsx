// The About Us Page to talk about the project, the team, and the tech and design stack used
// TODO: get Logos for tech/design stack
// TODO: Make up some text about the project and text for each team member
import { useEffect } from "react";
// Animate on Scroll
import Aos from "aos";
import "aos/dist/aos.css";

import aboutUsData from "./aboutUsData.json";

export default function About() {
  //Sets the duration for all animations (1.5s)
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      {/* About the project section */}
      <section className="container m-auto min-h-screen">
        <h1 className="py-20 text-center text-4xl md:text-left md:text-6xl">
          About the Project
        </h1>
        <p className="mb-5 px-5 font-serif text-3xl">
          Something about the pre-production process using figma and coming up with the name and how the app would work. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus
          viverra adipiscing at in tellus integer. Nulla facilisi nullam
          vehicula ipsum a arcu cursus vitae.
        </p>
        <p className="px-5 font-serif text-3xl">
          Something about the production process and how we used agile development to make the app. 
          Sit amet porttitor eget dolor morbi non arcu. Aliquam etiam erat velit
          scelerisque in dictum non consectetur. Diam maecenas sed enim ut. Sed
          arcu non odio euismod lacinia. Fermentum dui faucibus in ornare quam
          viverra orci sagittis. Nibh sit amet commodo nulla facilisi nullam
          vehicula ipsum.
        </p>
      </section>
      {/* About the team section */}
      <div className="container m-auto px-5 py-20 ">
        <h2 className="text-center text-4xl md:text-6xl">Meet the Team</h2>
      </div>
      {/* Mapping through a bunch of data so i don't have to constantly change the same styles over and over again */}
      {aboutUsData.team.map((member, index) => (
        <section className="bg-beige px-5 py-10" key={index}>
          <div className="container m-auto flex flex-col gap-x-8 md:flex-row">
            <div className="flex flex-col md:w-1/2">
              <img
                data-aos="fade-right"
                className="w-full rounded-2xl shadow-2xl"
                src={member.image}
                alt={member.name + " Profile pic"}
              />
              <div className="flex items-center justify-center gap-5 py-10">
                <a
                  href={member.linkedin_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/img/linkedin_rect_logo.svg"
                    data-aos="fade-in"
                    className="h-14 w-full transition-all duration-500 ease-in-out hover:shadow-xl"
                    alt="LinkedIn Logo"
                  />
                </a>
                <a
                  href={member.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/img/github_square_logo.svg"
                    data-aos="fade-in"
                    className="h-16 w-full transition-all duration-500 ease-in-out hover:shadow-xl"
                    alt="GitHub Logo"
                  />
                </a>
                <a
                  href={member.portfolio_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/img/pf_logo.svg"
                    data-aos="fade-in"
                    className="h-14 w-full transition-all duration-500 ease-in-out hover:shadow-xl"
                    alt="Dev.to Logo"
                  />
                </a>
              </div>
            </div>
            <div data-aos="fade-left" className="md:w-1/2">
              <h3 className="mb-2 text-3xl">{member.name}</h3>
              <h4 className="mb-2 text-xl">{member.role}</h4>
              <p className="font-serif text-3xl">{member.description}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="container m-auto px-5">
        <h2 className="py-20 text-center text-4xl md:text-5xl">
          Tech &amp; Design Stack
        </h2>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Tailwind CSS</li>
          <li>Material UI</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express</li>
          <li>Node</li>
          <li>GraphQL</li>
          <li>JWT</li>
          <li>bcrypt</li>
          <li>Heroku</li>
          <li>GitHub</li>
          <li>Figma</li>
          <li>Apollo Server</li>
          <li>Cloudinary</li>
          <li>Axios</li>
          <li>Stripe</li>
          <li>Socket.io</li>
          <li>Create React App</li>
        </ul>
      </section>
    </>
  );
}
