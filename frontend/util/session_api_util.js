export const fetchUsers = users => (
    $.ajax({
        url: '/api/users',
        method: 'GET',
        users
    })
);

export const signup = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    })
);

export const login = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
);