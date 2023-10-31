import styled from "styled-components";
import { NavBar } from "./components";

const Button = styled.button`
  background: black;
  padding: 0.5rem 1rem;
  border: none;
  color: white;
`;

const RedButton = styled(Button)`
  background: red;
`;

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Button>Some button</Button>
      <RedButton as={"a"}>Some red button</RedButton>
    </>
  );
};

export default App;
