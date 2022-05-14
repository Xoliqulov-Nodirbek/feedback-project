import { Route, Routes } from "react-router-dom";

import AddFeedback from "./pages/add-feedback/add-feedback";
import EditFeeddback from "./pages/edit-feedback/edit-feedback";
import Feedback from "./pages/feedback/feedback";
import NotFound from "./pages/not-found/notFound";
import Main from "./pages/main/main";

// -----> Scss-link
import "./sass/main.scss";

import { createContext, useEffect, useState} from "react";
export const PostsContext=createContext();

function App() {
  const  [posts, setPosts ] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(datajon => setPosts(datajon))
  }, []);
  
  if (!posts) {
    return null;
  }

  return (
    <PostsContext.Provider value={{posts, setPosts}}>
      <Routes>
        <Route path="/" element={< Main />} />
        <Route path="/feedback/:id" element={<Feedback />}  />
        <Route path="/add-feedback" element={<AddFeedback />} />
        <Route path="/edit-feedback/:id" element={<EditFeeddback />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PostsContext.Provider>
  );
}

export default App; 
