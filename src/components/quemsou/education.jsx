import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import TargetIcon from "../../assets/img/TargetIcon.svg";
import ArrowRight from "../../assets/img/right-dark.png";
import ArrowLeft from "../../assets/img/left-dark.png";

function Education() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        position: "absolute",
        left: "944px",
        top: "100px",

        alignItems: "flex-start",
        flexDirection: "column",
        display: "flex",
        width: "765px",
        height: "720px",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          left: "4px",
          display: "flex",
          FlexDirection: "column",
          alignItems: "flex-start",
          fontFamily: "Quicksand, sans-serif",
          fontSize: "28px",
          fontWeight: "700",
          color: theme.palette.secondary[400],
        }}
      >
        Education and Courses
      </Typography>
      <Box
        sx={{
          position: "absolute",
          width: "56.44px",
          height: "2.16px",
          background: theme.palette.secondary[400],
          top: "40px",
          left: "6px",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          width: "756px",
          height: "67px",
          top: "54px",
          display: "flex",
          left: "0px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            component="img"
            sx={{
              position: "absolute",
              width: "18px",
              height: "18px",
              display: "flex",
              marginRight: "16px",
              top: "5px",
            }}
            alt="Image University icon decoration"
            src={TargetIcon}
          ></Box>
          <Typography
            variant="h5"
            color={theme.palette.secondary[400]}
            sx={{
              position: "absolute",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "27px",
              left: "36px",
            }}
          >
            University
          </Typography>
        </Box>
        <Box
          sx={{
            width: "19.11px",
            height: "0px",
            top: "47.90px",
            position: "absolute",
            border: "2px solid #FFDA85",
            transform: "rotate(90deg)",
          }}
        ></Box>
        <Typography
          position="absolute"
          top="40px"
          left="36px"
          component="li"
          sx={{
            fontFamily: "Quicksand, sans-serif",
            fontSize: "18px",
            fontWeight: "200",
            color: theme.palette.secondary[400],
          }}
        >
          Bachelor of Computer Science - University of Guilan - Rasht
        </Typography>
      </Box>
      {/* Final aqui */}
      <Box
        sx={{
          position: "absolute",
          width: "756px",
          height: "236px",
          top: "141px",
          left: "0px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            component="img"
            sx={{
              position: "absolute",
              width: "18px",
              height: "18px",
              display: "flex",
              marginRight: "16px",
              top: "5px",
            }}
            alt="Image University icon decoration"
            src={TargetIcon}
          ></Box>
          <Typography
            variant="h5"
            color={theme.palette.secondary[400]}
            sx={{
              position: "absolute",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "27px",
              left: "36px",
            }}
          >
            Courses
          </Typography>
        </Box>
        {/* Aqui courses */}
        <Box
          sx={{
            width: "188.14px",
            height: "0px",
            left: "-84.6px",
            top: "137.90px",
            position: "absolute",
            border: "2px solid #FFDA85",
            transform: "rotate(90deg)",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "36px",
            top: "50px",
            color: theme.palette.secondary[400],
          }}
        >
          <Box component="li" marginBottom="20px">
            Foundations of User Experience (UX) Design | coursera | google
          </Box>
          <Box component="li" marginBottom="20px">
            Foundations of User Experience (UX) Design | coursera | google
          </Box>
          <Box component="li" marginBottom="20px">
            Foundations of User Experience (UX) Design | coursera | google
          </Box>
          <Box component="li" marginBottom="20px">
            Foundations of User Experience (UX) Design | coursera | google
          </Box>
          <Box component="li" marginBottom="20px">
            Foundations of User Experience (UX) Design | coursera | google
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "756px",
          height: "67px",
          top: "397px",
          display: "flex",
          left: "0px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            component="img"
            sx={{
              position: "absolute",
              width: "18px",
              height: "18px",
              display: "flex",
              marginRight: "16px",
              top: "5px",
            }}
            alt="Image University icon decoration"
            src={TargetIcon}
          ></Box>
          <Typography
            variant="h5"
            color={theme.palette.secondary[400]}
            sx={{
              position: "absolute",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "27px",
              left: "36px",
            }}
          >
            University
          </Typography>
        </Box>
        <Box
          sx={{
            width: "19.11px",
            height: "0px",
            top: "47.90px",
            position: "absolute",
            border: "2px solid #FFDA85",
            transform: "rotate(90deg)",
          }}
        ></Box>
        <Typography
          position="absolute"
          top="40px"
          left="36px"
          component="li"
          sx={{
            fontFamily: "Quicksand, sans-serif",
            fontSize: "18px",
            fontWeight: "200",
            color: theme.palette.secondary[400],
          }}
        >
          Bachelor of Computer Science - University of Guilan - Rasht
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "756px",
          height: "236px",
          top: "484px",
          left: "0px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            component="img"
            sx={{
              position: "absolute",
              width: "18px",
              height: "18px",
              display: "flex",
              marginRight: "16px",
              top: "5px",
            }}
            alt="Image University icon decoration"
            src={TargetIcon}
          ></Box>
          <Typography
            variant="h5"
            color={theme.palette.secondary[400]}
            sx={{
              position: "absolute",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "27px",
              left: "36px",
            }}
          >
            Courses
          </Typography>
        </Box>
        {/* Description */}
        <Box
          sx={{
            width: "188.14px",
            height: "0px",
            left: "-84.6px",
            top: "137.90px",
            position: "absolute",
            border: "2px solid #FFDA85",
            transform: "rotate(90deg)",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "36px",
            top: "50px",
            color: theme.palette.secondary[400],
          }}
        >
          <Box component="li" marginBottom="20px">
            Foundations of User Experience (UX) Design | coursera | google
          </Box>
          <Box component="li" marginBottom="20px">
            Foundations of User Experience (UX) Design | coursera | google
          </Box>
          <Box component="li" marginBottom="20px">
            Foundations of User Experience (UX) Design | coursera | google
          </Box>
          <Box component="li" marginBottom="20px">
            Foundations of User Experience (UX) Design | coursera | google
          </Box>
          <Box component="li" marginBottom="20px">
            Foundations of User Experience (UX) Design | coursera | google
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        position="absolute"
        width="222px"
        height="46px"
        left="582px"
        top="730px"
      >
        <Box component="a" href="/experience">
          <Box
            component="img"
            src={ArrowRight}
            sx={{
              position: "absolute",
              left: "100px",
            }}
          ></Box>
        </Box>
        <Box component="a" href="/home">
          <Box
            component="img"
            src={ArrowLeft}
            sx={{
              position: "absolute",
            }}
          ></Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Education;
