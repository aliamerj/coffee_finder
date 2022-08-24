import Link from "next/link";
import { CardContainer, ImageCard, TitleStyles } from "./restaurantCard.style";

const RestaurantCard = ({
  name,
  photo,
  id,
}: {
  name: string;
  photo: string;
  id: string;
}) => {
  return (
    <Link href={`/coffee-store/${id}`}>
      <a>
        <CardContainer>
          <TitleStyles>{name}</TitleStyles>
          <ImageCard src={photo} />
        </CardContainer>
      </a>
    </Link>
  );
};

export default RestaurantCard;
