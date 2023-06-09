import React from "react";
import Card from "./Card";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "./img/image11.jpg";
import image2 from "./img/image22.jpg";
import image3 from "./img/image33.jpg";
import image4 from "./img/image44.jpg";

const cards = [
  {
    id: 1,
    title: "Fazt Web",
    image: image1,
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Fazt Blog",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 4,
    title: "Fazt Youtube",
    image: image4,
    url: "https://youtube.com/fazttech",
  },
];

export const Cards = () => {
  return (
    <div className="container-c" style={{ paddingBottom: '15%'}}>
      <h1 className="grid" style={{ paddingBottom: '1%'}}>Promociones</h1>
      <Swiper slidesPerView={1} spaceBetween={0}>
        <SwiperSlide>
          <div className="container d-flex justify-content-center align-items-center h-100 ">
            <div className="row">
              {cards.map(({ title, image, url, id }) => (
                <div className="col-md-3" key={id}>
                  <Card imageSource={image} title={title} url={url} />
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cards;