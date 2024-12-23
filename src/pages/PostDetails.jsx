import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
const PostDetails = () => {
    const {postId}=useParams();
    const {data:post,isLoading,error}=useFetch(null,`https://jsonplaceholder.typicode.com/posts/${postId}`)

    
    return (
        <div>
            <h2>Post Title- {post?.title}</h2>
            <h3>Post description -{post?.body}</h3>
        </div>
    );
};

export default PostDetails;