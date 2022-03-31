// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { search } from '../store/actions/resources';
import Card from '../components/card';
// import Form from '../components/Form';
import './home.css';
import { Flex, Input } from '@chakra-ui/react';
const HomePage = () => {
  const [data, setData] = useState<any>();
  const [selectedData, setSelectedData] = useState([]);

  const getData = async (name) => {
    const data = await search(name);
    setData(data);
  };
  const select = (uri) => {
    const album = data.find((item) => item.uri === uri);
    setSelectedData([...selectedData, album]);
  };
  const deselect = (uri) => {
    const album = selectedData.filter((item) => item.uri !== uri);
    setSelectedData(album);
  };
  useEffect(() => {
    getData('r');
  }, []);

  return (
    <Flex direction="column">
      <Input
        placeholder="search"
        color="black"
        mt={2}
        backgroundColor="white"
        onChange={(e) => getData(e.target.value)}
      />
      <Flex className="slider" backgroundColor="black">
        {data?.map((item) => (
          <Card key={item.uri} data={item} onSelect={select} />
        ))}
      </Flex>

      <Flex className="slider" backgroundColor="black">
        {selectedData?.map((item) => (
          <Card
            key={item.uri}
            data={item}
            onSelect={select}
            onDeselect={deselect}
            deselect
          />
        ))}
      </Flex>

      {/* <Form /> */}
    </Flex>
  );
};
export default HomePage;
