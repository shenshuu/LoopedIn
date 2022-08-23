export const fetchEducations = educations => (
    $.ajax({
        url: '/api/educations',
        method: 'GET',
        data: { educations }
    })
);

export const updateEducation = education => (
    $.ajax({
        url: `/api/educations/${education.id}`,
        method: 'PATCH',
        data: { education }
    })
);

export const createEducation = education => (
    $.ajax({
        url: '/api/educations',
        method: 'POST',
        data: { education }
    })
);

export const deleteEducation = education => (
    $.ajax({
        url: `/api/educations/${education.id}`,
        method: 'DELETE',
        data: { education }
    })
);