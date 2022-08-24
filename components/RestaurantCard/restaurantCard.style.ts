import { styled } from "@mui/material/styles";

export const CardContainer = styled("div")(() => ({
  width: "550px",
  height: "390px",
  background: "rgba( 255, 255, 255, 0.25 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 20px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  WebkitBackdropFilter: "blur( 20px )",
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
}));

export const TitleStyles = styled("h2")(() => ({
  marginLeft: "24px",
}));
export const ImageCard = styled("img")(() => ({
  width: "500px",
  height: "300px",
  alignSelf: "center",
}));
