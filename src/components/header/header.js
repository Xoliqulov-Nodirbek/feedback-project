import { useContext } from "react";
import { PostsContext } from "../../App"

const Header = () => {
    const { posts  } =useContext(PostsContext);

    return (
        <header>
            <strong>
                Postlar soni: {posts.length}
            </strong>
        </header>
    )
}

export default Header;