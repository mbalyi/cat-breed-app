import React from "react";
import { Skeleton } from "@mui/material";
import { SkeletonBox } from "./card-content-skeleton.sytes";

interface CustomSkeletonProps {
  height: number;
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({ height }) => (
  <Skeleton
    variant="rounded"
    animation="wave"
    width={"calc(100% - 8px)"}
    height={height}
  />
);

export const CardContentSkeleton = () => (
  <SkeletonBox>
    <CustomSkeleton height={180} />
    <CustomSkeleton height={40} />
    <CustomSkeleton height={20} />
    <CustomSkeleton height={20} />
  </SkeletonBox>
);
