import { Box, Container, Flex, Heading, Link, Spacer, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="teal.500" color="white" p={4} borderRadius="md">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" p={2} color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" p={2} color="white">
            About
          </Link>
        </Box>
      </Flex>
      <VStack spacing={4} mt={8}>
        <Heading>Welcome to MyApp</Heading>
        <Box>
          <Heading size="md">Your Blank Canvas</Heading>
          <p>Chat with the agent to start making edits.</p>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;