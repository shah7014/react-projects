import { FormControl, FormHelperText, FormLabel, Slider } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const FormInputSlider = ({
  fieldName,
  label,
  control,
  sliderMarks,
  rules = {},
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={fieldName}
        control={control}
        render={({
          field: { value, onChange, onBlur, ref, name },
          fieldState: { error },
        }) => (
          <>
            <Slider
              step={10}
              marks={sliderMarks}
              value={value}
              onChange={(e, newValue) => onChange(+newValue)}
            />
            {error && (
              <FormHelperText sx={{ color: "red" }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default FormInputSlider;
