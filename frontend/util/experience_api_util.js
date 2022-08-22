export const createExperience = experience => (
    $.ajax({
        url: '/api/experiences',
        method: 'POST',
        data: { experience }
    })
);

export const deleteExperience = experience => (
    $.ajax({
        url: `/api/experiences/${experience.id}`,
        method: 'DELETE',
        data: { experience }
    })
);

export const updateExperience = experience => (
    $.ajax({
        url: `/api/experiences/${experience.id}`,
        method: 'PATCH',
        data: { experience }
    })
);

export const fetchExperiences = experiences => (
    $.ajax({
        url: '/api/experiences',
        method: 'GET',
        data: { experiences }
    })
);