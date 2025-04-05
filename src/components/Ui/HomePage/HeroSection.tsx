import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        my: 16,
      }}
    >
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            left: "-90px",
            top: "-120px",
          }}
        >
          <Image
            src="/svgs/grid.svg"
            alt="Grid Image"
            width={700}
            height={700}
            priority
          />
        </Box>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography sx={{ my: 4 }}>
          Preventive Care refers to the proactive approach to health that
          focuses on preventing diseases, injuries, and illnesses before they
          occur. This includes regular screenings, vaccinations, lifestyle
          changes, and health check-ups to detect potential health issues early
          and manage risk factors. By focusing on prevention, individuals can
          maintain better overall health, reduce healthcare costs, and improve
          quality of life.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make appointment</Button>
          <Button variant="outlined">Contact us</Button>
        </Box>
      </Box>

      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image
            src="/svgs/arrow.svg"
            width={100}
            height={100}
            alt="Arrow"
            style={{ width: "auto", height: "auto" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src="/images/doctor1.png"
              width={240}
              height={380}
              alt="Doctor 1"
              style={{ width: "auto", height: "auto" }}
            />
          </Box>
          <Box>
            <Image
              src="/images/doctor2.png"
              width={240}
              height={350}
              alt="Doctor 2"
              style={{ width: "auto", height: "auto" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px",
          }}
        >
          <Image
            src="/images/doctor3.png"
            width={240}
            height={240}
            alt="Doctor 3"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/Stethoscope.png"
            width={180}
            height={180}
            alt="Stethoscope"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
