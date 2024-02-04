import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Box, Flex, Icon } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <Box key={item.id}>
          <Image
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            alt="property"
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </Box>
      ))}
    </Slider>
  );
};



export default ImageCarousel;
