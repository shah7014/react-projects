import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormControl = styled.div`
  width: 50%;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 968px) {
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  font-weight: 700;
`;

export const FormTextInput = styled.input`
  padding: 5px 10px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  background: grey;
  border: 1px solid #f1f1f1;
`;
