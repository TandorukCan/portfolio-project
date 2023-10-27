import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am TJ!";
const bio1 = "A full stack developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        boxSize="250px"
        name="TJ"
        src="https://img1.wsimg.com/isteam/ip/b5116562-d04b-4ee9-a9f7-01dec25c44b7/IMG_20220823_160148.jpg/:/cr=t:12.52%25,l:0%25,w:100%25,h:74.96%25/rs=w:365,h:365,cg:true/fx-gs"
      />
    </VStack>
    <Heading as="h3" size="s">
      {greeting}
    </Heading>
    <Heading size="xl" style={{ margin: "40px 0 0 0" }}>
      {bio1}
    </Heading>
    <Heading size="xl">{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
