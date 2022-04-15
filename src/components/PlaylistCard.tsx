import { Box, Image, Text, ScaleFade, Button, Flex } from '@chakra-ui/react';
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
    <Flex direction="column">
      <Box position="relative" width="300px">
        <Image
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
          width="300px"
          height="300px"
          objectFit="fill"
        />
        <Box position="absolute" width="100%" bottom={0}>
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Box>
              <Text
                color="white"
                fontWeight="bolder"
                fontSize={15}
                textAlign="center"
                backgroundColor="black"
                borderColor="mediumspringgreen"
                borderWidth="2px"
                borderTopRightRadius={20}
                borderTopLeftRadius={20}
                borderRadius={20}
                py={1}
                my={2}
              >
                {name}
              </Text>
              <Text color="white" textAlign="center" backgroundColor="black">
                Public: {pub ? 'true' : 'false'}
              </Text>
              <Text color="white" textAlign="center" backgroundColor="black">
                Collaborative: {collaborative ? 'true' : 'false'}
              </Text>
              <Text
                color="white"
                textAlign="center"
                backgroundColor="black"
                py={1}
              >
                Total Tracks: {total}
              </Text>
            </Box>
          </ScaleFade>
        </Box>
      </Box>
      <Button
        borderColor="mediumspringgreen"
        borderWidth="2px"
        backgroundColor="black"
        borderRadius="5px"
        height="50px"
        color="white"
        m={2}
        onClick={() => addItem(id)}
      >
        Add Selected
      </Button>
    </Flex>
  );
};

export default PlaylistCard;
