import './List.css';
import Card from "../card/Card";

export default function List({stdList}) {
    return (
        <div className="list">
            {stdList.map((student) => (
                <Card name={student.name} age={student.age} pp={student.pp} key={student.name}/>
            ))}
        </div>
    );
}