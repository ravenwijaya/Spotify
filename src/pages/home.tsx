// @ts-nocheck
import React, { useState, useEffect } from 'react';
import {
  search,
  getCurrentUser,
  addPlaylist,
  getUserPlaylists,
  addItemToPlaylist,
} from '../store/actions/resources';
import Card from '../components/Card';
import PlaylistCard from '../components/PlaylistCard';
import Form from '../components/Form';
import './home.css';
import { Flex, Input, Text } from '@chakra-ui/react';

const HomePage = () => {
  const [data, setData] = useState<any>();
  const [user, setUser] = useState<any>();
  const [selectedData, setSelectedData] = useState<any>([]);
  const [userPlaylists, setUserPlaylists] = useState();

  const getData = async (name) => {
    const user = await getCurrentUser();
    const userPlaylists = await getUserPlaylists();
    const data = await search(name);
    setUser(user);
    setUserPlaylists(userPlaylists);
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

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    await addPlaylist(user.id, { ...data, public: false });
  };

  const AddSelectedItemToPlaylist = async (id) => {
    const uriList = selectedData.map((item) => item.uri);
    await addItemToPlaylist(id, { uris: uriList });
    setSelectedData([]);
  };

  useEffect(() => {
    getData('r');
  }, [selectedData]);

  return (
    <Flex direction="column">
      <Text color="white" fontSize={30} fontWeight="bold">
        Hi, Welcome {user?.display_name}
      </Text>
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

      <Text color="white" fontSize={20} fontWeight="bold">
        Playlist & Selected
      </Text>

      <Flex className="slider" backgroundColor="black">
        {userPlaylists?.map((item) => (
          <PlaylistCard
            key={item.id}
            data={item}
            addItem={AddSelectedItemToPlaylist}
          />
        ))}
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
      <Form handleSubmit={handleSubmit} />
    </Flex>
  );
};

export default HomePage;
