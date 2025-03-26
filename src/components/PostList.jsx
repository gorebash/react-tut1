import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import classes from './PostList.module.css';

function PostList () {
  const posts = useLoaderData() || [];

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          { posts.map((p) => 
            <Post key={p.id} id={p.id} body={p.body} author={p.author} /> 
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