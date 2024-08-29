import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deletePostSeverice, fetchPost } from "../../services/postService";

function PostsDetails() {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentPost = async () => {
            try {
                const data = await fetchPost(id);
                setPost(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCurrentPost();
    }, [id]);

    const deletePost = async () => {
        try {
            await deletePostSeverice(id);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${id}/edit`}>Edit</Link>
        {" | "}
      <Link to="/">Back to Posts List</Link>
        {" | "}
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}

export default PostsDetails;