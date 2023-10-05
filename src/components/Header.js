import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: tandorukcan@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/TandorukCan/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/tandoruk-can-54814014b/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [scrollCoordinate, setScrollCoordinate] = useState(0);
  const prevScrollCoordinate = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollCoordinate(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    prevScrollCoordinate.current = scrollCoordinate;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollCoordinate]);

  const prevCount = prevScrollCoordinate.current;

  let style = { transform: "translateY(0)", transition: "all 1s ease-out" };
  if (scrollCoordinate > prevCount) {
    style = { transform: "translateY(-200px)", transition: "all 1s ease-out" };
  }

  return (
    <Box
      style={style}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((link) => {
                return (
                  <a key={link.url} href={link.url}>
                    <FontAwesomeIcon icon={link.icon} size="2x" />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")} href="/#projects">
                Projects
              </a>
              <a onClick={handleClick("contactme")} href="/#contact-me">
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
