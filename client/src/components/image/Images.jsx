import { IKImage } from "imagekitio-react";
import React from "react";

const Images = ({ path, src, alt, className, w, h }) => {
  return (
    <>
      <IKImage
        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
       path={path}
        src={src}
        transformation={[
          {
            width: w,
            height: h,
          },
        ]}
        alt={alt}
        loading="lazy"
        className={className}
        lqip={{ active: true, quality: 20 }}
      />
    </>
  );
};

export default Images;
