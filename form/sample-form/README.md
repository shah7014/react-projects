# Getting Started with react-hook-form

### In a form we need to care about these things:-

- managing form data (eg:- your form is multi step form and you need to show data correctly that user has selected going back and forward)

- validations. provide good error validation to form inputs

- form submission

### Managing form state:-

lets say we want to register an input with name as "username"

`const form = useForm();
  const {register}  = form;
  const {name, ref, onChange, onBlur} = register("username");
`
