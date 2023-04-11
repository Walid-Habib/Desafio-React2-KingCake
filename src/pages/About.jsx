import { Avatar } from "@mui/material";
import Ubicacion from "../assets/img/About.png";

export default function About() {
  return (
      <Avatar
        srcSet={Ubicacion}
        sx={{
          position: "relative",
          borderRadius: "5px",
          width: "99%",
          height: "300px",
        }}
      />
  );
}
