import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Button, Container } from "../../globalStyles";
import {
  FormTitle,
  Form,
  FormControl,
  FormLabel,
  FormTextInput,
  FormError,
} from "./SampleForm.elements";

let numberOfTimeRender = 0;

const SampleForm = () => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({});

  numberOfTimeRender++;

  const validFormSubmissionHandler = (data) => {
    console.log("submitted data:- ", data);
  };

  const invalidFormSubmissionHandler = (errorFound) => {
    console.log(
      "Errors found on form submission as for is invalid:- ",
      errorFound
    );
  };

  return (
    <>
      <Container>
        <FormTitle>Sample Form {numberOfTimeRender / 2}</FormTitle>
        <Form
          onSubmit={handleSubmit(
            validFormSubmissionHandler,
            invalidFormSubmissionHandler
          )}
          noValidate
        >
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormTextInput
              type="text"
              id="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />
            <FormError>{errors.username?.message}</FormError>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormTextInput
              type="email"
              id="email"
              {...register("email", {
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Inavlid Email format",
                },
                required: {
                  value: true,
                  message: "Email is required",
                },
                validate: {
                  admin: (fieldValue) => {
                    return (
                      !fieldValue.toLowerCase().includes("admin") ||
                      "Admin email id is not allowed"
                    );
                  },
                  badDomain: (fieldValue) => {
                    return (
                      !fieldValue.endsWith("@test.com") ||
                      "This email domain is unsupported"
                    );
                  },
                },
              })}
            />
            <FormError>{errors.email?.message}</FormError>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="channel">Channel</FormLabel>
            <FormTextInput
              type="text"
              id="channel"
              {...register("channel", {
                required: {
                  value: true,
                  message: "Channel is a required",
                },
              })}
            />
            <FormError>{errors.channel?.message}</FormError>
          </FormControl>

          <Button $primary type="submit">
            Submit
          </Button>
        </Form>
        <DevTool control={control} />
      </Container>
    </>
  );
};

export default SampleForm;
