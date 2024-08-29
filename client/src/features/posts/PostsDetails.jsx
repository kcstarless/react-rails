import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from '../../../constants';

function PostsDetails() {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentPost = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                    setLoading(false);
                } else {
                    throw response;
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchCurrentPost();
    }, [id]);

    const deletePost = async () => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                navigate('/');
            } else {
                throw response;
            }
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