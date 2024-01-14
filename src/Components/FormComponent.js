import React, { useEffect, useReducer } from "react";
import classes from "./FormComponent.module.css";
import { Form, useNavigation } from "react-router-dom";
const initStates = {
  name: "",
  phoneNumber: "",
  email: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "phoneNumber":
      return { ...state, phoneNumber: action.value };
    case "email":
      return { ...state, email: action.value };
    case "reset":
      return { name: "", phoneNumber: "", email: "" };
    default:
      return state;
  }
};
const FormComponent = () => {
  const [state, dispatch] = useReducer(reducer, initStates);
  function submitHandler() {
    dispatch({ type: "reset" });
  }
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  useEffect(() => {}, [isSubmitting]);
  return (
    <div className={classes.formContainer}>
      <Form method="POST" onSubmit={submitHandler}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          required
          value={state.name}
          onChange={(e) => {
            dispatch({ type: "name", value: e.target.value });
          }}
          style={{ marginTop: "2vw" }}
        />
        <input
          id="phone"
          name="phone"
          type="text"
          placeholder="Phone number"
          required
          value={state.phoneNumber}
          onChange={(e) => {
            dispatch({ type: "phoneNumber", value: e.target.value });
          }}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={state.email}
          onChange={(e) => {
            dispatch({ type: "email", value: e.target.value });
          }}
        />
        <button>{isSubmitting ? "Submitting..." : "Submit"}</button>
      </Form>
    </div>
  );
};

export default FormComponent;
export async function action({ request }) {
  const formData = await request.formData();
  const data = {
    name: formData.get("name"),
    phoneNumber: formData.get("phone"),
    email: formData.get("email"),
  };
  const response = await fetch(
    "https://shubhsita-18680-default-rtdb.asia-southeast1.firebasedatabase.app/Contacts.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    alert("Could not submit form due to error! ");
    return response;
  }
  return response;
}
