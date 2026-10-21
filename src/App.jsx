import { useState } from "react";
import Form from "./components/form/Form";
import List from "./components/list/List";

export default function App() {
  const [students, setStudents] = useState([]);

  function handleStudents(student) {
    setStudents([...students, student]);
  }

  return (
    <div>
      <Form toAddStudents={handleStudents} />
      <List stdList={students} />
    </div>
  );
}