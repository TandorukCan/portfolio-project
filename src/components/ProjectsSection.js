import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon",
    description:
      "The Web App for a Traditional Italian Restaurant called 'The Little Lemon'",
    getVideoSrc: () => require("../images/ScreenRecordingLittleLemon.mp4"),
    // getImageSrc: () => require("../images/photo1.png"),
    url: "https://github.com/TandorukCan/little-lemon",
  },
  {
    title: "White Butterfly Holistics",
    description:
      "This webpage is for a client who is providing various services. She contacted me expressing her wish to get her project off of wix. I've recreated the front-end of her website using React. Currently in touch with her about the continuation of her project. ",
    getVideoSrc: () => require("../images/ScreenRecording-WBH.mp4"),
    // getImageSrc: () => require("../images/photo2.png"),
  },
  {
    title: "Ellen K Stone",
    description:
      "The Webpage for Ellen K. Stone. She is a multidiciplinary creative. In her webpage she's providing various services from graphics design to photography",
    getVideoSrc: () => require("../images/ScreenRecording-EllenKStone2.mp4"),
    // getImageSrc: () => require("../images/photo3.png"),
  },
  {
    title: "Portfolio Project",
    description:
      "This is the project that's currently being displayed to you. ",
    getVideoSrc: () => require("../images/ScreenRecordingPortfolio.mp4"),
    // getImageSrc: () => require("../images/photo4.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            url={project.url}
            key={project.title}
            title={project.title}
            description={project.description}
            // imageSrc={project.getImageSrc()}
            videoSrc={project.getVideoSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
