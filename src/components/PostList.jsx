import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';
import Modal from './Modal';
import { useState } from 'react';

function PostList () {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setAuthor] = useState('');
  const [showModal, setShowModal] = useState(true);

  function changeBodyHandler (event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler (event) {
    setAuthor(event.target.value);
  }

  function hideModalHandler (event) {
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <Modal onClose={hideModalHandler}>
          <NewPost 
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post body={enteredBody} author={enteredAuthor} />
        <Post body="Heavy metal" author="Brent G" />
        <Post body="Heavy metal rain" author="Brent G" />
      </ul>
    </>
  );
}

export default PostList;