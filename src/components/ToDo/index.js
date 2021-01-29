import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todoList";

import {
  Container,
  Error,
  Form,
  ContainerInput,
  Input,
  AddButton,
  ToDoList,
  WrapItem,
  ToDoItem,
  RemoveButton,
} from "./styles";

import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const ToDo = () => {
  const addList = (event) => {
    event.preventDefault();

    if (value !== "") {
      setList([...list, value]);
    }
  };

  const removeList = async (index) => {
    const remainder = list.filter((todo, _index) => {
      if (_index !== index) return todo;
    });

    setList(remainder);
  };

  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(addTodo(list));

    setValue("");
  }, [list]);

  return (
    <Container>
      <Form>
        <ContainerInput>
          <Input
            name="value"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Informações Adicionais"
            autoComplete="off"
          />
          <AddButton onClick={addList}>
            <FaPlus />
          </AddButton>
        </ContainerInput>

        <ToDoList>
          {list.map((item, index) => (
            <WrapItem>
              <ToDoItem>{item}</ToDoItem>
              <RemoveButton type="button" onClick={() => removeList(index)}>
                <MdClose />
              </RemoveButton>
            </WrapItem>
          ))}
        </ToDoList>
      </Form>
    </Container>
  );
};

export default ToDo;
