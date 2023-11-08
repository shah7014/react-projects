import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const FormInputCheckbox = ({
  label,
  control,
  fieldName,
  rules = {},
  options,
}) => {
  return (
    <FormControl sx={{ m: 3 }}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={fieldName}
        control={control}
        rules={rules}
        render={({
          field: { value, onChange, onBlur, ref, name },
          fieldState: { error },
        }) => (
          <>
            {options.map(({ label: opLabel, value: opValue }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value.includes(opLabel)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onChange([...value, opLabel]);
                      } else {
                        onChange(value.filter((a) => a !== opLabel));
                      }
                    }}
                  />
                }
                label={opLabel}
                key={opLabel}
              />
            ))}
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

export default FormInputCheckbox;
