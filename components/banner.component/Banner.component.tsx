import { Button } from "@mui/material";
import styles from "./Banner.module.css";
import {
  TitleStyles,
  WelcomeStyles,
  TitleContainer,
  SubTitleStyles,
} from "./banner.style";

type HandderChangeButton = (text: string) => void;

const BannerComponent = ({
  buttonText,
  handderChangeButton,
}: {
  buttonText: string;
  handderChangeButton: HandderChangeButton;
}) => {
  return (
    <div>
      <TitleContainer>
        <WelcomeStyles>Welcome to</WelcomeStyles>
        <TitleStyles> Coffee Finder !</TitleStyles>
      </TitleContainer>
      <SubTitleStyles>Find out your local coffee shops !</SubTitleStyles>
      <Button
        sx={{ width: "40%" }}
        variant="contained"
        size="large"
        color="primary"
        onClick={() => handderChangeButton("Loding...")}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default BannerComponent;
