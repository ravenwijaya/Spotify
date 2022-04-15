import { Box, Image, Text, Button, ScaleFade, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

interface PageValue {
  data: {
    artists: [{ name: string }];
    album: {
      images: [{ url: string }];
      type: string;
    };
    name: string;
    uri: string;
    duration_ms?: number;
  };
  onSelect: (uri: string) => void;
  deselect?: boolean;
  onDeselect?: (uri: string) => void;
}
const Card = ({
  data: {
    artists,
    album: { images, type },
    name,
    uri,
    duration_ms,
  },
  onSelect,
  deselect,
  onDeselect,
}: PageValue) => {
  const [isOpen, setIsOpen] = useState(false);
  const minutes = duration_ms && Math.round(duration_ms / 1000 / 60);
  const seconds = duration_ms && Math.round(duration_ms / 1000) % 60;
  return (
    <Flex direction="column">
      <Box position="relative" width="300px">
        <Image
          src={images[0].url}
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
                {` ${name} ${duration_ms && `${minutes}:${seconds}`}`}
              </Text>
              <Text color="white" textAlign="center" backgroundColor="black">
                {artists[0].name}
              </Text>
              <Text
                color="white"
                textAlign="center"
                backgroundColor="black"
                py={1}
              >
                {type}
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
        onClick={
          !deselect
            ? () => onSelect(uri)
            : onDeselect
            ? () => onDeselect(uri)
            : undefined
        }
      >
        {!deselect ? 'Select' : 'Deselect'}
      </Button>
    </Flex>
  );
};

export default Card;
