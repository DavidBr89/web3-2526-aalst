import { useFormik } from "formik";
import React from "react";

import Axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  // TODO: Formulier aanmaken met een email en wachtwoord veld - Opgelet voor de validatie

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const data = await Axios.post(
          "http://localhost:5001/users/login",
          values,
          {
            withCredentials: true,
          }
        );

        navigate("/users");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          className="px-4 py-2 border block"
          name="email"
          type="text"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          className="px-4 py-2 border block"
          name="password"
          type="password"
          placeholder="****"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type="submit">Verstuur</button>
      </form>
    </div>
  );
};

export default LoginPage;
