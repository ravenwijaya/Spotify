import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
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
import { Flex, Input, Text } from '@chakra-ui/react';
import './home.css';

const HomePage = () => {
  const [data, setData] = useState<any>();
  const [user, setUser] = useState<any>();
  const [selectedData, setSelectedData] = useState<any>([]);
  const [userPlaylists, setUserPlaylists] = useState<any>([]);

  const getData = async (name) => {
    const user = await getCurrentUser();
    const userPlaylists = await getUserPlaylists();
    const data = await search(name);
    setUser(user);
    setUserPlaylists(userPlaylists);
    setData(data);
  };
  console.log(data);

  const select = (uri: string) => {
    const isSelected = selectedData.find((item) => item.uri === uri);
    if (!isSelected) {
      const album = data.find((item) => item.uri === uri);
      setSelectedData([...selectedData, album]);
    }
  };

  const deselect = (uri: string) => {
    const album = selectedData.filter((item) => item.uri !== uri);
    setSelectedData(album);
  };

  const handleSubmit = async (e: any, data: any) => {
    e.preventDefault();
    const res = await addPlaylist(user.id, { ...data, public: false });
    if (res) {
      Swal.fire('Success', 'Success Create Playlist!', 'success');
      setUserPlaylists([...userPlaylists, res]);
    }
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
    <Flex direction="column" mx={5} my={5}>
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

      <Flex
        className="slider"
        backgroundColor="black"
        overflowY="hidden"
        my={5}
      >
        {data?.map((item) => (
          <Card key={item.uri} data={item} onSelect={select} />
        ))}
      </Flex>

      {selectedData.length !== 0 && (
        <>
          <Text color="white" fontSize={20} fontWeight="bold">
            Selected
          </Text>
          <Flex
            className="slider"
            backgroundColor="black"
            overflowY="hidden"
            my={5}
          >
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
        </>
      )}

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
      </Flex>
      <Form handleSubmit={handleSubmit} />
    </Flex>
  );
};

export default HomePage;
