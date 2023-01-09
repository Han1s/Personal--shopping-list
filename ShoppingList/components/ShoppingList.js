import {
  AddIcon,
  Box,
  Center,
  Checkbox,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  MinusIcon,
  Text,
  useToast,
  VStack,
} from "native-base";
import { useState } from "react";

const ShoppingList = () => {
  const instState = [
    {
      title: "Code",
      isCompleted: true,
    },
    {
      title: "Meeting with team at 9",
      isCompleted: false,
    },
    {
      title: "Check Emails",
      isCompleted: false,
    },
    {
      title: "Write an article",
      isCompleted: false,
    },
  ];
  const [list, setList] = useState(instState);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const addItem = (title) => {
    if (title === "") {
      toast.show({
        title: "Please Enter Text",
        status: "warning",
      });
      return;
    }

    setList((prevList) => {
      return [
        ...prevList,
        {
          title: title,
          isCompleted: false,
        },
      ];
    });
  };

  const handleDelete = (index) => {
    setList((prevList) => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleStatusChange = (index) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };

  return (
    <>
      {list.map((item, itemI) => (
        <HStack
          my={1}
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          key={item.title + itemI.toString()}
        >
          <Checkbox
            isChecked={item.isCompleted}
            onChange={() => handleStatusChange(itemI)}
            value={item.title}
          ></Checkbox>
          <Text
            width="100%"
            flexShrink={1}
            textAlign="left"
            mx="2"
            strikeThrough={item.isCompleted}
            _light={{
              color: item.isCompleted ? "gray.400" : "coolGray.800",
            }}
            _dark={{
              color: item.isCompleted ? "gray.400" : "coolGray.50",
            }}
            onPress={() => handleStatusChange(itemI)}
          >
            {item.title}
          </Text>
          <IconButton
            size="sm"
            colorScheme="trueGray"
            icon={<MinusIcon name="minus" size="xs" color="trueGray.400" />}
            onPress={() => handleDelete(itemI)}
          />
        </HStack>
      ))}
    </>
  );
};

export default ShoppingList;
