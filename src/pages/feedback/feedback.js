import { useParams } from "react-router-dom";

const Feedback = () => {
    const { id } = useParams();
    return (
        <div className="container">
            <h1>Feedeback- {id} </h1>
        </div>
    );
}

export default Feedback;