import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Restaurant",
    description:
      "The Web App for a Traditional Italian Restaurant called 'The Little Lemon'",
    getVideoSrc: () => require("../images/ScreenRecordingLittleLemon.mp4"),
    url: "https://github.com/TandorukCan/little-lemon",
  },
  {
    title: "White Butterfly Holistics",
    description: `This webpage is for a client who is providing reiki treatment. Upon her wish to get her project off of wix, I've recreated the front-end of her web app using React. Currently in touch with her about the continuation of the project. You can check her website on wix from https://www.whitebutterflyholistics.co.uk/`,
    getVideoSrc: () => require("../images/ScreenRecording-WBH.mp4"),
    url: "https://github.com/TandorukCan/white-butterfly",
  },
  {
    title: "Ellen K Stone",
    description:
      "The Webpage for another potential client of mine: Ellen K. Stone. She is a multidiciplinary creative. I've recreated her website from wix, as she no longer wanted to pay them for subscription. You can check the wix version of her page from: https://www.ellenkstone.co.uk/",
    getVideoSrc: () => require("../images/ScreenRecording-EllenKStone2.mp4"),
    url: "https://github.com/TandorukCan/ellen-kamenik",
  },
  {
    title: "Fruit Slicing Game (JQuery)",
    description: "A simple fruit slicing game made with JQuery ",
    getVideoSrc: () => require("../images/ScreenRecording_FruitGame.mp4"),
    url: "https://github.com/TandorukCan/fruit-slicing-game",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      // p={24}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        // gridGap={24}
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
