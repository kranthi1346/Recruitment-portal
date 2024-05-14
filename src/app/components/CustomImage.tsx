import { isEmpty } from "lodash";
import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name?: string;
}

interface ImageData {
  [key: string]: { src: string; alt: string };
}

const CustomImage: React.FC<ImageProps> = ({ name = "", ...props }) => {
  const images: ImageData = {
    tickWhiteIcon: {
      src: "icons/svg/tick_white_icon.svg",
      alt: "tick_white_icon",
    },
    crossGrayIcon: {
      src: "icons/svg/cross_gray_icon.svg",
      alt: "cross_gray_icon",
    },
    crossRedIcon: {
      src: "icons/svg/cross_red_icon.svg",
      alt: "cross_red_icon",
    },
    squareAddOrangeIcon: {
      src: "icons/svg/square_add_orange_icon.svg",
      alt: "square_add_orange_icon",
    },
    warningOrangeIcon: {
      src: "icons/svg/warning_orange_icon.svg",
      alt: "warning_orange_icon",
    },
    crossBlackIcon: {
      src: "icons/svg/cross_black_icon.svg",
      alt: "cross_black_icon",
    },
    sucessIcon: {
      src: "icons/svg/sucess_icon.svg",
      alt: "sucess_icon",
    },
    errorIcon: {
      src: "icons/svg/error_icon.svg",
      alt: "error_icon",
    },
    // Add more images and svgs here
  };

  const imageSrc = name && images[name]?.src ? images[name]?.src : props.src;
  const imageAlt = name && images[name]?.alt ? images[name]?.alt : props.alt;

  return (
    <img
      src={isEmpty(props.src) ? `/images/${imageSrc}` : props.src}
      alt={imageAlt}
      {...props}
    />
  );
};

export default CustomImage;
