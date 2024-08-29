import { API_URL } from "../../constants";

async function fetchAllPosts() {
    try {
        const response = await fetch(API_URL);
        if (response.ok) {
            return await response.json();
        } else {
            throw response;
        }
    } catch (error) {
        console.error(error);
    }
}

async function fetchPost(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
            return await response.json();
        } else {
            throw response;
        }
    } catch (error) {
        console.error(error);
    }
}

async function deletePostSeverice(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        }
    });
    if (response.ok) {
        console.log('Post deleted successfully');
    } else {
        throw response;
    }
}

export { fetchAllPosts, deletePostSeverice, fetchPost };