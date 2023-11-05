### Exploring more on RHF

#### defaulValues of the whole form

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

#### Nested Object

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
