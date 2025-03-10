"use client";

import { CldImage, CldImageProps } from "next-cloudinary";

const Image = (props: CldImageProps) => {
  return <CldImage {...props} />;
};

export default Image;
