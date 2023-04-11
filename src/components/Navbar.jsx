import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import Imagen from "../assets/img/KingCake.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" color="secondary" style={{ width: "90vw" }}>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5,auto)",
          justifyContent: "center",
          alignItems: "center",
        }}
        maxWidth="md"
      >
        <Avatar sx={{ height: 40, width: 40, m: 0 }} srcSet={Imagen} />
        <Box flexDirection="column" flexGrow={1}>
          <Typography sx={{ mt: 2, ml: 1, mb: 0, p: 0, fontSize: "12" }}>
            Grupo KingCake
          </Typography>
          <Typography fontSize={10} fontFamily={"sans-serif"} sx={{ ml: 1 }}>
            La Serena - Chile
          </Typography>
        </Box>
        <Button
          color="inherit"
          endIcon={<HomeIcon />}
          component={NavLink}
          to="/"
          sx={{
            p: 2,
            ml: 40,
            "&.active": {
              color: "burlywood",
            },
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          endIcon={<ContactMailIcon />}
          component={NavLink}
          to="/contacto"
          sx={{
            p: 2,
            "&.active": {
              color: "burlywood",
            },
          }}
        >
          Contactanos
        </Button>
        <Button
          color="inherit"
          endIcon={<InfoIcon />}
          component={NavLink}
          to="/about"
          sx={{
            p: 2,
            "&.active": {
              color: "burlywood",
            },
          }}
        >
          About
        </Button>
      </Container>
    </AppBar>
  );
}
