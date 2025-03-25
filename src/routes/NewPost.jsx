import { Link, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onCancel, onAddPost }) {
  const nav = useNavigate();
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  function changeBodyHandler (event) {
    setBody(event.target.value);
  }

  function changeAuthorHandler (event) {
    setAuthor(event.target.value);
  }

  function submitHandler (event) {
    event.preventDefault();

    const postData = {
      author,
      body
    };

    console.log(postData);
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} 
            onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required
            onChange={changeAuthorHandler} />
        </p>
        <p className={classes.actions}>
          <Link type='button' to='..'>Cancel</Link>
          <button onClick={submitHandler}>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;