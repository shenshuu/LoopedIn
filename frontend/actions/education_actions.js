import * as ApiUtil from '../util/education_api_util';

export const RECEIVE_EDUCATIONS = "RECEIVE_EDUCATIONS";
export const RECEIVE_EDUCATION = "RECEIVE_EDUCATION";
export const REMOVE_EDUCATION = "REMOVE_EDUCATION";

const receiveEducations = educations => ({
    type: RECEIVE_EDUCATIONS,
    educations
});

const receiveEducation = education => ({
    type: RECEIVE_EDUCATION,
    education
});

const removeEducation = education => ({
    type: REMOVE_EDUCATION,
    education
});

export const createEducation = education => dispatch => (
    ApiUtil.createEducation(education)
    .then(education => dispatch(receiveEducation(education)))
);

export const fetchEducations = educations => dispatch => (
    ApiUtil.fetchEducations(educations)
    .then(educations => dispatch(receiveEducations(educations)))
);

export const updateEducation = education => dispatch => (
    ApiUtil.updateEducation(education)
    .then(education => dispatch(receiveEducation(education)))
);

export const deleteEducation = education => dispatch => (
    ApiUtil.deleteEducation(education)
    .then(() => dispatch(removeEducation(education)))
);