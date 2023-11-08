import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import {
  checkboxOptions,
  countries,
  firstNameRule,
  generateRequiredRule,
  radioOptions,
  sliderMarks,
} from "../utils";
import FormInputText from "./form-component/FormInputText";
import FormInputRadio from "./form-component/FormInputRadio";
import FormInputDropdown from "./form-component/FormInputDropdown";
import FormInputCheckbox from "./form-component/FormInputCheckboxGroup";
import FormInputSlider from "./form-component/FormInputSlider";

const SampleMuiForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      country: "",
      placesToVisit: [],
      gender: "",
      temperature: 0,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      margin={2}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* first name */}
      <FormInputText
        fieldName={"firstname"}
        label={"First Name"}
        control={control}
        rules={generateRequiredRule("First name")}
      />

      {/* last name */}
      <FormInputText
        fieldName={"lastname"}
        label={"Last Name"}
        control={control}
        rules={generateRequiredRule("Last name")}
      />

      {/* country select */}
      <FormInputDropdown
        fieldName={"country"}
        control={control}
        options={countries}
        label={"Slect a country"}
        rules={generateRequiredRule("Country")}
      />

      {/* radio gender */}
      <Box>
        <FormInputRadio
          control={control}
          fieldName={"gender"}
          label={"Gender"}
          options={radioOptions}
          rules={generateRequiredRule("Gender")}
        />
      </Box>

      {/* checkbox places to visit */}

      <Box>
        <FormInputCheckbox
          control={control}
          fieldName={"placesToVisit"}
          label={"Places to visit"}
          options={checkboxOptions}
          rules={generateRequiredRule("Places to visit")}
        />
      </Box>

      {/* slider temperature */}
      <Box>
        <FormInputSlider
          label={"Select tempertatur of tourist attarction preferrable"}
          control={control}
          fieldName={"temperature"}
          sliderMarks={sliderMarks}
          rules={generateRequiredRule("Temperature")}
        />
      </Box>

      <Button
        type="submit"
        sx={{ mt: 4 }}
        variant="contained"
        color="secondary"
      >
        Submit
      </Button>
    </Box>
  );
};

export default SampleMuiForm;
