import React from "react";
//UI
// import { Card } from "@mui/material";
//Formik
import { Formik } from "formik";
export default function SecretSantaCard() {
  return (
    <div>Gago</div>
    // <div>
    //   <Formik
    //     initialValues={{ name: "", email: "" }}
    //     validate={(values) => {
    //       const errors = {};
    //       if (!values.email) {
    //         errors.name = "Required";
    //       } else if (
    //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //       ) {
    //         errors.email = "Invalid email address";
    //       }
    //       return errors;
    //     }}
    //     onSubmit={(values, { setSubmitting }) => {
    //       setTimeout(() => {
    //         alert(JSON.stringify(values, null, 2));
    //         setSubmitting(false);
    //       }, 400);
    //     }}
    //   >
    //     {({
    //       values,
    //       errors,
    //       touched,
    //       handleChange,
    //       handleBlur,
    //       handleSubmit,
    //       isSubmitting
    //       /* and other goodies */
    //     }) => (
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           type="email"
    //           name="email"
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.email}
    //         />
    //         {errors.email && touched.email && errors.email}
    //         <input
    //           type="password"
    //           name="password"
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.password}
    //         />
    //         {errors.password && touched.password && errors.password}
    //         <button type="submit" disabled={isSubmitting}>
    //           Submit
    //         </button>
    //       </form>
    //     )}
    //   </Formik>
    // </div>
  );
}
