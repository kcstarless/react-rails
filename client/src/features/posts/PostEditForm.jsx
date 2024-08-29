import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPost, updatePost } from "../../services/postService";

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
                const post = await fetchPost(id);
                setPost(post);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }
        fetchCurrentPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updatePost(post);
            navigate(`/posts/${id}`);
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