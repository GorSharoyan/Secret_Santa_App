import React from "react";
//UI
// import { Card } from "@mui/material";

//Formik
import { Formik } from "formik";

//Components
import FormField from "../FormField/Formfield";

export default function SecretSantaCard({ number }) {
  return (
    <div>
      <div>Secret Santa # {number}</div>
      <div>
        <FormField />
      </div>
    </div>
  );
}
/* <Formik
          // initialValues={{ name: "", email: "" }}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.email) {
          //     errors.name = "Required";
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = "Invalid email address";
          //   }
          //   return errors;
          }}
          // onSubmit={(values, { setSubmitting }) => {
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
            }, 400);
          }}
        >
          {({
            // values,
            // errors,
            // touched,
            // handleChange,
            // handleBlur,
            // handleSubmit,
            // isSubmitting
            /* and other goodies */
//   }) => (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="name"
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.name}
//       />
//       {errors.name && touched.name && errors.name}
//       <input
//         type="email"
//         name="email"
//         placeholder="email"
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.email}
//       />
//       {errors.email && touched.email && errors.email}
//       <button type="submit" disabled={isSubmitting}>
//         Submit
//       </button>
//     </form>
//   )}
// </Formik> */}
// </div>
