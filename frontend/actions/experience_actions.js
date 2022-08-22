import * as ApiUtil from '../util/experience_api_util';

export const RECEIVE_EXPERIENCES = "RECEIVE_EXPERIENCES";
export const RECEIVE_EXPERIENCE = "RECEIVE_EXPERIENCE";
export const REMOVE_EXPERIENCE = "REMOVE_EXPERIENCE";

const receiveExperiences = experiences => ({
    type: RECEIVE_EXPERIENCES,
    experiences,
});

const receiveExperience = experience => ({
    type: RECEIVE_EXPERIENCE,
    experience,
});

const removeExperience = experience => ({
    type: REMOVE_EXPERIENCE,
    experience,
});

export const updateExperience = experience => dispatch => (
    ApiUtil.updateExperience(experience)
    .then(experience => dispatch(receiveExperience(experience)))
);

export const createExperience = experience => dispatch => (
    ApiUtil.createExperience(experience)
    .then(experience => dispatch(receiveExperience(experience)))
);

export const deleteExperience = experience => dispatch => (
    ApiUtil.deleteExperience(experience)
    .then(() => dispatch(removeExperience(experience)))
);

export const fetchExperiences = experiences => dispatch => (
    ApiUtil.fetchExperiences(experiences)
    .then(experiences => dispatch(receiveExperiences(experiences)))
);