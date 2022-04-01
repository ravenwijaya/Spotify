import { Box, Image, Text, Button, ScaleFade } from '@chakra-ui/react';
import React, { useState } from 'react';

const Card = ({
  data: {
    artists,
    album: { images, type },
    name,
    uri,
  },
  onSelect,
  deselect,
  onDeselect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box className="card">
      <Image
        className="img"
        src={images[0].url}
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
            <Text className="card_info_album">{type}</Text>
          </Box>
        </ScaleFade>
      </Box>

      <Button
        className="button select_button"
        backgroundColor="black"
        onClick={!deselect ? () => onSelect(uri) : () => onDeselect(uri)}
      >
        {!deselect ? 'Select' : 'Deselect'}
      </Button>
    </Box>
  );
};

export default Card;
