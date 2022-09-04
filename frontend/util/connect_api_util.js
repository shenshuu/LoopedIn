export const fetchConnects = connects => (
    $.ajax({
        url: '/api/connects',
        method: 'GET',
        data: { connects }
    })
);

export const createConnect = connect => (
    $.ajax({
        url: '/api/connects',
        method: 'POST',
        data: { connect }
    })
);

export const deleteConnect = connect => (
    $.ajax({
        url: `/api/connects${connect.id}`,
        method: 'DELETE',
    })
);