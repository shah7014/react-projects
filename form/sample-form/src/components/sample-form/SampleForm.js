import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container } from "../../globalStyles";
import {
  Form,
  FormControl,
  FormLabel,
  FormTextInput,
} from "./SampleForm.elements";

const SampleForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Container>
        <Form>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormTextInput type="text" id="username" name="username" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormTextInput type="email" id="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="channel">Channel</FormLabel>
            <FormTextInput type="text" id="channel" name="channel" />
          </FormControl>
          <Button $primary type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SampleForm;
