import React from "react";
import { CardContentSkeleton } from "./CardContentSkeleton";
import { CardBox } from "./card.styles";

const Card = () => (
  <CardBox data-testid="card">
    <CardContentSkeleton />
  </CardBox>
);

const CardMemo = React.memo(Card);

export default CardMemo;
