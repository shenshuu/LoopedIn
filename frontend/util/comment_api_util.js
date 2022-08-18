export const fetchComments = comments => (
    $.ajax({
        url: '/api/comments',
        method: 'GET',
        data: { comments }
    })
);

export const createComment = comment => (
    $.ajax({
        url: '/api/comments',
        method: 'POST',
        data: { comment }
    })
);

export const updateComment = comment => (
    $.ajax({
        url: `/api/comments/${comment.id}`,
        method: 'PATCH',
        data: { comment }
    })
);

export const deleteComment = comment => (
    $.ajax({
        url: `/api/comments/${comment.id}`,
        method: 'DELETE',
        data: { comment }
    })
);