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
  } = useForm({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        username: data.username,
        email: data.email,
        channel: `${data.username}'s channel`,
        address: {
          street: data.address.street,
          city: data.address.city,
        },
        phoneNumbers: ["", ""],
      };
    },
  });

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

          {/* address field which is a nested object */}

          <FormControl>
            <FormLabel htmlFor="street">Street</FormLabel>
            <FormTextInput
              type="text"
              id="street"
              {...register("address.street", {
                required: {
                  value: true,
                  message: "Street is a required",
                },
              })}
            />
            <FormError>{errors.address?.street?.message}</FormError>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="city">City</FormLabel>
            <FormTextInput
              type="text"
              id="city"
              {...register("address.city", {
                required: {
                  value: true,
                  message: "city is a required",
                },
              })}
            />
            <FormError>{errors.address?.city?.message}</FormError>
          </FormControl>

          {/* Phone number is an array */}
          <FormControl>
            <FormLabel htmlFor="primary-phone">Primary Phone Number</FormLabel>
            <FormTextInput
              type="text"
              id="primary-phone"
              {...register("phoneNumbers.0", {
                required: {
                  value: true,
                  message: "Primary phone number is required",
                },
              })}
            />
            <FormError>{errors.phoneNumbers?.[0]?.message}</FormError>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="sec-phone">Secondary Phone Number</FormLabel>
            <FormTextInput
              type="text"
              id="sec-phone"
              {...register("phoneNumbers.1", {
                required: {
                  value: true,
                  message: "Secondary phone number is required",
                },
              })}
            />
            <FormError>{errors.phoneNumbers?.[1]?.message}</FormError>
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
