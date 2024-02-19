import React from "react";
import { Skeleton } from "@mui/material";
import { SkeletonBox } from "./card-content-skeleton.sytes";

interface CustomSkeletonProps {
  height: number;
  testId?: string;
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({ height, testId }) => (
  <Skeleton
    variant="rounded"
    animation="wave"
    width={"calc(100% - 8px)"}
    height={height}
    data-testid={testId}
  />
);

export const CardContentSkeleton = () => (
  <SkeletonBox>
    <CustomSkeleton height={180} testId="skeleton-image" />
    <CustomSkeleton height={40} testId="skeleton-breed-type" />
    <CustomSkeleton height={20} testId="skeleton-origin" />
    <CustomSkeleton height={20} testId="skeleton-description" />
  </SkeletonBox>
);
