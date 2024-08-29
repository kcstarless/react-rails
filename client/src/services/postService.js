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

async function deletePost(id) {
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

async function createPost(postData) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}

async function updatePost(postData) {
    const response = await fetch(`${API_URL}/${postData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}

export { fetchAllPosts, deletePost, fetchPost, createPost, updatePost };