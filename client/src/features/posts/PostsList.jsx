// API_URL comes from .env.development file
import React, { useState, useEffect } from 'react';
import { fetchAllPosts, deletePostSeverice } from '../../services/postService';
import { Link } from "react-router-dom";


function PostsList() {
    // Fetch posts from Rails API
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    // Fetch posts from Rails API
    useEffect(() => {
        async function loadPost() {
            try {
                const data = await fetchAllPosts();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        loadPost();
    }, []);

    const deletePost = async (id) => {
        try {
            await deletePostSeverice(id);
            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h2>Posts List</h2>
            {posts.map((post) => (
                <div key={post.id} className="post-container">
                    <h3>
                        <Link to={`/posts/${post.id}`} className="post-title">{post.title}</Link> 
                    </h3>
                    <div className="post-links">
                        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                        {" | "}
                        <button onClick={() => deletePost(post.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostsList;