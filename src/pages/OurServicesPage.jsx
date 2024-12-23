import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MeasurementsIcon from "@mui/icons-material/Straighten";
import AlterationsIcon from "@mui/icons-material/ContentCut";
import WeddingIcon from "@mui/icons-material/Celebration";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const services = [
  {
    title: "Bespoke Tailoring",
    description:
      "Experience the art of perfectly fitted clothing with our bespoke tailoring service. Each garment is crafted to your exact measurements and preferences.",
    icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    features: [
      "Personal consultation",
      "Premium fabric selection",
      "Multiple fittings",
      "Hand-finished details",
    ],
  },
  {
    title: "Made-to-Measure",
    description:
      "Our made-to-measure service offers a perfect balance of personalization and convenience, creating garments that fit you beautifully.",
    icon: <MeasurementsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    features: [
      "Professional measurements",
      "Customization options",
      "Quality materials",
      "Expert fitting",
    ],
  },
  {
    title: "Alterations",
    description:
      "Transform your existing garments with our expert alteration service. We ensure your clothes fit perfectly and look impeccable.",
    icon: <AlterationsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    features: [
      "Professional assessment",
      "Precise alterations",
      "Quick turnaround",
      "Garment preservation",
    ],
  },
  {
    title: "Wedding & Formal",
    description:
      "Make your special occasions memorable with our wedding and formal wear services. We create stunning garments for your most important moments.",
    icon: <WeddingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    features: [
      "Bridal consultations",
      "Wedding party fitting",
      "Formal wear expertise",
      "Timeline planning",
    ],
  },
];

function OurServicesPage() {
  const theme = useTheme();

  return (
    <Box py={8}>
      <Container>
        <Typography
          variant="h1"
          textAlign="center"
          mb={2}
          color="primary.main"
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h4"
          textAlign="center"
          mb={6}
          color="text.secondary"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            fontWeight: "light",
          }}
        >
          Discover our range of tailoring services, each crafted to deliver
          excellence and perfect fits
        </Typography>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={6} key={service.title}>
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 0 20px ${theme.palette.primary.main}20`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    gap: 2,
                  }}
                >
                  {service.icon}
                  <Typography variant="h4" color="primary.main">
                    {service.title}
                  </Typography>
                </Box>

                <Typography variant="body1" mb={3} color="text.secondary">
                  {service.description}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  {service.features.map((feature) => (
                    <Typography
                      key={feature}
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                        color: "text.primary",
                      }}
                    >
                      <AutoAwesomeIcon
                        sx={{ fontSize: 16, color: "primary.main" }}
                      />
                      {feature}
                    </Typography>
                  ))}
                </Box>

                <Box sx={{ mt: "auto" }}>
                  <Button
                    component={Link}
                    to="/appointments"
                    variant="outlined"
                    fullWidth
                  >
                    Book Consultation
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default OurServicesPage;
