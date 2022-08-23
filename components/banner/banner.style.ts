import { styled } from "@mui/material/styles";

export const BannerContainer = styled("div")(() => ({
  padding: "2rem",
}));
export const TitleContainer = styled("div")(() => ({
  display: "flex",
  marginBottom: "2rem",
  cursor: "pointer",
}));
export const WelcomeStyles = styled("h1")(() => ({
  margin: 0,
  lineHeight: 1.15,
  fontSize: "4rem",
  color: "black",
}));

export const TitleStyles = styled("h1")(() => ({
  margin: 0,
  marginLeft: "10px",
  lineHeight: 1.15,
  fontSize: "4rem",
  color: "#0070f3",
  ":hover": {
    textDecoration: "underline",
  },
}));

export const SubTitleStyles = styled("h3")(() => ({
  marginTop: "0.75rem",
  fontSize: "1.5rem",
  lineHeight: "2rem",
  marginBottom: "auto",
}));
