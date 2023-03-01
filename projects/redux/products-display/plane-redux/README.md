# Getting Started with Create React App

###

#### if u directly use async ur action creator returns a promise not a plane js object

#### so we use thunk

#### thunk is a js function only

#### and our action creator returns a function

#### and that is intercepted by our middleware

#### and then middleware calls this thunk function with dispatch as argument and handles side effects

```
export const fetchAllProducts = async () => {
const { data } = await axios.get("https://fakestoreapi.com/products");
return {
  type: ACTION_TYPES.FETCH_ALL_PRODUCTS,
  payload: data,
};

 };
```

```
export const fetchAllProductsWithThunk = () => {
  return async (dispatch) => {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch(setAllProducts(res.data));
  };
 };
```
