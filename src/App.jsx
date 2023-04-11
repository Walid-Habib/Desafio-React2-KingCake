import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        gap: 1,
        gridTemplateRows: "70px 1fr 70px",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(0.25turn, #ffebee, #ebf8e1, #e3f2fd)"
      }}
    >
      <Navbar />
      <Box sx={{ width: "90vw"}}>
        <Routes>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}
