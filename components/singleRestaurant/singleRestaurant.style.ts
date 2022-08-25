import { styled } from "@mui/material/styles";
export const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexWrap: "wrap",
}));

export const CardContainer = styled("div")(() => ({
  width: "550px",
  height: "500px",
  background: "rgba( 255, 255, 255, 0.25 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 20px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  WebkitBackdropFilter: "blur( 20px )",
  display: "flex",
  flexDirection: "column",
}));

export const TitleStyles = styled("h1")(() => ({
  marginLeft: "24px",
}));
export const ImageCard = styled("img")(() => ({
  width: "800px",
  height: "500px",
  alignSelf: "center",
  borderRadius: "10px",
  margin: "30px",
}));
export const BackStyles = styled("div")(() => ({
  position: "absolute",
  top: "190px",
  left: "259px",
  fontSize: "25px",
}));
export const SubTitleStyles = styled("h3")(() => ({
  marginLeft: "30px",
}));
