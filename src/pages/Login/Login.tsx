import {
  Button,
  Text,
  Flex,
  Image,
  Box,
  SlideFade,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//@ts-ignore
import logo from '../../assets/img/logo.png';

const Login = ({ login, getHashParams, handleRedirect }) => {
  const { isOpen: isOpenFirst, onToggle: onToggleFirst } = useDisclosure();
  const { isOpen: isOpenSecond, onToggle: onToggleSecond } = useDisclosure();
  const { isOpen: isOpenThird, onToggle: onToggleThird } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(onToggleFirst, 1000);
    const timer2 = setTimeout(onToggleSecond, 1300);
    const timer3 = setTimeout(onToggleThird, 1600);
    const params = getHashParams();
    const access_token = params?.access_token;
    if (access_token) {
      localStorage.setItem('spotifyAuthToken', access_token);
    }

    if (access_token) {
      login({ token: access_token });
      navigate('/create-playlist');
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box position="relative">
          <Box
            color="#33ff6c"
            position="absolute"
            top="20%"
            right="-7%"
            fontWeight="bolder"
          >
            <SlideFade in={isOpenSecond}>
              <Text>By Raven</Text>
            </SlideFade>
          </Box>
          <SlideFade in={isOpenFirst}>
            <Flex alignItems="center" justifyContent="center">
              <Image src={logo} alt="Avatar" boxSize={100} />
              <Text
                color="white"
                fontWeight="bold"
                fontSize={100}
                textAlign="center"
              >
                Spotify
              </Text>
            </Flex>
          </SlideFade>
        </Box>
        <SlideFade in={isOpenThird}>
          <Button
            backgroundColor="#1DB954"
            color="white"
            mx="auto"
            my={5}
            onClick={(event) => handleRedirect(event)}
          >
            LINK YOUR SPOTIFY ACCOUNT
          </Button>
        </SlideFade>
      </Flex>
    </>
  );
};

export default Login;
