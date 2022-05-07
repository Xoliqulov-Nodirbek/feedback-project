import { useParams } from "react-router-dom";

const Feedback = () => {
    const { id } = useParams();
    return (
        <h1>Feedeback- {id} </h1>
    );
}

export default Feedback;