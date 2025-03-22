import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  
  const [showModal, setShowModal] = useState(false);

  function hideModalHandler (event) {
    setShowModal(false);
  }

  function showModalHandler (event) {
    setShowModal(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList 
          isPosting={showModal} 
          onStopPosting={hideModalHandler} />
      </main> 
   </>
  );
}

export default App;
