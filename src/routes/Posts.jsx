import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  return (
    <main>
      <PostList />
      <Outlet />
    </main> 
  );
}

export default Posts;

export async function loader () {
  const resp = await fetch('http://localhost:8080/posts');
  const respData = await resp.json();

  return respData.posts;
}