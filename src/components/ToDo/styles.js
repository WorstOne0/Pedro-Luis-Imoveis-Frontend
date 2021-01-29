import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  width: 100%;
`;

export const ContainerInput = styled.div`
  height: 50px;
  width: 100%;
  border: 1px solid #003c8f;
  border-radius: 5px;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 20px;
  border: none;
  background: transparent;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #003c8f;
  font-size: 18px;

  ::placeholder {
    color: #003c8f;
    font-size: 18px;
  }
`;

export const AddButton = styled.button`
  height: 100%;
  width: 60px;
  border: none;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #003c8f;
  font-size: 16px;

  cursor: pointer;
`;

export const ToDoList = styled.div`
  height: auto;
  width: 100%;
  padding: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WrapItem = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 15px;
  border: 1px solid #003c8f;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  animation: 0.3s FadeIn ease-in;

  @keyframes FadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ToDoItem = styled.div`
  height: 50px;
  width: 100%;
  padding: 10px 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #003c8f;
  font-size: 18px;
`;

export const RemoveButton = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: red;
  font-size: 18px;

  cursor: pointer;
`;
