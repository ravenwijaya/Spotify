// @ts-nocheck
import { Button, Text, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { auth } from '../store/actions/resources';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getHashParams = () => {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  };
  const handleRedirect = (event) => {
    event.preventDefault();
    window.location = auth();
  };

  useEffect(() => {
    const params = getHashParams();
    const access_token = params.access_token;
    const state = params.state;
    localStorage.setItem('spotifyAuthToken', access_token);
    // const token = localStorage.getItem('spotifyAuthToken');

    if (access_token) {
      console.log(access_token);
      // setIsAuthenticated(true);
      navigate('/home');
    }
  }, []);

  return (
    <>
      <Flex direction="column" my={50}>
        <Text color="white" fontWeight="bold" fontSize={100} textAlign="center">
          Welcome
        </Text>
        <Button
          backgroundColor="#1DB954"
          color="white"
          mx="auto"
          onClick={(event) => handleRedirect(event)}
        >
          LINK YOUR SPOTIFY ACCOUNT
        </Button>
      </Flex>
    </>
  );
};
export default Login;
