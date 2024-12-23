import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";

const PostList = () => {
    const {data:posts,isLoading,error} =useFetch([],`https://jsonplaceholder.typicode.com/posts?_limit=5`)
    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
    return (
        <div>
           <h2>All Post Are Here:</h2> 
           <ul>
            {posts.map(post=><li style={{listStyleType:'square'}} key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>  
                </li>)}
           </ul>
        </div>
    );
};

export default PostList;