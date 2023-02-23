import React from "react";
import { Container, Box, useTheme, Typography, Card } from "@mui/material";
import TitleAllPage from "../titleAllPage";

function AboutMe() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        position: "absolute",
        top: "170px",

        alignItems: "flex-start",
        flexDirection: "column",
        display: "flex",
        width: "369px",
        height: "616.70px",
      }}
    >
      {/* Profile */}
      <Box>
        <TitleAllPage title="Profile" />
        <Box
          sx={{
            position: "absolute",
            width: "369px",
            height: "224px",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              left: "-25px",
              width: "369px",
              top: "30px",
              display: "flex",
              FlexDirection: "column",
              alignItems: "flex-start",
              fontFamily: "Quicksand, sans-serif",
              fontSize: "18px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
              textAlign: "justify",
            }}
          >
            {" "}
            Hello, I'm Edivando Reis de Siqueira.
            <br />I started to get interested in programming in mid-2019.
            <br />
            Of all the courses I took, I was most attracted to the front-end
            area.
            <br />
            And I've been striving to be a great professional!
          </Typography>
        </Box>
      </Box>
      {/* Skills */}
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
        <TitleAllPage title="Skills" />

        <Box position="absolute" width="367px" height="216.37px" top="76.16px">
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              width: "365px",
              height: "36px",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              border: "1px solid #FFD146",
              background: "transparent",
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              lineHeight: "19px",
              color: theme.palette.secondary[400],
            }}
          >
            Javascript
          </Card>
          <Box
            sx={{
              position: "absolute",
              width: "365px",
              height: "36px",
              top: "50px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              gap: "8px",
              background: "transparent",
            }}
          >
            <Card
              sx={{
                display: "flex",
                width: "180.5px",
                height: "35px",
                padding: "8px, 16px, 8px, 16px",
                border: "1px solid #FFD146",
                background: "transparent",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "16px",
                fontWeight: "200",
                lineHeight: "19px",
                color: theme.palette.secondary[400],
              }}
            >
              Html/Css
            </Card>
            <Card
              sx={{
                display: "flex",
                width: "180.5px",
                height: "35px",
                padding: "8px, 16px, 8px, 16px",
                border: "1px solid #FFD146",
                background: "transparent",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "16px",
                fontWeight: "200",
                lineHeight: "19px",
                color: theme.palette.secondary[400],
              }}
            >
              Bootstrap
            </Card>
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "365px",
              height: "36px",
              top: "100px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              gap: "8px",
              background: "transparent",
            }}
          >
            <Card
              sx={{
                display: "flex",
                width: "117px",
                height: "35px",
                padding: "8px, 16px, 8px, 16px",
                border: "1px solid #FFD146",
                background: "transparent",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "16px",
                fontWeight: "200",
                lineHeight: "19px",
                color: theme.palette.secondary[400],
              }}
            >
              React.js
            </Card>
            <Card
              sx={{
                display: "flex",
                width: "117px",
                height: "35px",
                padding: "8px, 16px, 8px, 16px",
                border: "1px solid #FFD146",
                background: "transparent",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "16px",
                fontWeight: "200",
                lineHeight: "19px",
                color: theme.palette.secondary[400],
              }}
            >
              Remix.js
            </Card>
            <Card
              sx={{
                display: "flex",
                width: "117px",
                height: "35px",
                padding: "8px, 16px, 8px, 16px",
                border: "1px solid #FFD146",
                background: "transparent",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "16px",
                fontWeight: "200",
                lineHeight: "19px",
                color: theme.palette.secondary[400],
              }}
            >
              Angular
            </Card>
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "365px",
              height: "36px",
              top: "150px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              gap: "8px",
              background: "transparent",
            }}
          >
            <Card
              sx={{
                display: "flex",
                width: "180.5px",
                height: "35px",
                padding: "8px, 16px, 8px, 16px",
                border: "1px solid #FFD146",
                background: "transparent",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "16px",
                fontWeight: "200",
                lineHeight: "19px",
                color: theme.palette.secondary[400],
              }}
            >
              Mongodb
            </Card>
            <Card
              sx={{
                display: "flex",
                width: "180.5px",
                height: "35px",
                padding: "8px, 16px, 8px, 16px",
                border: "1px solid #FFD146",
                background: "transparent",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "16px",
                fontWeight: "200",
                lineHeight: "19px",
                color: theme.palette.secondary[400],
              }}
            >
              Node.js
            </Card>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutMe;
