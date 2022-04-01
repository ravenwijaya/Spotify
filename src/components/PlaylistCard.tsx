import { Box, Image, Text, ScaleFade, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const PlaylistCard = ({
  data: {
    id,
    images,
    name,
    public: pub,
    collaborative,
    tracks: { total },
  },
  addItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box className="card">
      <Image
        className="img"
        src={
          images[0]?.url ||
          'https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2'
        }
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
            <Text className="card_info_artist">
              Public: {pub ? 'true' : 'false'}
            </Text>
            <Text className="card_info_album">
              Collaborative: {collaborative ? 'true' : 'false'}
            </Text>
            <Text className="card_info_album">Total Tracks: {total}</Text>
          </Box>
        </ScaleFade>
      </Box>
      <Button
        className="button"
        m={2}
        backgroundColor="black"
        onClick={() => addItem(id)}
      >
        Add Selected
      </Button>
    </Box>
  );
};

export default PlaylistCard;
