import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./theme/index";
import Homepage from "./pages/Homepage";
import { Box, Container } from "@mui/material";
import Navbar from "./widget/Navbar";
import OurServicesPage from "./pages/OurServicesPage";
import Appointments from "./pages/Appointments";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          background: "#FFFFFF",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<OurServicesPage />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
