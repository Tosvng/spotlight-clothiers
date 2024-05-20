import { Box, Container, Typography } from "@mui/material";
import fullHero from "../assets/FullHero.png";
import CircleDisplay from "../components/CircleDisplay";

const services = [
  { title: "Suit", image: fullHero },
  { title: "Wedding Dress", image: fullHero },
  { title: "Uniform", image: fullHero },
  //   { title: "fashion", image: fullHero },
];
const OurServicesPage = () => {
  return (
    <Container sx={{ position: "relative", top: "50vh", left: "0" }}>
      <Box sx={{ position: "relative", marginTop: 8 }}>
        <Typography variant="h3" fontWeight={600}>
          Our Services
        </Typography>
        <Box
          sx={{
            marginTop: 4,

            display: "flex",
            flexDirection: "row",
            justifyContent: { xs: "start", md: "center" },
            gap: 4,
            overflowX: { xs: "scroll", md: "hidden" },
          }}
        >
          {services.map((service) => (
            <Box key={service.title} flex={1}>
              <CircleDisplay title={service.title} image={service.image} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default OurServicesPage;
