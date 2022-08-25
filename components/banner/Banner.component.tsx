import { Alert, Button } from "@mui/material";
import useTrackLocation from "../../hooks/use-track-location";
import {
  TitleStyles,
  WelcomeStyles,
  TitleContainer,
  SubTitleStyles,
  BannerContainer,
} from "./banner.style";

type SetPostionHandler = (postion: string) => void;

const BannerComponent = ({
  setPostionHandler,
}: {
  setPostionHandler: SetPostionHandler;
}) => {
  const {
    handleTrackLocation,
    latLong,
    locationErrorMessage,
    isFindingLocation,
  } = useTrackLocation();

  const handderChangeButton = () => {
    handleTrackLocation();
    setPostionHandler(latLong);
  };
  return (
    <BannerContainer>
      {locationErrorMessage ? (
        <Alert severity="error">{locationErrorMessage}</Alert>
      ) : null}
      <TitleContainer>
        <WelcomeStyles>Welcome to</WelcomeStyles>
        <TitleStyles> Coffee Finder !</TitleStyles>
      </TitleContainer>
      <SubTitleStyles>Find out your local coffee shops !</SubTitleStyles>
      <Button
        sx={{ width: "22%" }}
        variant="contained"
        size="large"
        color="primary"
        onClick={() => handderChangeButton()}
      >
        {isFindingLocation ? "Locating..." : "view stores nearby"}
      </Button>
    </BannerContainer>
  );
};

export default BannerComponent;
