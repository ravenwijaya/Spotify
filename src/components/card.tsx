import { Box, Image, Text, Button, ScaleFade } from '@chakra-ui/react';
import React, { useState } from 'react';

const Card = ({ data: { artists, album, name } }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box className="card">
      <Image
        className="img"
        src={album.images[0].url}
        alt="Avatar"
        onPointerEnter={() => {
          setIsOpen(true);
        }}
        onMouseOut={() => {
          setIsOpen(false);
        }}
      />
      <Box className="card_info">
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Box className="hover_card">
            <Text className="card_info_name">{name}</Text>
            <Text className="card_info_artist">{artists[0].name}</Text>
            <Text className="card_info_album">{album.name}</Text>
          </Box>
        </ScaleFade>
      </Box>

      <Button className="button select_button">Select</Button>
    </Box>
  );
};

export default Card;
