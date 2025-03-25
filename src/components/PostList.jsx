import Post from './Post';
import classes from './PostList.module.css';
import { useState } from 'react';

function PostList () {
  const [posts, setPosts] = useState([]);

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          { posts.map((p) => 
            <Post key={p.body} body={p.body} author={p.author} /> 
          )}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign:'center', color:'#fff' }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;