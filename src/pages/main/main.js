import { useContext } from "react";
import { PostsContext } from "../../App";
import  Header from "../../components/header/header"

const Main = () => {
    const { posts } = useContext(PostsContext);

    return (
        <main>
            <div className="main__wrapper">
                <div className="container">
                    <h1>Main Page</h1>   

                    <Header />

                    <ul>
                        {posts.map((post)=><li key={post.id}>{post.title}</li>)}
                    </ul>

                </div>
            </div>
        </main>
    )
}

export default Main;