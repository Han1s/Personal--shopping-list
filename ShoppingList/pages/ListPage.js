import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Text,
  View,
  VStack,
} from "native-base";
import ShoppingList from "../components/ShoppingList";

const ListPage = () => {
  return (
    <VStack space={3}>
      <Heading>Type your items</Heading>
      <Text>This is the main page</Text>
      <Input
        size="md"
        placeholder="md Input"
        w={"100%"}
        py={0}
        my={0}
        InputRightElement={
          <Button rounded="none" w="1/4" h="full" onPress={() => {}}>
            Add
          </Button>
        }
      />
      <ShoppingList />
    </VStack>
  );
};

export default ListPage;
