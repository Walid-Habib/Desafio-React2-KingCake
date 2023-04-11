import { Avatar, Box, Typography } from "@mui/material";
import Portada from "../assets/img/KingCake_Arlequin.jpg";

export default function Home() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Avatar
        srcSet={Portada}
        sx={{
          position: "relative",
          borderRadius: "5px",
          width: "99%",
          height: "300px",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          scale: "2",
          fontFamily: "fantasy",
          textShadow: "0px 0px 20px red",
        }}
      >
        Pastelería creativa y salón de té
      </Typography>
    </Box>
  );
}
