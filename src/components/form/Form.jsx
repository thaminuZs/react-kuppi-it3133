import './Form.css';
import { useState } from "react";

export default function Form({toAddStudents}) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [pp, setPp] = useState('');

    const [course, setCourse] = useState('AMC');

    function handleSubmit(e) {

        console.log('hi');
        e.preventDefault();

        const student = {name, age, pp, course};

        toAddStudents(student);

        console.log(student);

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-box">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="input-box">
                <label htmlFor="age">Age</label>
                <input type="text" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>

            <div className="input-box">
                <label htmlFor="pp">Image</label>
                <input type="file" name="pp" id="pp" accept="image/*" onChange={(e) => setPp(e.target.files[0])}/>
            </div>

            <select name="course" id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="IT">IT</option>
                <option value="AMC">AMC</option>
            </select>

            

            <button>Submit</button>
        </form>
    );
}