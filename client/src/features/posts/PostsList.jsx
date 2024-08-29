// API_URL comes from .env.development file
import React, { useState, useEffect } from 'react';
import { API_URL } from '../../../constants';
import { Link } from "react-router-dom";


function PostsList() {
    // Fetch posts from Rails API
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    // Fetch posts from Rails API
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(API_URL);
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    throw response;
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const deletePost = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                setPosts(posts.filter((post) => post.id !== id));
            } else {
                throw response;
            }
        }
        catch (error) {
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