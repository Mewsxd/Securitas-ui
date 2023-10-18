import React from "react";
import Navbar from "../Components/Home Components/Navbar";
import classes from "./ErrorPage.module.css";
import { useRouteError } from "react-router-dom";
export const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occured!";
  let message = "Something went wrong";
  if (error.status === "404") {
    title = "Not found!";
    message = "Could not find resource";
  }
  return (
    <>
      <Navbar />
      <div className={classes.errorContainer}>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </>
  );
};
