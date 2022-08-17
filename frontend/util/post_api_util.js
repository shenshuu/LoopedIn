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
        method: 'DELETE'
    })
);

export const updatePost = post => (
    $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'PATCH',
        data: { post }
    })
);