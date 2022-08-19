export const fetchLikes = likes => (
    $.ajax({
        url: '/api/likes',
        method: 'GET',
        data: { likes }
    })
);

export const createLike = like => (
    $.ajax({
        url: `/api/likes/`,
        method: 'POST',
        data: { like }
    })
);

export const deleteLike = like => (
    $.ajax({
        url: `/api/likes/${like.id}`,
        method: 'DELETE',
        data: { like }
    })
);