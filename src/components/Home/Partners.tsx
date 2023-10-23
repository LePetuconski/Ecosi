import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function Parceiros() {
  const images = [
    'logo-ecogreen.png',
    'logo-ecogreen.png',
    'logo-ecogreen.png',
    'logo-ecogreen.png',
    'logo-ecogreen.png',
    'logo-ecogreen.png',
    'logo-ecogreen.png',
  ];

  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    }

    // Adiciona um ouvinte de redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Chama a função de redimensionamento inicialmente
    handleResize();

    // Remove o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Troca a cada 3 segundos
  };

  return (
    <>
      <Box px={4}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index}>
              <Image src={image} alt={`Image ${index}`} />
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
