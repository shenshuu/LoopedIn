export const fetchPosts = posts => (
    $.ajax({
        url: '/api/posts',
        method: 'GET',
        data: { posts }
    })
);

export const createPost = post => (
    $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: { post }
    })
);

export const deletePost = post => (
    $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'DELETE',
        data: { post }
    })
);

export const updatePost = post => (
    $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'PATCH',
        data: { post }
    })
);