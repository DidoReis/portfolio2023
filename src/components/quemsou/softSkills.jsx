import React from "react";
import { Box, Container, useTheme } from "@mui/material";
import GithubIcon from "../../assets/img/github.png";
import InstagramIcon from "../../assets/img/instagram.png";
import LinkedinIcon from "../../assets/img/linkedin.png";
import TwitterIcon from "../../assets/img/twitter.png";
import TitleAllPage from "../titleAllPage";

function SoftSkills() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        position: "absolute",
        left: "430px",
        top: "170px",

        alignItems: "flex-start",
        flexDirection: "column",
        display: "flex",
        width: "369px",
        height: "616.70px",
      }}
    >
      <Box>
        <TitleAllPage title="Soft skills" />
        <Box
          sx={{
            position: "absolute",
            width: "250px",
            height: "160px",
            top: "76px",
            fontFamily: "Quicksand, sans-serif",
            fontWeight: "200",
            fontSize: "18px",
            lineHeight: "32px",
            textAlign: "justify",
            color: theme.palette.secondary[400],
          }}
        >
          <li>Problem Solving</li>
          <li>Continuos learning</li>
          <li>Critical</li>
          <li>Teamwork spirit</li>
          <li>Compatibility and flexibility</li>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "0px",

          display: "flex",
          width: "368px",
          height: "292.52px",
          top: "324.16px",
        }}
      >
        <TitleAllPage title="Social media" />
        <Box
          display="flex"
          flexDirection="column"
          position="absolute"
          width="367px"
          height="216.37px"
          top="76.16px"
        >
          <Box display="flex">
            <img className="logoSocial" src={GithubIcon} alt="" />
            <a className="refPage" href="https://github.com/DidoReis">
              Github
            </a>
          </Box>
          <Box display="flex">
            <img className="logoSocial" src={LinkedinIcon} alt="" />
            <a
              className="refPage"
              href="https://www.linkedin.com/in/edivando-reis-de-siqueira-1236aa190/"
            >
              Linkedin
            </a>
          </Box>
          <Box display="flex">
            <img className="logoSocial" src={InstagramIcon} alt="" />
            <a className="refPage" href="https://www.instagram.com/djdidoreis/">
              Instagram
            </a>
          </Box>
          <Box display="flex">
            <img className="logoSocial" src={TwitterIcon} alt="" />
            <a className="refPage" href="https://twitter.com/Didodnb">
              Twitter
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default SoftSkills;
