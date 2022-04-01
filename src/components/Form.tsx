import React, { useState } from 'react';
import { Button, Box, Input, Textarea, Text } from '@chakra-ui/react';

const Form = ({ handleSubmit }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <Box w="40%" mx="auto">
      <form onSubmit={(e) => handleSubmit(e, inputs)}>
        <Text
          color="white"
          fontSize={20}
          fontWeight="bold"
          textAlign="center"
          mb={2}
        >
          {' '}
          Create Playlist
        </Text>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          minLength={10}
          backgroundColor="white"
          onChange={handleChange}
        />
        <Textarea
          name="description"
          placeholder="Description"
          backgroundColor="white"
          onChange={handleChange}
        />
        <Button
          w="100%"
          textAlign="center"
          type="submit"
          className="button"
          backgroundColor="black"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};
export default Form;
