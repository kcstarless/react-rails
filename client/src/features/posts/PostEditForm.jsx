import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from '../../../constants';

function PostEditForm() {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch current post by id
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
                setError(error);
            }
        }
        fetchCurrentPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/${id}`, { 
                method: "PUT", 
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify({
                    title: post.title,
                    body: post.body
                }) 
            });
    
            if (response.ok) {
                const json = await response.json();
                console.log(json);
                navigate(`/posts/${id}`);
            } else {
                console.error(response);
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="post-title">Title</label>
                    <input 
                        type="text" 
                        id="post-title"   
                        value={post?.title}      
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="post-body">Body</label>
                    <textarea 
                        id="post-body"
                        value={post?.body}
                        onChange={(e) => setPost({ ...post, body: e.target.value })}
                    />
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>   
            </form>
        </div>
    )
}

export default PostEditForm;