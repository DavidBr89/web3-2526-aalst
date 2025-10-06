import React from "react";
import CourseList from "./CourseList";

interface ICourse {
  id: number;
  name: string;
}

// type Course = {
//   id: number;
//   name: string;
// };

const Content = () => {
  // API CALL -> REST API voor m ijn web vakken
  const courses: ICourse[] = [
    { id: 1, name: "Web 1" },
    { id: 2, name: "Web 2" },
    { id: 3, name: "Web 3" },
  ];

  return (
    <>
      {courses.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iure
        corporis, voluptate voluptas, numquam aperiam, tempore tenetur iste fuga
        qui magnam repudiandae corrupti officiis alias modi quisquam! Hic, nihil
        alias?
      </p>
      <CourseList />
    </>
  );
};

export default Content;
