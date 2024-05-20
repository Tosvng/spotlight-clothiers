import ThemeProvider from "./theme/index";
import Homepage from "./pages/Homepage";
import { Box, Container } from "@mui/material";
import HeroAsBackground from "./components/HeroAsBackground";
import Navbar from "./widget/Navbar";
import OurServicesPage from "./pages/OurServicesPage";

function App() {
  return (
    <Box
      sx={{
        background: "#2C2727",
        minHeight: "100vh",
      }}
    >
      <ThemeProvider>
        <HeroAsBackground />
        <Navbar />
        <Container>
          <Homepage />
          <OurServicesPage />
        </Container>
      </ThemeProvider>
    </Box>
  );
}

export default App;
