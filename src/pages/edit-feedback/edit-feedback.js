import { useParams } from "react-router-dom";

const EditFeeddback = () => {
    const { id } = useParams();
    return (
        <div className="container">
            <h1>EditFeeddback - {id} </h1>
        </div>
    )
}

export default EditFeeddback;