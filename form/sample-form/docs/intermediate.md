## Exploring more on RHF

### defaulValues of the whole form

- setting synchronous defaulvalue:-

```
  const {register, formState: {errors}} = useForm({
    defaultValues: {
      username: "testing-user"
    }
  })
```

- setting up asynchronous defaultValue:-

```
  const {} = useForm({
    defaultValues: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      return {
        username: data.name,
        email: data.email,
        channel: ""
      }
    }
  })
```

### Nested Object

- sometimes we want to group the inputs that are related to one another and this will create a nested object

- how can we register nested object with RHF?

```
  const {register, formState: {errors}} = useForm({
    defaultValues: {
      name: "",
      address: {
        city: ""
      }
    }
  })

  <input ...register("address.city", {required: "City is a required field"}) />

  <p>{errors?.address?.city?.message}</p>
```

### Dynamic Fields

- need `useFieldArray` hook

- **this hook can only be used with array of objects and not with array of primitive values like array of string or number**

```
  const {control, register, formState: {errors}} = useForm({
    defaultValues: {
      visited: [{
        place: "",
        city: "",
        country: ""
      }]
    }
  })

  <!-- returns a lot of helper methods to work with field array -->
  const {fields, append, remove} = useFieldArray({
    name: "visited",
    control: control
  })
```

- in jsx we need to map the fields and each field need to be registered to

```
  {fields.map((field, index) => (

    <div key={field.id}>
      <input  {...register(`visited.${index}.place`)}/>
    </div>

  ))}
```

- accessing errors - errors is an object. so we will have a key as index.
  so something like:- {"0": {message: "some-error"}}

```
  <p>{errors.fieldName?.[index]?.propertyName?.message}</p>
```

### handling numeric and date types

- RHF provides properties called `valueAsNumber` and `valueAsDate` whihc can be used for conversion to specific number or date formate. otherwise the value will always be a string

```
  const {register} = useForm({
    defaultValues: {
      dob: new Date(),
      age: 0
    }
  })

  <input type="date" {...register("dob", {
    valueAsDate: true,
    required: {
      value: true,
      message: "DOB is a required field"
    }
  })} />


  <input type="number" {...register("age", {
    valueAsNumber: true,
    required: {
      value: true,
      message: "Age is a required field"
    }
  })} />
```

- this conversion that is provided by RHF **takes place before the validations are triggered.** So validation applies on the correct converted input only

### watch

```
  const {watch}= useForm();
  watch("username)
```

- every time the value changes the component will be re-rendered

- **How to use it with useFeect?**

### getValues

- unlike `watch` `getValues` does not subscribe to any input and does not cause component rerender

- as such its a good option if we want to get the values at a button click

- we can use `getValues` to get the value of the whole form or a specific field

### setValue

- **we can't use like this. Below way is wrong**

```
  setValue({
    username: "bret",
    age: 27
  })
```

- to use it we should do in this way

```
  setValue("username", "bret");
  setvalue("age", 27);
  setValue("address.city", "London")
```

- if we wnat to run validation against the setValue or if we want to update its state like whether its dirty or touched, need to add that as well

```
  setValue("username", "", {
    shouldValidate: true,
    shouldDirty: true,
    shouldTouch: true,
  })
```

### Managing form states

- the form as a whole and each and every input has states like `dirty` and `touched`
- `dirty` means the currentValue of the input is not same as defaultValue
- `touched` means the inout is interacted with. So if we focus on the input and click somewhere else then that input is amrked as touched