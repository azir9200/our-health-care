export const dynamic = "force-dynamic";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export type TSpecialist = {
  id: string;
  title: string;
  icon: string;
};

const Specialist = async () => {
  let specialties: TSpecialist[] = [];

  try {
    const res = await fetch("http://localhost:5000/api/v1/specialties", {
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch specialties: ${res.status}`);
    }

    const json = await res.json();

    // Check structure before accessing
    if (json && Array.isArray(json.data)) {
      specialties = json.data;
    } else {
      console.error("Unexpected data format:", json);
    }
  } catch (error) {
    console.error("Error fetching specialties:", error);
  }

  // const res = await fetch("http://localhost:5000/api/v1/specialties", {
  //   next: {
  //     revalidate: 30,
  //   },
  // });
  // const { data: specialties } = await res.json();
  // console.log("data", specialties);

  return (
    <Container>
      <Box
        sx={{
          margin: "80px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18} mt={1}>
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>
        <Stack direction="row" gap={4} mt={5}>
          {specialties.slice(0, 6).map((specialty: TSpecialist) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245,1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid rgba(36, 153, 239, 1)",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.5s",
                },
              }}
              component={Link}
              href={`/doctors?specialties=${specialty.title}`}
            >
              <Image
                src={specialty.icon}
                width={100}
                height={100}
                alt="specialty icon"
              />
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            marginTop: "20px",
          }}
        >
          View ALL
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
