import { Box, Typography, Container, Button, Grid } from "@mui/material";
import HeroAsBackground from "../components/HeroAsBackground";
import { Link } from "react-router-dom";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function Homepage() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <HeroAsBackground />
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            minHeight: "100vh",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left Content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              pt: { xs: 15, md: 0 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: "-20px",
                  top: "50%",
                  width: "4px",
                  height: "100px",
                  bgcolor: "primary.main",
                  transform: "translateY(-50%)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                  mb: 2,
                  fontWeight: "light",
                  letterSpacing: "0.2em",
                }}
              >
                {/* ESTABLISHED 1990 */}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: "common.white",
                  fontWeight: "bold",
                  fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                BESPOKE
                <br />
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-10px",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      bgcolor: "primary.main",
                    },
                  }}
                >
                  TAILORING
                </Box>
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "grey.400",
                  mb: 6,
                  maxWidth: "500px",
                  fontWeight: "light",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              >
                Where precision meets elegance. Experience the art of perfect
                fit with our master tailors.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: { xs: "wrap", sm: "nowrap" },
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/appointments"
                startIcon={<AutoAwesomeIcon />}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: "1.1rem",
                  minWidth: "200px",
                }}
              >
                Book Fitting
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/services"
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: "1.1rem",
                  borderWidth: "2px",
                  minWidth: "200px",
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": {
                    borderWidth: "2px",
                    borderColor: "primary.light",
                    color: "primary.light",
                  },
                }}
              >
                Our Services
              </Button>
            </Box>
          </Grid>

          {/* Right Content - Features */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pt: { xs: 8, md: 0 },
            }}
          >
            <Grid container spacing={3} sx={{ maxWidth: "500px" }}>
              {features.map((feature, index) => (
                <Grid item xs={6} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: "rgba(0,0,0,0.5)",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: "primary.main",
                      height: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <feature.icon
                      sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ color: "primary.main", mb: 1 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "grey.400", lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Feature cards data
const features = [
  {
    title: "Custom Fit",
    description:
      "Perfectly tailored to your measurements and style preferences",
    icon: AutoAwesomeIcon,
  },
  {
    title: "Premium Fabrics",
    description: "Finest materials sourced from renowned global suppliers",
    icon: AutoAwesomeIcon,
  },
  {
    title: "Expert Craftsmanship",
    description: "Decades of experience in bespoke tailoring",
    icon: AutoAwesomeIcon,
  },
  {
    title: "Lifetime Care",
    description: "Complimentary alterations and maintenance services",
    icon: AutoAwesomeIcon,
  },
];

export default Homepage;
