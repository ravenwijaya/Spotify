// @ts-nocheck
import { Button, Text, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const search = useLocation().search;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleRedirect = (event) => {
    event.preventDefault();
    let url =
      'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      `&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}` +
      '&scope=' +
      encodeURIComponent('user-read-private%20user-read-email') +
      '&redirect_uri=' +
      encodeURIComponent('http://localhost:3000/');
    window.location = url;
  };

  useEffect(() => {
    const access_token = new URLSearchParams(search).get('code');
    if (access_token) {
      localStorage.setItem('spotifyAuthToken', access_token);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Flex direction="column" my={50}>
      <Text color="black" fontWeight="bold" fontSize={100} textAlign="center">
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
  );
};
export default Login;
