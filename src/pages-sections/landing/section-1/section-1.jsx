import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import { Link as Scroll } from "react-scroll"; // MUI ICON COMPONENTS

import HelpIcon from "@mui/icons-material/Help";
import DoneIcon from "@mui/icons-material/Done"; // CUSTOM COMPONENTS

import Header from "../header";
import LazyImage from "components/LazyImage";
import { H1, Paragraph, Span } from "components/Typography";
import { FlexBox, FlexRowCenter } from "components/flex-box";
export default function Section1() {
  return <div>
      <Header />

      <Container id="section-1" sx={{
      mt: 12,
      position: "relative"
    }}>
        <Box maxWidth="830px" mx="auto" mb={12} textAlign="center">
          <H1 fontSize="40px" mb={3}>
            <Span>Build your online store with</Span>
            <Box color="primary.main" lineHeight={1.2}>
              Bazaar
            </Box>
          </H1>

          <Paragraph fontSize="18px" fontWeight={500} maxWidth="540px" mx="auto" mb={3}>
            SEO friendly Next.js Ecommerce Template. Helps you to build performant online store
            faster.
          </Paragraph>

          <FlexRowCenter sx={{
          mb: 5,
          flexDirection: {
            md: "row",
            xs: "column"
          }
        }}>
            <FlexBox my={1} mr={2} alignItems="center" fontWeight={500} color="grey.900">
              <DoneIcon color="success" fontSize="small" sx={{
              mr: 0.6
            }} />
              SSR
            </FlexBox>

            <FlexBox my={1} mr={2} alignItems="center" fontWeight={500} color="grey.900">
              <DoneIcon color="success" fontSize="small" sx={{
              mr: 0.6
            }} />
              Rest API
            </FlexBox>

            <FlexBox my={1} alignItems="center" fontWeight={500} color="grey.900">
              <DoneIcon color="success" fontSize="small" sx={{
              mr: 0.6
            }} />
              Multi vendor Support
            </FlexBox>
          </FlexRowCenter>

          <FlexBox justifyContent="center" mb={3}>
            <Scroll to="get" duration={400} offset={-72 - 16} smooth={true}>
              <Button variant="outlined" color="primary" size="large" sx={{
              m: "0.5rem"
            }}>
                What&apos;s inside
              </Button>
            </Scroll>

            <Scroll to="demos" duration={400} offset={-72 - 16} smooth={true}>
              <Button variant="contained" color="primary" size="large" sx={{
              m: "0.5rem"
            }}>
                View Demos
              </Button>
            </Scroll>
          </FlexBox>

          <FlexBox justifyContent="center" alignItems="center">
            <Span sx={{
            textDecoration: "underline",
            color: "text.secondary"
          }}>
              <a href="https://server.getbazaar.io/" target="_blank" rel="noreferrer">
                I need server integration
              </a>
            </Span>

            <Tooltip placement="right" title={<Paragraph>
                  Bazaar has REST API integrated on the frontend. Click here if you also need a server side solution.
                </Paragraph>}>
              <HelpIcon sx={{
              ml: 0.5,
              color: "grey.500",
              fontSize: "18px",
              "&:hover": {
                color: "grey.800"
              }
            }} />
            </Tooltip>
          </FlexBox>
        </Box>

        <LazyImage priority alt="cover" width={2600} height={566} quality={100} src="/assets/images/landing/page-group-2.png" sx={{
        display: "grid"
      }} />
      </Container>
    </div>;
}