/** @format */

import React, { useState } from "react";
import "./carausel.styles.scss";

import ImageGallery from "react-image-gallery";
import { IoMdRadioButtonOn } from "react-icons/io";
import { BiFullscreen } from "react-icons/bi";
const ImageCarausel = () => {
  const images = [
    {
      original: "https://i.ibb.co/5scjhzY/Pyura-renders-1.png",
      thumbnail: "https://i.ibb.co/5scjhzY/Pyura-renders-1.png",
    },
    {
      original: "https://i.ibb.co/r7hLtrd/Perspective-View-1.png",
      thumbnail: "https://i.ibb.co/r7hLtrd/Perspective-View-1.png",
    },
    {
      original: "https://i.ibb.co/nfwmg0B/Pyura-renders-7.png",
      thumbnail: "https://i.ibb.co/nfwmg0B/Pyura-renders-7.png",
    },
    {
      original: "https://i.ibb.co/CMQFNQk/Pyura-renders-2.png",
      thumbnail: "https://i.ibb.co/CMQFNQk/Pyura-renders-2.png",
    },
    {
      original: "https://i.ibb.co/WKbtMcw/Pyura-renders-2.webp",
      thumbnail: "https://i.ibb.co/WKbtMcw/Pyura-renders-2.webp",
    },
  ];

  const [value, setValue] = useState(1);

  const onChange = (value) => {
    setValue(value);
  };
  return (
    <div>
      <ImageGallery
        items={images}
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default ImageCarausel;
