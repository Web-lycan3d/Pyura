/** @format */

import React, { useState } from "react";
import "./carausel.styles.scss";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const ImageCarausel = () => {
  const [Slides, setSlides] = useState([
    <img src="https://i.ibb.co/5scjhzY/Pyura-renders-1.png" alt="pyura1" />,
    <img src="https://i.ibb.co/r7hLtrd/Perspective-View-1.png" alt="error" />,
    <img src="https://i.ibb.co/nfwmg0B/Pyura-renders-7.png" alt="error" />,
    <img src="https://i.ibb.co/CMQFNQk/Pyura-renders-2.png" alt="error" />,
    <img src=" https://i.ibb.co/pWgqcqs/Pyura-renders-8.png" alt="error" />,
  ]);
  const [Thumbnails, setThumbnails] = useState([
    <img src="https://i.ibb.co/5scjhzY/Pyura-renders-1.png" alt="pyura1" />,
    <img src="https://i.ibb.co/r7hLtrd/Perspective-View-1.png" alt="error" />,
    <img src="https://i.ibb.co/nfwmg0B/Pyura-renders-7.png" alt="error" />,
    <img src="https://i.ibb.co/CMQFNQk/Pyura-renders-2.png" alt="error" />,
    <img src=" https://i.ibb.co/pWgqcqs/Pyura-renders-8.png" alt="error" />,
  ]);
  const [value, setValue] = useState(1);

  const onChange = (value) => {
    setValue(value);
  };
  return <div></div>;
};

export default ImageCarausel;
