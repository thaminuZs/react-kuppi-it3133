import './Card.css';

export default function Card({name, age, pp}) {
    return (
        <div className="card">
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <img src={URL.createObjectURL(pp)} alt="profile-pic" />
        </div>
    );
}