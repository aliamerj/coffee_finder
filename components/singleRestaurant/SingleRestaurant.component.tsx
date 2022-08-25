import Link from "next/link";
import React from "react";
import { RestaurantData } from "../../types/Types";
import {
  BackStyles,
  CardContainer,
  Container,
  ImageCard,
  SubTitleStyles,
  TitleStyles,
} from "./singleRestaurant.style";

const SingleRestaurant = ({ restaurant }: { restaurant: RestaurantData }) => {
  return (
    <Container>
      <BackStyles>
        <Link href="/">
          <a>←back to </a>
        </Link>
      </BackStyles>
      <ImageCard src={restaurant.photo.images.original.url} />
      <CardContainer>
        <TitleStyles>{restaurant.name}</TitleStyles>
        <SubTitleStyles>{restaurant.location_string}</SubTitleStyles>
        <SubTitleStyles>{restaurant.address}</SubTitleStyles>
        <SubTitleStyles>{restaurant.phone}</SubTitleStyles>
        <SubTitleStyles>{restaurant.open_now_tex}</SubTitleStyles>
      </CardContainer>
    </Container>
  );
};

export default SingleRestaurant;
