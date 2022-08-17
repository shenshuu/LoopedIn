export const createPost = post => (
    $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: { post }
    })
);

export const deletePost = id => (
    $.ajax({
        url: `/api/posts/${id}`,
        method: 'DELETE'
    })
);

export const updatePost = (post, id) => (
    $.ajax({
        url: `/api/posts/${id}`,
        method: 'PATCH',
        data: { post }
    })
);