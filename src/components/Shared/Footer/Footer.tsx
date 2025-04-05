import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }} // Stack items vertically on small screens, horizontally on larger screens
          gap={4}
          justifyContent="center"
          alignItems="center" // Center align text for small screens
        >
          <Typography
            color="#fff"
            component={Link}
            href="/consultation"
            textAlign="center"
          >
            Consultation
          </Typography>
          <Typography color="#fff" textAlign="center">
            Health Plans
          </Typography>
          <Typography color="#fff" textAlign="center">
            Medicine
          </Typography>
          <Typography color="#fff" textAlign="center">
            Diagnostics
          </Typography>
          <Typography color="#fff" textAlign="center">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" pt={3} pb={0}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="facebook" />
          <Image src={twitterIcon} width={30} height={30} alt="facebook" />
          <Image src={linkedIcon} width={30} height={30} alt="facebook" />
        </Stack>
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 Ph HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
