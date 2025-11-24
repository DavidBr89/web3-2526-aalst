import { useFormik } from "formik";
// import React, { useState, type ChangeEvent, type FormEvent } from "react";

import * as Yup from "yup";

const subjects = [
  { id: 1, label: "Vraag", value: "vraag" },
  { id: 2, label: "Klacht", value: "klacht" },
  { id: 3, label: "Andere", value: "andere" },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Naam is verplicht!"),
  email: Yup.string()
    .required("Email is verplicht!")
    .email("Geen geldig emailadres!"),
  age: Yup.number()
    .max(150, "Leeftijd is maximaal 150")
    .positive("Moet een positief getal zijn")
    .integer("Mag geen kommagetal zijn!"),
  subject: Yup.string()
    .required("Onderwerp is verplicht!")
    .oneOf(
      subjects.map((s) => s.value),
      "Onderwerp is niet geldig!"
    ),
  comments: Yup.string()
    .required("Bericht is verplicht!")
    .min(5, "Minstens 5 tekens!")
    .max(150, "Maximum 150 tekens!"),
});

const ContactPage = () => {
  //   const [email, setEmail] = useState("");
  //   const [name, setName] = useState("");

  //   Manueel werken met formulieren
  //   // State groeperen
  //   const [contactData, setContactData] = useState({
  //     email: "",
  //     name: "",
  //     comments: "",
  //   });

  //   const handleChange = (
  //     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     setContactData({ ...contactData, [event.target.name]: event.target.value });
  //   };

  //   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //     console.log("Het formulier is ingestuurd: ", contactData);

  //     // POST request versturen naar mijn API met contactData

  //     event.preventDefault();
  //   };

  //   Formulieren met FORMIK

  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: 1,
      subject: "klacht",
      comments: "",
    },
    onSubmit: (values) => {
      // Wordt enkel uitgevoerd als de validatie klopt
      console.log("FORMIK: ", values);
    },
    validationSchema,
    validateOnChange: false,
  });

  return (
    <div className="p-4">
      {/* <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="px-4 py-2 border border-teal-600 rounded-lg block"
          type="text"
          name="name"
          placeholder="Naam"
          value={contactData.name}
          onChange={handleChange}
        />
        <input
          className="px-4 py-2 border border-teal-600 rounded-lg block"
          type="text"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={contactData.email}
        />

        <textarea
          name="comments"
          className="px-4 py-2 border border-teal-600 rounded-lg block"
          value={contactData.comments}
          placeholder="Bericht"
          onChange={handleChange}
        />

        <button
          className="bg-teal-700 hover:bg-teal-600 cursor-pointer text-white uppercase font-bold rounded-lg px-4 py-2"
          type="submit">
          Versturen
        </button>
      </form> */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className={`px-4 py-2 border rounded-lg block outline-0 ${
            errors.name
              ? "border-red-600 focus:border-red-800"
              : "border-teal-600 focus:border-teal-900 "
          }  `}
          type="text"
          id="name"
          name="name"
          placeholder="Naam"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && (
          <p className="text-red-500 text-sm font-thin">{errors.name}</p>
        )}
        <input
          className={`px-4 py-2 border rounded-lg block outline-0 ${
            errors.email
              ? "border-red-600 focus:border-red-800"
              : "border-teal-600 focus:border-teal-900 "
          }  `}
          type="text"
          name="email"
          placeholder="Email"
          //   required
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email && (
          <p className="text-red-500 text-sm font-thin">{errors.email}</p>
        )}

        <input
          className={`px-4 py-2 border rounded-lg block outline-0 ${
            errors.age
              ? "border-red-600 focus:border-red-800"
              : "border-teal-600 focus:border-teal-900 "
          }  `}
          type="number"
          name="age"
          placeholder="Leeftijd"
          //   required
          onChange={handleChange}
          value={values.age}
          onBlur={handleBlur}
        />
        {errors.age && (
          <p className="text-red-500 text-sm font-thin">{errors.age}</p>
        )}

        <select
          className={`px-4 py-2 border rounded-lg block outline-0 ${
            errors.subject
              ? "border-red-600 focus:border-red-800"
              : "border-teal-600 focus:border-teal-900 "
          }  `}
          name="subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.subject}>
          {subjects.map((s) => (
            <option key={s.id} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="text-red-500 text-sm font-thin">{errors.subject}</p>
        )}
        <textarea
          name="comments"
          className={`px-4 py-2 border rounded-lg block outline-0 ${
            errors.comments
              ? "border-red-600 focus:border-red-800"
              : "border-teal-600 focus:border-teal-900 "
          }  `}
          value={values.comments}
          placeholder="Bericht"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.comments && (
          <p className="text-red-500 text-sm font-thin">{errors.comments}</p>
        )}
        <button
          className="bg-teal-700 hover:bg-teal-600 cursor-pointer text-white uppercase font-bold rounded-lg px-4 py-2"
          type="submit">
          Versturen
        </button>
        {/* <input type="submit" /> */}
      </form>
    </div>
  );
};

export default ContactPage;
