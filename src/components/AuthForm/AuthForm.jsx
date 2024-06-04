import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate()

  const handleAuth = () => {
    console.log(inputs);
    if(!inputs.email || !inputs.password){
        alert("Please fill all the fields")
        return;
    }
    navigate('/')

  };

  return (
    <>
      <Box border={"1px solid gray"} padding={5} borderRadius={4} w="120%">
        <VStack spacing={4}>
          <Image src="/logo.png" alt="logo" h={24} cursor={"pointer"} />
          <Input placeholder="Email" fontSize={14} type="email"
          value={inputs.email}
          onChange={(e)=>setInputs((prev)=>({...prev, email:e.target.value}))}
          />
          <Input placeholder="Password" fontSize={14} type="password"
          value={inputs.password}
          onChange={(e)=>setInputs((prev)=>({...prev, password:e.target.value}))}
          />
          {!isLogin ? (
            <Input
              placeholder="confirm password"
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs((prev)=>({...prev, confirmPassword:e.target.value}))}
            />
          ) : null}

          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>

          <Flex
            alignItems={"center"}
            gap={1}
            justifyContent={"center"}
            my={4}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"White"}>
              {" "}
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" alt="google" w={5} />
            <Text mx="2" color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} padding={3} borderRadius={4} w={"120%"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
