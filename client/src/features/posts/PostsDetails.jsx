import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from '../../../constants';

function PostsDetails() {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

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

    if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">Back to Posts List</Link>
    </div>
  );
}

export default PostsDetails;