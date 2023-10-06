import {
  Stack,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const Card = ({
  title,
  description,
  //  imageSrc,
  url,
  videoSrc,
}) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      borderRadius="3%"
      bg="white"
      color="lightgray"
      alignItems="start"
      backgroundColor="#6d41a1"
    >
      <Video
        style={{ borderRadius: "25px" }}
        loop
        muted
        controls={[
          "Time",
          "Seek",
          "Fullscreen",
          // 'PlayPause', 'Volume',
        ]}
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src="http://source.vtt"
          default
          // width="100%"
          // height="auto"
          // aspectRatio="16 / 8.35"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "16 / 8.35",
          }}
        />
      </Video>

      {/* <iframe
        alt={description}
        style={{ width: "100%", height: "auto", aspectRatio: "16 / 8.35" }}
        title={description}
        src={videoSrc}
        allowFullScreen
      /> */}
      {/* <Image
        borderRadius="3%"
        src={imageSrc}
        alt={description}
        style={{ maxWidth: "100.1%" }}
      /> */}
      <Stack padding="3%" spacing="3%">
        <Heading>{title}</Heading>
        <Text color="lightgray">{description}</Text>
        <HStack>
          <a href={url}>
            <Text fontWeight="bold">See more</Text>
          </a>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Stack>
    </VStack>
  );
};

export default Card;
