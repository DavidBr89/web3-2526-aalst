import { useFormik } from "formik";
import React, { useState, type ChangeEvent, type FormEvent } from "react";

const subjects = [
  { id: 1, label: "Vraag", value: "vraag" },
  { id: 2, label: "Klacht", value: "klacht" },
  { id: 3, label: "Andere", value: "andere" },
];

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

  const { handleChange, handleBlur, handleSubmit, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "klacht",
      comments: "",
    },
    onSubmit: (values) => {
      console.log("FORMIK: ", values);
    },
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
          className="px-4 py-2 border border-teal-600 rounded-lg block"
          type="text"
          id="name"
          name="name"
          placeholder="Naam"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          className="px-4 py-2 border border-teal-600 rounded-lg block"
          type="text"
          name="email"
          placeholder="Email"
          //   required
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />

        <select
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

        <textarea
          name="comments"
          className="px-4 py-2 border border-teal-600 rounded-lg block"
          value={values.comments}
          placeholder="Bericht"
          onChange={handleChange}
          onBlur={handleBlur}
        />

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
