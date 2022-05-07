import { useParams } from "react-router-dom";

const EditFeeddback = () => {
    const { id } = useParams();
    return (
        <h1>EditFeeddback - {id} </h1>
    )
}

export default EditFeeddback;