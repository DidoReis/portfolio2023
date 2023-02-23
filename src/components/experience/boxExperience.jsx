import React from "react";
import { Container, Box, Typography, useTheme } from "@mui/material";
import TargetIcon from "./../../assets/img/TargetIcon.svg";
import ArrowRight from "../../assets/img/right-dark.png";
import ArrowLeft from "../../assets/img/left-dark.png";

/* Components */
import TitleAllPage from "../titleAllPage";

function BoxExperience() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        position: "absolute",
        left: "780px",
        top: "80px",

        alignItems: "flex-start",
        flexDirection: "column",
        display: "flex",
        width: "850px",
        height: "720px",
      }}
    >
      <TitleAllPage title="Experience" />
      <Box
        sx={{
          position: "absolute",
          width: "756px",
          height: "67px",
          top: "44px",
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
            Casa dos Bateristas -{" "}
            <Box
              fontSize="20px"
              component="span"
              color={theme.palette.grey[100]}
            >
              Ecommerce.
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "205.11px",
            height: "0px",
            top: "140px",
            left: "-92px",
            position: "absolute",
            border: "2px solid #FFDA85",
            transform: "rotate(90deg)",
          }}
        ></Box>
        <Typography
          textAlign="justify"
          position="absolute"
          top="40px"
          left="36px"
          sx={{
            fontFamily: "Quicksand, sans-serif",
            fontSize: "18px",
            fontWeight: "200",
            color: theme.palette.secondary[400],
          }}
        >
          Harmony Company is an advertising agency that operates in various
          fields. I'm working with this company as a freelancer.
        </Typography>
        <Box>
          <Typography
            position="absolute"
            top="100px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="130px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="160px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="190px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="220px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
      </Box>
      {/*  */}

      <Box
        sx={{
          position: "absolute",
          width: "756px",
          height: "67px",
          top: "290px",
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
            Casa dos Bateristas -{" "}
            <Box
              fontSize="20px"
              component="span"
              color={theme.palette.grey[100]}
            >
              Ecommerce.
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "205.11px",
            height: "0px",
            top: "140px",
            left: "-92px",
            position: "absolute",
            border: "2px solid #FFDA85",
            transform: "rotate(90deg)",
          }}
        ></Box>
        <Typography
          textAlign="justify"
          position="absolute"
          top="40px"
          left="36px"
          sx={{
            fontFamily: "Quicksand, sans-serif",
            fontSize: "18px",
            fontWeight: "200",
            color: theme.palette.secondary[400],
          }}
        >
          Harmony Company is an advertising agency that operates in various
          fields. I'm working with this company as a freelancer.
        </Typography>
        <Box>
          <Typography
            position="absolute"
            top="100px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="130px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="160px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="190px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="220px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
      </Box>
      {/* 3 */}
      <Box
        sx={{
          position: "absolute",
          width: "756px",
          height: "67px",
          top: "536px",
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
            Casa dos Bateristas -{" "}
            <Box
              fontSize="20px"
              component="span"
              color={theme.palette.grey[100]}
            >
              Ecommerce.
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "205.11px",
            height: "0px",
            top: "140px",
            left: "-92px",
            position: "absolute",
            border: "2px solid #FFDA85",
            transform: "rotate(90deg)",
          }}
        ></Box>
        <Typography
          textAlign="justify"
          position="absolute"
          top="40px"
          left="36px"
          sx={{
            fontFamily: "Quicksand, sans-serif",
            fontSize: "18px",
            fontWeight: "200",
            color: theme.palette.secondary[400],
          }}
        >
          Harmony Company is an advertising agency that operates in various
          fields. I'm working with this company as a freelancer.
        </Typography>
        <Box>
          <Typography
            position="absolute"
            top="100px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="130px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="160px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="190px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
        <Box>
          <Typography
            position="absolute"
            top="220px"
            left="36px"
            component="li"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "16px",
              fontWeight: "200",
              color: theme.palette.secondary[400],
            }}
          >
            Bachelor of Computer Science - University of Guilan - Rasht
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        position="absolute"
        width="222px"
        height="46px"
        left="746px"
        top="750px"
      >
        <Box component="a" href="/websites">
          <Box
            component="img"
            src={ArrowRight}
            sx={{
              position: "absolute",
              left: "100px",
            }}
          ></Box>
        </Box>
        <Box component="a" href="/quemsou">
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

export default BoxExperience;
