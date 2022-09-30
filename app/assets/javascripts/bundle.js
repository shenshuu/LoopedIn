/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/index.es.js ***!
  \*********************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/@fortawesome/free-brands-svg-icons/index.es.js'");

/***/ }),

/***/ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js ***!
  \**********************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/@fortawesome/free-regular-svg-icons/index.es.js'");

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js ***!
  \********************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/@fortawesome/free-solid-svg-icons/index.es.js'");

/***/ }),

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/react-fontawesome/index.es.js ***!
  \*****************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/@fortawesome/react-fontawesome/index.es.js'");

/***/ }),

/***/ "./frontend/actions/comment_actions.js":
/*!*********************************************!*\
  !*** ./frontend/actions/comment_actions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECEIVE_COMMENT": () => (/* binding */ RECEIVE_COMMENT),
/* harmony export */   "RECEIVE_COMMENTS": () => (/* binding */ RECEIVE_COMMENTS),
/* harmony export */   "REMOVE_COMMENT": () => (/* binding */ REMOVE_COMMENT),
/* harmony export */   "REMOVE_COMMENTS": () => (/* binding */ REMOVE_COMMENTS),
/* harmony export */   "createComment": () => (/* binding */ createComment),
/* harmony export */   "deleteComment": () => (/* binding */ deleteComment),
/* harmony export */   "deleteComments": () => (/* binding */ deleteComments),
/* harmony export */   "fetchComments": () => (/* binding */ fetchComments),
/* harmony export */   "updateComment": () => (/* binding */ updateComment)
/* harmony export */ });
/* harmony import */ var _util_comment_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/comment_api_util */ "./frontend/util/comment_api_util.js");

var RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
var RECEIVE_COMMENT = "RECEIVE_COMMENT";
var REMOVE_COMMENTS = "REMOVE_COMMENTS";
var REMOVE_COMMENT = "REMOVE_COMMENT";

var receiveComments = function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments
  };
};

var receiveComment = function receiveComment(comment) {
  return {
    type: RECEIVE_COMMENT,
    comment: comment
  };
};

var removeComments = function removeComments() {
  return {
    type: REMOVE_COMMENTS
  };
};

var removeComment = function removeComment(comment) {
  return {
    type: REMOVE_COMMENT,
    comment: comment
  };
};

var fetchComments = function fetchComments(comments) {
  return function (dispatch) {
    return _util_comment_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchComments(comments).then(function (comments) {
      return dispatch(receiveComments(comments));
    });
  };
};
var createComment = function createComment(comment) {
  return function (dispatch) {
    return _util_comment_api_util__WEBPACK_IMPORTED_MODULE_0__.createComment(comment).then(function (comment) {
      return dispatch(receiveComment(comment));
    });
  };
};
var updateComment = function updateComment(comment) {
  return function (dispatch) {
    return _util_comment_api_util__WEBPACK_IMPORTED_MODULE_0__.updateComment(comment).then(function (comment) {
      return dispatch(receiveComment(comment));
    });
  };
};
var deleteComment = function deleteComment(comment) {
  return function (dispatch) {
    return _util_comment_api_util__WEBPACK_IMPORTED_MODULE_0__.deleteComment(comment).then(function () {
      return dispatch(removeComment(comment));
    });
  };
};
var deleteComments = function deleteComments() {
  return function (dispatch) {
    return dispatch(removeComments());
  };
};

/***/ }),

/***/ "./frontend/actions/connect_actions.js":
/*!*********************************************!*\
  !*** ./frontend/actions/connect_actions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECEIVE_CONNECT": () => (/* binding */ RECEIVE_CONNECT),
/* harmony export */   "RECEIVE_CONNECTS": () => (/* binding */ RECEIVE_CONNECTS),
/* harmony export */   "REMOVE_CONNECT": () => (/* binding */ REMOVE_CONNECT),
/* harmony export */   "REMOVE_CONNECTS": () => (/* binding */ REMOVE_CONNECTS),
/* harmony export */   "createConnect": () => (/* binding */ createConnect),
/* harmony export */   "deleteConnect": () => (/* binding */ deleteConnect),
/* harmony export */   "deleteConnects": () => (/* binding */ deleteConnects),
/* harmony export */   "fetchConnects": () => (/* binding */ fetchConnects),
/* harmony export */   "updateConnect": () => (/* binding */ updateConnect)
/* harmony export */ });
/* harmony import */ var _util_connect_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/connect_api_util */ "./frontend/util/connect_api_util.js");

var RECEIVE_CONNECTS = "RECEIVE_CONNECTS";
var RECEIVE_CONNECT = "RECEIVE_CONNECT";
var REMOVE_CONNECT = "REMOVE_CONNECT";
var REMOVE_CONNECTS = "REMOVE_CONNECTS";

var receiveConnects = function receiveConnects(connects) {
  return {
    type: RECEIVE_CONNECTS,
    connects: connects
  };
};

var receiveConnect = function receiveConnect(connect) {
  return {
    type: RECEIVE_CONNECT,
    connect: connect
  };
};

var removeConnect = function removeConnect(connect) {
  return {
    type: REMOVE_CONNECT,
    connect: connect
  };
};

var removeConnects = function removeConnects() {
  return {
    type: REMOVE_CONNECTS
  };
};

var fetchConnects = function fetchConnects(connects) {
  return function (dispatch) {
    return _util_connect_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchConnects(connects).then(function (connects) {
      return dispatch(receiveConnects(connects));
    });
  };
};
var createConnect = function createConnect(connect) {
  return function (dispatch) {
    return _util_connect_api_util__WEBPACK_IMPORTED_MODULE_0__.createConnect(connect).then(function (connect) {
      return dispatch(receiveConnect(connect));
    });
  };
};
var updateConnect = function updateConnect(connect) {
  return function (dispatch) {
    return _util_connect_api_util__WEBPACK_IMPORTED_MODULE_0__.updateConnect(connect).then(function (connect) {
      return dispatch(receiveConnect(connect));
    });
  };
};
var deleteConnect = function deleteConnect(connect) {
  return function (dispatch) {
    return _util_connect_api_util__WEBPACK_IMPORTED_MODULE_0__.deleteConnect(connect).then(function () {
      return dispatch(removeConnect(connect));
    });
  };
};
var deleteConnects = function deleteConnects() {
  return function (dispatch) {
    return dispatch(removeConnects());
  };
};

/***/ }),

/***/ "./frontend/actions/education_actions.js":
/*!***********************************************!*\
  !*** ./frontend/actions/education_actions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECEIVE_EDUCATION": () => (/* binding */ RECEIVE_EDUCATION),
/* harmony export */   "RECEIVE_EDUCATIONS": () => (/* binding */ RECEIVE_EDUCATIONS),
/* harmony export */   "REMOVE_EDUCATION": () => (/* binding */ REMOVE_EDUCATION),
/* harmony export */   "createEducation": () => (/* binding */ createEducation),
/* harmony export */   "deleteEducation": () => (/* binding */ deleteEducation),
/* harmony export */   "fetchEducations": () => (/* binding */ fetchEducations),
/* harmony export */   "updateEducation": () => (/* binding */ updateEducation)
/* harmony export */ });
/* harmony import */ var _util_education_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/education_api_util */ "./frontend/util/education_api_util.js");

var RECEIVE_EDUCATIONS = "RECEIVE_EDUCATIONS";
var RECEIVE_EDUCATION = "RECEIVE_EDUCATION";
var REMOVE_EDUCATION = "REMOVE_EDUCATION";

var receiveEducations = function receiveEducations(educations) {
  return {
    type: RECEIVE_EDUCATIONS,
    educations: educations
  };
};

var receiveEducation = function receiveEducation(education) {
  return {
    type: RECEIVE_EDUCATION,
    education: education
  };
};

var removeEducation = function removeEducation(education) {
  return {
    type: REMOVE_EDUCATION,
    education: education
  };
};

var createEducation = function createEducation(education) {
  return function (dispatch) {
    return _util_education_api_util__WEBPACK_IMPORTED_MODULE_0__.createEducation(education).then(function (education) {
      return dispatch(receiveEducation(education));
    });
  };
};
var fetchEducations = function fetchEducations(educations) {
  return function (dispatch) {
    return _util_education_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchEducations(educations).then(function (educations) {
      return dispatch(receiveEducations(educations));
    });
  };
};
var updateEducation = function updateEducation(education) {
  return function (dispatch) {
    return _util_education_api_util__WEBPACK_IMPORTED_MODULE_0__.updateEducation(education).then(function (education) {
      return dispatch(receiveEducation(education));
    });
  };
};
var deleteEducation = function deleteEducation(education) {
  return function (dispatch) {
    return _util_education_api_util__WEBPACK_IMPORTED_MODULE_0__.deleteEducation(education).then(function () {
      return dispatch(removeEducation(education));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/experience_actions.js":
/*!************************************************!*\
  !*** ./frontend/actions/experience_actions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECEIVE_EXPERIENCE": () => (/* binding */ RECEIVE_EXPERIENCE),
/* harmony export */   "RECEIVE_EXPERIENCES": () => (/* binding */ RECEIVE_EXPERIENCES),
/* harmony export */   "REMOVE_EXPERIENCE": () => (/* binding */ REMOVE_EXPERIENCE),
/* harmony export */   "createExperience": () => (/* binding */ createExperience),
/* harmony export */   "deleteExperience": () => (/* binding */ deleteExperience),
/* harmony export */   "fetchExperiences": () => (/* binding */ fetchExperiences),
/* harmony export */   "updateExperience": () => (/* binding */ updateExperience)
/* harmony export */ });
/* harmony import */ var _util_experience_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/experience_api_util */ "./frontend/util/experience_api_util.js");

var RECEIVE_EXPERIENCES = "RECEIVE_EXPERIENCES";
var RECEIVE_EXPERIENCE = "RECEIVE_EXPERIENCE";
var REMOVE_EXPERIENCE = "REMOVE_EXPERIENCE";

var receiveExperiences = function receiveExperiences(experiences) {
  return {
    type: RECEIVE_EXPERIENCES,
    experiences: experiences
  };
};

var receiveExperience = function receiveExperience(experience) {
  return {
    type: RECEIVE_EXPERIENCE,
    experience: experience
  };
};

var removeExperience = function removeExperience(experience) {
  return {
    type: REMOVE_EXPERIENCE,
    experience: experience
  };
};

var updateExperience = function updateExperience(experience) {
  return function (dispatch) {
    return _util_experience_api_util__WEBPACK_IMPORTED_MODULE_0__.updateExperience(experience).then(function (experience) {
      return dispatch(receiveExperience(experience));
    });
  };
};
var createExperience = function createExperience(experience) {
  return function (dispatch) {
    return _util_experience_api_util__WEBPACK_IMPORTED_MODULE_0__.createExperience(experience).then(function (experience) {
      return dispatch(receiveExperience(experience));
    });
  };
};
var deleteExperience = function deleteExperience(experience) {
  return function (dispatch) {
    return _util_experience_api_util__WEBPACK_IMPORTED_MODULE_0__.deleteExperience(experience).then(function () {
      return dispatch(removeExperience(experience));
    });
  };
};
var fetchExperiences = function fetchExperiences(experiences) {
  return function (dispatch) {
    return _util_experience_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchExperiences(experiences).then(function (experiences) {
      return dispatch(receiveExperiences(experiences));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/like_actions.js":
/*!******************************************!*\
  !*** ./frontend/actions/like_actions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECEIVE_LIKE": () => (/* binding */ RECEIVE_LIKE),
/* harmony export */   "RECEIVE_LIKES": () => (/* binding */ RECEIVE_LIKES),
/* harmony export */   "REMOVE_LIKE": () => (/* binding */ REMOVE_LIKE),
/* harmony export */   "REMOVE_LIKES": () => (/* binding */ REMOVE_LIKES),
/* harmony export */   "createLike": () => (/* binding */ createLike),
/* harmony export */   "deleteLike": () => (/* binding */ deleteLike),
/* harmony export */   "deleteLikes": () => (/* binding */ deleteLikes),
/* harmony export */   "fetchLikes": () => (/* binding */ fetchLikes),
/* harmony export */   "removeLikes": () => (/* binding */ removeLikes)
/* harmony export */ });
/* harmony import */ var _util_like_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/like_api_util */ "./frontend/util/like_api_util.js");

var RECEIVE_LIKES = "RECEIVE_LIKES";
var RECEIVE_LIKE = "RECEIVE_LIKE";
var REMOVE_LIKES = "REMOVE_LIKES";
var REMOVE_LIKE = "REMOVE_LIKE";

var receiveLikes = function receiveLikes(likes) {
  return {
    type: RECEIVE_LIKES,
    likes: likes
  };
};

var receiveLike = function receiveLike(like) {
  return {
    type: RECEIVE_LIKE,
    like: like
  };
};

var removeLike = function removeLike(like) {
  return {
    type: REMOVE_LIKE,
    like: like
  };
};

var removeLikes = function removeLikes() {
  return {
    type: REMOVE_LIKES
  };
};
var deleteLikes = function deleteLikes() {
  return function (dispatch) {
    return dispatch(removeLikes());
  };
};
var createLike = function createLike(like) {
  return function (dispatch) {
    return _util_like_api_util__WEBPACK_IMPORTED_MODULE_0__.createLike(like).then(function (like) {
      return dispatch(receiveLike(like));
    });
  };
};
var fetchLikes = function fetchLikes(likes) {
  return function (dispatch) {
    return _util_like_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchLikes(likes).then(function (likes) {
      return dispatch(receiveLikes(likes));
    });
  };
};
var deleteLike = function deleteLike(like) {
  return function (dispatch) {
    return _util_like_api_util__WEBPACK_IMPORTED_MODULE_0__.deleteLike(like).then(function () {
      return dispatch(removeLike(like));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/post_actions.js":
/*!******************************************!*\
  !*** ./frontend/actions/post_actions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECEIVE_POST": () => (/* binding */ RECEIVE_POST),
/* harmony export */   "RECEIVE_POSTS": () => (/* binding */ RECEIVE_POSTS),
/* harmony export */   "REMOVE_POST": () => (/* binding */ REMOVE_POST),
/* harmony export */   "REMOVE_POSTS": () => (/* binding */ REMOVE_POSTS),
/* harmony export */   "createPost": () => (/* binding */ createPost),
/* harmony export */   "deletePost": () => (/* binding */ deletePost),
/* harmony export */   "deletePosts": () => (/* binding */ deletePosts),
/* harmony export */   "fetchPosts": () => (/* binding */ fetchPosts),
/* harmony export */   "receivePost": () => (/* binding */ receivePost),
/* harmony export */   "receivePosts": () => (/* binding */ receivePosts),
/* harmony export */   "removePost": () => (/* binding */ removePost),
/* harmony export */   "removePosts": () => (/* binding */ removePosts),
/* harmony export */   "updatePost": () => (/* binding */ updatePost)
/* harmony export */ });
/* harmony import */ var _util_post_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/post_api_util */ "./frontend/util/post_api_util.js");

var RECEIVE_POSTS = "RECEIVE_POSTS";
var RECEIVE_POST = "RECEIVE_POST";
var REMOVE_POSTS = "REMOVE_POSTS";
var REMOVE_POST = "REMOVE_POST";
var receivePosts = function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts
  };
};
var receivePost = function receivePost(post) {
  return {
    type: RECEIVE_POST,
    post: post
  };
};
var removePosts = function removePosts() {
  return {
    type: REMOVE_POSTS
  };
};
var removePost = function removePost(post) {
  return {
    type: REMOVE_POST,
    post: post
  };
};
var fetchPosts = function fetchPosts(posts) {
  return function (dispatch) {
    return _util_post_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchPosts(posts).then(function (posts) {
      return dispatch(receivePosts(posts));
    });
  };
};
var createPost = function createPost(post) {
  return function (dispatch) {
    return _util_post_api_util__WEBPACK_IMPORTED_MODULE_0__.createPost(post).then(function (post) {
      return dispatch(receivePost(post));
    });
  };
};
var deletePost = function deletePost(post) {
  return function (dispatch) {
    return _util_post_api_util__WEBPACK_IMPORTED_MODULE_0__.deletePost(post).then(function () {
      return dispatch(removePost(post));
    });
  };
};
var updatePost = function updatePost(post) {
  return function (dispatch) {
    return _util_post_api_util__WEBPACK_IMPORTED_MODULE_0__.updatePost(post).then(function (post) {
      return dispatch(receivePost(post));
    });
  };
};
var deletePosts = function deletePosts() {
  return function (dispatch) {
    return dispatch(removePosts());
  };
};

/***/ }),

/***/ "./frontend/actions/session_actions.js":
/*!*********************************************!*\
  !*** ./frontend/actions/session_actions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGOUT_USER": () => (/* binding */ LOGOUT_USER),
/* harmony export */   "RECEIVE_ERRORS": () => (/* binding */ RECEIVE_ERRORS),
/* harmony export */   "RECEIVE_USER": () => (/* binding */ RECEIVE_USER),
/* harmony export */   "RECEIVE_USERS": () => (/* binding */ RECEIVE_USERS),
/* harmony export */   "fetchUsers": () => (/* binding */ fetchUsers),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "signup": () => (/* binding */ signup),
/* harmony export */   "updateUser": () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/session_api_util */ "./frontend/util/session_api_util.js");

var RECEIVE_USERS = "RECEIVE_USERS";
var RECEIVE_USER = "RECEIVE_USER";
var LOGOUT_USER = "LOGOUT_USER";
var RECEIVE_ERRORS = "RECEIVE_ERRORS";

var receiveUsers = function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users: users
  };
};

var receiveUser = function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user: user
  };
};

var logoutUser = function logoutUser() {
  return {
    type: LOGOUT_USER
  };
};

var receiveErrors = function receiveErrors(errors) {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

var login = function login(user) {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.login(user).then(function (user) {
      return dispatch(receiveUser(user));
    }), function (errors) {
      return dispatch(receiveErrors(errors));
    };
  };
};
var logout = function logout() {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.logout().then(function () {
      return dispatch(logoutUser());
    });
  };
};
var signup = function signup(user) {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.signup(user).then(function (user) {
      return dispatch(receiveUser(user));
    }), function (errors) {
      return dispatch(receiveErrors(errors));
    };
  };
};
var fetchUsers = function fetchUsers(users) {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchUsers(users).then(function (users) {
      return dispatch(receiveUsers(users));
    });
  };
};
var updateUser = function updateUser(user) {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.updateUser(user).then(function (user) {
      return dispatch(receiveUser(user));
    });
  };
};

/***/ }),

/***/ "./frontend/components/app.jsx":
/*!*************************************!*\
  !*** ./frontend/components/app.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _splash_splash_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash/splash_container */ "./frontend/components/splash/splash_container.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _session_form_signup_form_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session_form/signup_form_container */ "./frontend/components/session_form/signup_form_container.jsx");
/* harmony import */ var _session_form_login_form_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session_form/login_form_container */ "./frontend/components/session_form/login_form_container.jsx");
/* harmony import */ var _feed_feed_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feed/feed_container */ "./frontend/components/feed/feed_container.jsx");
/* harmony import */ var _users_user_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/user_container */ "./frontend/components/users/user_container.jsx");
/* harmony import */ var _network_network_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network/network_container */ "./frontend/components/network/network_container.jsx");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/route_util */ "./frontend/util/route_util.jsx");










var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_7__.AuthRoute, {
    exact: true,
    path: "/",
    component: _splash_splash_container__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_7__.AuthRoute, {
    exact: true,
    path: "/login",
    component: _session_form_login_form_container__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_7__.AuthRoute, {
    exact: true,
    path: "/signup",
    component: _session_form_signup_form_container__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_7__.ProtectedRoute, {
    exact: true,
    path: "/feed",
    component: _feed_feed_container__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_7__.ProtectedRoute, {
    exact: true,
    path: "/network",
    component: _network_network_container__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_7__.ProtectedRoute, {
    exact: true,
    path: "/users/:userId",
    component: _users_user_container__WEBPACK_IMPORTED_MODULE_5__["default"]
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./frontend/components/comments/comment_form.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/comments/comment_form.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CommentForm = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentForm, _React$Component);

  var _super = _createSuper(CommentForm);

  function CommentForm(props) {
    var _this;

    _classCallCheck(this, CommentForm);

    _this = _super.call(this, props);
    _this.state = {
      user_id: props.user.id,
      post_id: props.post.id,
      body: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CommentForm, [{
    key: "update",
    value: function update(e) {
      this.setState({
        body: e.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.createComment(this.state);
      this.setState({
        body: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "comment-form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "comment-form-user-image"
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        className: "comment-form",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: this.state.body,
        placeholder: "Add a comment...",
        onChange: this.update
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "create-post-btn",
        type: "submit"
      }, "Post")));
    }
  }]);

  return CommentForm;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentForm);

/***/ }),

/***/ "./frontend/components/comments/comment_form_container.jsx":
/*!*****************************************************************!*\
  !*** ./frontend/components/comments/comment_form_container.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/comment_actions */ "./frontend/actions/comment_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _comment_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment_form */ "./frontend/components/comments/comment_form.jsx");




var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.entities.users[state.session.id]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createComment: function createComment(comment) {
      return dispatch((0,_actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__.createComment)(comment));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_comment_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/comments/comment_index.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/comments/comment_index.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comment_index_item_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment_index_item_container */ "./frontend/components/comments/comment_index_item_container.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CommentIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentIndex, _React$Component);

  var _super = _createSuper(CommentIndex);

  function CommentIndex(props) {
    _classCallCheck(this, CommentIndex);

    return _super.call(this, props);
  }

  _createClass(CommentIndex, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "comment-index"
      }, Object.values(this.props.comments).map(function (comment, i) {
        return comment.post_id === _this.props.post.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_comment_index_item_container__WEBPACK_IMPORTED_MODULE_0__["default"], {
          comment: comment,
          post: _this.props.post,
          key: comment + i
        }) : "";
      }));
    }
  }]);

  return CommentIndex;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentIndex);

/***/ }),

/***/ "./frontend/components/comments/comment_index_container.jsx":
/*!******************************************************************!*\
  !*** ./frontend/components/comments/comment_index_container.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/comment_actions */ "./frontend/actions/comment_actions.js");
/* harmony import */ var _comment_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment_index */ "./frontend/components/comments/comment_index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    comments: state.entities.comments
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchComments: function fetchComments() {
      return dispatch((0,_actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__.fetchComments)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(_comment_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/comments/comment_index_item.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/comments/comment_index_item.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var CommentIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentIndexItem, _React$Component);

  var _super = _createSuper(CommentIndexItem);

  function CommentIndexItem(props) {
    var _this;

    _classCallCheck(this, CommentIndexItem);

    _this = _super.call(this, props);
    _this.state = {
      likes: [],
      is_liked: false,
      action_modal_hidden: true,
      update_modal_hidden: true,
      comment: _this.props.comment
    };
    _this.toggleUpdateModal = _this.toggleUpdateModal.bind(_assertThisInitialized(_this));
    _this.toggleActionModal = _this.toggleActionModal.bind(_assertThisInitialized(_this));
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    _this.handleUpdate = _this.handleUpdate.bind(_assertThisInitialized(_this));
    _this.updateModal = _this.updateModal.bind(_assertThisInitialized(_this));
    _this.actionModal = _this.actionModal.bind(_assertThisInitialized(_this));
    _this.updateBody = _this.updateBody.bind(_assertThisInitialized(_this));
    _this.handleLike = _this.handleLike.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CommentIndexItem, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(prevProps.likes, this.props.likes)) {
        this.setState({
          likes: Object.values(this.props.likes).filter(function (like) {
            return like.likeable_id === _this2.props.comment.id;
          })
        });
      } else if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(prevState.likes, this.state.likes)) {
        this.setState({
          likes: this.state.likes,
          is_liked: Object.values(this.props.likes).filter(function (like) {
            return _this2.props.current_user.id === like.user_id && _this2.props.comment.id === like.likeable_id && like.likeable_type === 'Comment';
          }).length > 0
        });
      }
    }
  }, {
    key: "updateBody",
    value: function updateBody(e) {
      this.setState({
        comment: {
          id: this.props.comment.id,
          parent_comment_id: this.props.parent_comment_id,
          user_id: this.props.comment.user_id,
          post_id: this.props.post.id,
          body: e.target.value
        }
      });
    }
  }, {
    key: "handleLike",
    value: function handleLike() {
      var _this3 = this;

      var likes = Object.values(this.props.likes).filter(function (like) {
        return like.likeable_id === _this3.props.comment.id && like.likeable_type === 'Comment' && like.user_id === _this3.props.current_user.id;
      });

      if (likes.length > 0) {
        this.setState({
          is_liked: false
        });
        this.props.deleteLike(likes[0]);
      } else {
        this.setState({
          is_liked: true
        });
        this.props.createLike({
          user_id: this.props.current_user.id,
          likeable_id: this.props.comment.id,
          likeable_type: 'Comment'
        });
      }
    }
  }, {
    key: "handleDelete",
    value: function handleDelete() {
      this.setState({
        action_modal_hidden: true
      });
      this.props.deleteComment(this.props.comment);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate(e) {
      e.preventDefault();
      this.setState({
        update_modal_hidden: true
      });
      this.props.updateComment(this.state.comment);
    }
  }, {
    key: "toggleUpdateModal",
    value: function toggleUpdateModal() {
      this.setState({
        update_modal_hidden: !this.state.update_modal_hidden,
        action_modal_hidden: true
      });
    }
  }, {
    key: "toggleActionModal",
    value: function toggleActionModal() {
      this.setState({
        action_modal_hidden: !this.state.action_modal_hidden
      });
    }
  }, {
    key: "updateModal",
    value: function updateModal() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
        className: "create-post-form",
        onSubmit: this.handleUpdate
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
        type: "text",
        onChange: this.updateBody,
        value: this.state.comment.body
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "update-comment-btns"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
        className: "create-post-btn",
        type: "submit"
      }, "Save Changes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
        className: "cancel-update-post",
        onClick: this.toggleUpdateModal
      }, "Cancel"))));
    }
  }, {
    key: "actionModal",
    value: function actionModal() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "post-actions-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "edit-post-action",
        onClick: this.toggleUpdateModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPen
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Edit Comment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "delete-post-action",
        onClick: this.handleDelete
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrashCan
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Delete Comment")));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comments"
      }, this.state.action_modal_hidden ? "" : this.actionModal(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "profile-pic"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "comment-user-image"
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-photo"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-container-a"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-message-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-message-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-header-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "comment-message-header-top-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-message-header-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "comment-user-name"
      }, "".concat(this.props.user.first_name, " ").concat(this.props.user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "comment-user-pronouns"
      }, "(".concat(this.props.user.pronouns, ")")), this.props.user.id === this.props.post.user_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "comment-author"
      }, "Author") : "")), this.props.current_user.id === this.props.comment.user_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "post-actions",
        onClick: this.toggleActionModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEllipsis
      })) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-message-header-bottom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "comment-user-headline"
      }, "".concat(this.props.user.headline)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-message"
      }, this.state.update_modal_hidden ? this.props.comment.body : this.updateModal())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-responses"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: Object.values(this.props.likes).filter(function (like) {
          return like.likeable_id === _this4.props.comment.id && like.user_id === _this4.props.current_user.id && like.likeable_type === 'Comment';
        }).length > 0 ? "comment-like comment-liked" : "comment-like"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "comment-like",
        onClick: function onClick() {
          return _this4.handleLike();
        }
      }, "Like"), Object.values(this.props.likes).filter(function (like) {
        return like.likeable_id === _this4.props.comment.id && like.likeable_type === 'Comment';
      }).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-like-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        className: "fa-comment-like",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faThumbsUp
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, Object.values(this.props.likes).filter(function (like) {
        return like.likeable_id === _this4.props.comment.id && like.likeable_type === 'Comment';
      }).length)) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-response-separator"
      }, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "comment-reply"
      }, "Reply")))));
    }
  }]);

  return CommentIndexItem;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentIndexItem);

/***/ }),

/***/ "./frontend/components/comments/comment_index_item_container.jsx":
/*!***********************************************************************!*\
  !*** ./frontend/components/comments/comment_index_item_container.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/comment_actions */ "./frontend/actions/comment_actions.js");
/* harmony import */ var _actions_like_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/like_actions */ "./frontend/actions/like_actions.js");
/* harmony import */ var _comment_index_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment_index_item */ "./frontend/components/comments/comment_index_item.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    current_user: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.comment.user_id],
    likes: state.entities.likes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteComment: function deleteComment(comment) {
      return dispatch((0,_actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__.deleteComment)(comment));
    },
    updateComment: function updateComment(comment) {
      return dispatch((0,_actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__.updateComment)(comment));
    },
    deleteLike: function deleteLike(like) {
      return dispatch((0,_actions_like_actions__WEBPACK_IMPORTED_MODULE_1__.deleteLike)(like));
    },
    createLike: function createLike(like) {
      return dispatch((0,_actions_like_actions__WEBPACK_IMPORTED_MODULE_1__.createLike)(like));
    },
    fetchLikes: function fetchLikes() {
      return dispatch((0,_actions_like_actions__WEBPACK_IMPORTED_MODULE_1__.fetchLikes)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(_comment_index_item__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/educations/create_education_form.jsx":
/*!******************************************************************!*\
  !*** ./frontend/components/educations/create_education_form.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';




var CreateEducationForm = /*#__PURE__*/function (_React$Component) {
  _inherits(CreateEducationForm, _React$Component);

  var _super = _createSuper(CreateEducationForm);

  function CreateEducationForm(props) {
    var _this;

    _classCallCheck(this, CreateEducationForm);

    _this = _super.call(this, props);
    _this.state = {
      school: '',
      field: '',
      start_date: '',
      end_date: '',
      activities: '',
      description: '',
      degree: '',
      grade: 0
    }, _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.renderForm = _this.renderForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CreateEducationForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.createEducation(this.state);
      this.setState({
        school: '',
        field: '',
        start_date: '',
        end_date: '',
        activities: '',
        description: '',
        grade: 0
      });
      this.props.toggleAdding();
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "overlay",
        onClick: this.props.toggleAdding
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "create-experience-title"
      }, "Add Education"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "close"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        onClick: this.props.toggleAdding,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faXmark
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "create-exp-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name",
        id: "input-field-required"
      }, "* Indicates required field"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field",
        id: "first-child"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "School*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Hamilton College",
        value: this.state.school,
        onChange: this.update('school'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Degree"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Bachelor's",
        value: this.state.degree,
        onChange: this.update('degree'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Field of study"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Computer Science",
        value: this.state.field,
        onChange: this.update('field')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field input-field-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Start date*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "date",
        value: this.state.start_date,
        onChange: this.update('start_date'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field input-field-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "End date*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "date",
        value: this.state.end_date,
        onChange: this.update('end_date')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Grade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: 3.7",
        value: this.state.grade,
        onChange: this.update('grade')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "submit-experience"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "submit-experience-btn",
        type: "submit"
      }, "Save")))));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.adding && this.renderForm();
    }
  }]);

  return CreateEducationForm;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateEducationForm);

/***/ }),

/***/ "./frontend/components/educations/edit_education_form.jsx":
/*!****************************************************************!*\
  !*** ./frontend/components/educations/edit_education_form.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';




var EditEducationForm = /*#__PURE__*/function (_React$Component) {
  _inherits(EditEducationForm, _React$Component);

  var _super = _createSuper(EditEducationForm);

  function EditEducationForm(props) {
    var _this;

    _classCallCheck(this, EditEducationForm);

    _this = _super.call(this, props);
    _this.state = {
      id: _this.props.education.id,
      school: _this.props.education.school,
      field: _this.props.education.field,
      start_date: _this.props.education.start_date,
      end_date: _this.props.education.end_date,
      activities: _this.props.education.activities,
      description: _this.props.education.description,
      grade: _this.props.education.grade,
      degree: _this.props.education.degree
    }, _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.renderForm = _this.renderForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EditEducationForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.updateEducation(this.state);
      this.props.toggleEditing();
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "overlay",
        onClick: this.props.toggleEditing
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "create-experience-title"
      }, "Edit Education"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "close"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        onClick: this.props.toggleEditing,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faXmark
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "create-exp-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name",
        id: "input-field-required"
      }, "* Indicates required field"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field",
        id: "first-child"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "School*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Hamilton College",
        value: this.state.school,
        onChange: this.update('school'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Degree"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Bachelor's",
        value: this.state.degree,
        onChange: this.update('degree'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Field of study"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Computer Science",
        value: this.state.field,
        onChange: this.update('field')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field input-field-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Start date*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "date",
        value: this.state.start_date,
        onChange: this.update('start_date'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field input-field-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "End date*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "date",
        value: this.state.end_date,
        onChange: this.update('end_date')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Grade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "e.g. 3.7",
        value: this.state.grade,
        onChange: this.update('grade'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "submit-experience"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "submit-experience-btn",
        type: "submit"
      }, "Save")))));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.editing && this.renderForm();
    }
  }]);

  return EditEducationForm;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditEducationForm);

/***/ }),

/***/ "./frontend/components/educations/education_index.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/educations/education_index.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _education_index_item_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education_index_item_container */ "./frontend/components/educations/education_index_item_container.jsx");
/* harmony import */ var _create_education_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_education_form */ "./frontend/components/educations/create_education_form.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




 // import CreateIcon from '@mui/icons-material/Create';
// import AddIcon from '@mui/icons-material/Add';




var EducationIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(EducationIndex, _React$Component);

  var _super = _createSuper(EducationIndex);

  function EducationIndex(props) {
    var _this;

    _classCallCheck(this, EducationIndex);

    _this = _super.call(this, props);
    _this.state = {
      current_user: _this.props.current_user,
      user: _this.props.user,
      educations: [],
      adding_education: false,
      editing_education: false
    };
    _this.toggleEditing = _this.toggleEditing.bind(_assertThisInitialized(_this));
    _this.toggleAdding = _this.toggleAdding.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EducationIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchEducations();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default()(this.props.educations, prevProps.educations)) {
        this.setState({
          educations: Object.values(this.props.educations).filter(function (education) {
            return education.user_id === _this2.props.user.id;
          })
        });
      }
    }
  }, {
    key: "toggleEditing",
    value: function toggleEditing() {
      this.setState({
        editing_education: !this.state.editing_education
      });
    }
  }, {
    key: "toggleAdding",
    value: function toggleAdding() {
      this.setState({
        adding_education: !this.state.adding_education
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_create_education_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
        createEducation: this.props.createEducation,
        adding: this.state.adding_education,
        toggleAdding: function toggleAdding() {
          return _this3.toggleAdding();
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "experiences-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "experiences-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
        className: "experiences-title"
      }, "Education"), this.props.user.id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "experience-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "experience-action",
        onClick: this.toggleAdding
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPlus
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "experience-action",
        onClick: this.toggleEditing
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPen
      }))) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("ul", null, Object.values(this.props.educations).map(function (edu, i) {
        if (_this3.props.user.id === edu.user_id) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_education_index_item_container__WEBPACK_IMPORTED_MODULE_0__["default"], {
          education: edu,
          key: edu + i,
          editing: _this3.state.editing_education
        });
      }))));
    }
  }]);

  return EducationIndex;
}((react__WEBPACK_IMPORTED_MODULE_4___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EducationIndex);

/***/ }),

/***/ "./frontend/components/educations/education_index_container.jsx":
/*!**********************************************************************!*\
  !*** ./frontend/components/educations/education_index_container.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _education_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education_index */ "./frontend/components/educations/education_index.jsx");
/* harmony import */ var _actions_education_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/education_actions */ "./frontend/actions/education_actions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    educations: state.entities.educations
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchEducations: function fetchEducations() {
      return dispatch((0,_actions_education_actions__WEBPACK_IMPORTED_MODULE_2__.fetchEducations)());
    },
    createEducation: function createEducation(education) {
      return dispatch((0,_actions_education_actions__WEBPACK_IMPORTED_MODULE_2__.createEducation)(education));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_education_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/educations/education_index_item.jsx":
/*!*****************************************************************!*\
  !*** ./frontend/components/educations/education_index_item.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_education_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_education_form */ "./frontend/components/educations/edit_education_form.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
// import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// import CreateIcon from '@mui/icons-material/Create';





var EducationIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(EducationIndexItem, _React$Component);

  var _super = _createSuper(EducationIndexItem);

  function EducationIndexItem(props) {
    var _this;

    _classCallCheck(this, EducationIndexItem);

    _this = _super.call(this, props);
    _this.calculateDate = _this.calculateDate.bind(_assertThisInitialized(_this));
    _this.state = {
      editing_education: false,
      action_modal_hidden: true
    };
    _this.toggleEditing = _this.toggleEditing.bind(_assertThisInitialized(_this));
    _this.toggleActionModal = _this.toggleActionModal.bind(_assertThisInitialized(_this));
    _this.actionModal = _this.actionModal.bind(_assertThisInitialized(_this));
    _this.handleEdit = _this.handleEdit.bind(_assertThisInitialized(_this));
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EducationIndexItem, [{
    key: "toggleActionModal",
    value: function toggleActionModal() {
      this.setState({
        action_modal_hidden: !this.state.action_modal_hidden
      });
    }
  }, {
    key: "actionModal",
    value: function actionModal() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "post-actions-modal",
        id: "experience-actions-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "edit-post-action",
        onClick: this.handleEdit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPen
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Edit Education")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "delete-post-action",
        onClick: this.handleDelete
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrashCan
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Delete Education")));
    }
  }, {
    key: "toggleEditing",
    value: function toggleEditing() {
      this.setState({
        editing_education: !this.state.editing_education
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit() {
      this.setState({
        action_modal_hidden: true
      });
      this.toggleEditing();
    }
  }, {
    key: "handleDelete",
    value: function handleDelete() {
      this.setState({
        action_modal_hidden: true
      });
      this.props.deleteEducation({
        id: this.props.education.id
      });
    }
  }, {
    key: "calculateDate",
    value: function calculateDate(date) {
      var newDate = date.split("-");
      var months = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "employment-date"
      }, "".concat(months[parseInt(newDate[1])], " ").concat(parseInt(newDate[0])));
    }
  }, {
    key: "calculateDuration",
    value: function calculateDuration(startDate, endDate) {
      startDate = startDate.split("-").map(function (num) {
        return parseInt(num);
      });
      endDate = endDate.split("-").map(function (num) {
        return parseInt(num);
      });
      var years = endDate[0] - startDate[0];
      var months = endDate[1] - startDate[1]; // if (months < 0) 
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-item-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_edit_education_form__WEBPACK_IMPORTED_MODULE_0__["default"], {
        editing: this.state.editing_education,
        education: this.props.education,
        toggleEditing: function toggleEditing() {
          return _this2.toggleEditing();
        },
        updateEducation: this.props.updateEducation
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-item-container-a"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-item",
        id: "education-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "company-photo",
        id: "education-photo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
        src: "https://i.postimg.cc/pdtrHFTQ/image.png",
        alt: "company-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-item-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-item-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "company-title"
      }, "".concat(this.props.education.school)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-actions-modal-container"
      }, this.props.editing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "create-icon-div",
        onClick: this.toggleActionModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEllipsis
      })) : "", this.state.action_modal_hidden ? "" : this.actionModal())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "job"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "job-title"
      }, "".concat(this.props.education.field)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "job-separator"
      }, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "employment-type"
      }, "".concat(this.props.education.degree))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "employment-duration"
      }, this.calculateDate(this.props.education.start_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "employment-duration-separator"
      }, " - "), Boolean(this.props.education.end_date) ? this.calculateDate(this.props.education.end_date) : "Present"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "education-grade"
      }, "Grade: ".concat(this.props.education.grade))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "experiences-separator"
      }));
    }
  }]);

  return EducationIndexItem;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EducationIndexItem);

/***/ }),

/***/ "./frontend/components/educations/education_index_item_container.jsx":
/*!***************************************************************************!*\
  !*** ./frontend/components/educations/education_index_item_container.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _education_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education_index_item */ "./frontend/components/educations/education_index_item.jsx");
/* harmony import */ var _actions_education_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/education_actions */ "./frontend/actions/education_actions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateEducation: function updateEducation(education) {
      return dispatch((0,_actions_education_actions__WEBPACK_IMPORTED_MODULE_2__.updateEducation)(education));
    },
    deleteEducation: function deleteEducation(education) {
      return dispatch((0,_actions_education_actions__WEBPACK_IMPORTED_MODULE_2__.deleteEducation)(education));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_education_index_item__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/experiences/create_experience_form.jsx":
/*!********************************************************************!*\
  !*** ./frontend/components/experiences/create_experience_form.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';




var CreateExperienceForm = /*#__PURE__*/function (_React$Component) {
  _inherits(CreateExperienceForm, _React$Component);

  var _super = _createSuper(CreateExperienceForm);

  function CreateExperienceForm(props) {
    var _this;

    _classCallCheck(this, CreateExperienceForm);

    _this = _super.call(this, props);
    _this.state = {
      title: '',
      company: '',
      start_date: '',
      end_date: '',
      location: '',
      employment_type: '',
      current_job: true
    }, _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.renderForm = _this.renderForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CreateExperienceForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.createExperience(this.state);
      this.setState({
        title: '',
        company: '',
        start_date: '',
        end_date: '',
        location: '',
        employment_type: '',
        current_job: true
      });
      this.props.toggleAdding();
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "overlay",
        onClick: this.props.toggleAdding
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "create-experience-title"
      }, "Add Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "close"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        onClick: this.props.toggleAdding,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faXmark
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "create-exp-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name",
        id: "input-field-required"
      }, "* Indicates required field"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field",
        id: "first-child"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Title*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Retail Sales Manager",
        value: this.state.title,
        onChange: this.update('title'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Employment type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
        value: "Please select",
        onChange: this.update('employment_type')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Full-Time"
      }, "Full-Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Part-Time"
      }, "Part-Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Self-employed"
      }, "Self-employed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Other"
      }, "Other"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Company name*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Microsoft",
        value: this.state.company,
        onChange: this.update('company'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: New York, United States",
        value: this.state.location,
        onChange: this.update('location')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field input-field-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Start date*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "date",
        value: this.state.start_date,
        onChange: this.update('start_date'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field input-field-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "End date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "date",
        value: this.state.end_date,
        onChange: this.update('end_date')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "submit-experience"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "submit-experience-btn",
        type: "submit"
      }, "Save")))));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.adding && this.renderForm();
    }
  }]);

  return CreateExperienceForm;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateExperienceForm);

/***/ }),

/***/ "./frontend/components/experiences/edit_experience_form.jsx":
/*!******************************************************************!*\
  !*** ./frontend/components/experiences/edit_experience_form.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';




var EditExperienceForm = /*#__PURE__*/function (_React$Component) {
  _inherits(EditExperienceForm, _React$Component);

  var _super = _createSuper(EditExperienceForm);

  function EditExperienceForm(props) {
    var _this;

    _classCallCheck(this, EditExperienceForm);

    _this = _super.call(this, props);
    _this.state = {
      id: _this.props.experience.id,
      title: _this.props.experience.title,
      company: _this.props.experience.company,
      start_date: _this.props.experience.start_date,
      end_date: _this.props.experience.end_date,
      location: _this.props.experience.location,
      employment_type: _this.props.experience.employment_type,
      current_job: true
    }, _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.renderForm = _this.renderForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EditExperienceForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.updateExperience(this.state);
      this.props.toggleEditing();
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "overlay",
        onClick: this.props.toggleEditing
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "create-experience-title"
      }, "Edit Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "close"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        onClick: this.props.toggleEditing,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faXmark
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "create-exp-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name",
        id: "input-field-required"
      }, "* Indicates required field"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field",
        id: "first-child"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Title*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Retail Sales Manager",
        value: this.state.title,
        onChange: this.update('title'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Employment type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
        value: "Please select",
        onChange: this.update('employment_type')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Full-Time"
      }, "Full-Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Part-Time"
      }, "Part-Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Self-employed"
      }, "Self-employed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Other"
      }, "Other"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Company name*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Microsoft",
        value: this.state.company,
        onChange: this.update('company'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: New York, United States",
        value: this.state.location,
        onChange: this.update('location')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field input-field-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Start date*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "date",
        value: this.state.start_date,
        onChange: this.update('start_date'),
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field input-field-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "End date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "date",
        value: this.state.end_date,
        onChange: this.update('end_date')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "submit-experience"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "submit-experience-btn",
        type: "submit"
      }, "Save")))));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.editing && this.renderForm();
    }
  }]);

  return EditExperienceForm;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditExperienceForm);

/***/ }),

/***/ "./frontend/components/experiences/experience_index.jsx":
/*!**************************************************************!*\
  !*** ./frontend/components/experiences/experience_index.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _experience_index_item_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience_index_item_container */ "./frontend/components/experiences/experience_index_item_container.jsx");
/* harmony import */ var _create_experience_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_experience_form */ "./frontend/components/experiences/create_experience_form.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




 // import CreateIcon from '@mui/icons-material/Create';
// import AddIcon from '@mui/icons-material/Add';




var ExperienceIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(ExperienceIndex, _React$Component);

  var _super = _createSuper(ExperienceIndex);

  function ExperienceIndex(props) {
    var _this;

    _classCallCheck(this, ExperienceIndex);

    _this = _super.call(this, props);
    _this.state = {
      current_user: _this.props.current_user,
      user: _this.props.user,
      experiences: [],
      adding_experience: false,
      editing_experience: false
    };
    _this.toggleEditing = _this.toggleEditing.bind(_assertThisInitialized(_this));
    _this.toggleAdding = _this.toggleAdding.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ExperienceIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchExperiences();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default()(this.props.experiences, prevProps.experiences)) {
        this.setState({
          experiences: Object.values(this.props.experiences).filter(function (experience) {
            return experience.user_id === _this2.props.user.id;
          })
        });
      }
    }
  }, {
    key: "toggleEditing",
    value: function toggleEditing() {
      this.setState({
        editing_experience: !this.state.editing_experience
      });
    }
  }, {
    key: "toggleAdding",
    value: function toggleAdding() {
      this.setState({
        adding_experience: !this.state.adding_experience
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_create_experience_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
        createExperience: this.props.createExperience,
        adding: this.state.adding_experience,
        toggleAdding: function toggleAdding() {
          return _this3.toggleAdding();
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "experiences-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "experiences-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
        className: "experiences-title"
      }, "Experience"), this.props.user.id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "experience-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "experience-action"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
        onClick: this.toggleAdding,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPlus
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "experience-action"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
        onClick: this.toggleEditing,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPen
      }))) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("ul", null, Object.values(this.props.experiences).map(function (exp, i) {
        if (_this3.props.user.id === exp.user_id) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_experience_index_item_container__WEBPACK_IMPORTED_MODULE_0__["default"], {
          experience: exp,
          key: exp + i,
          editing: _this3.state.editing_experience
        });
      }))));
    }
  }]);

  return ExperienceIndex;
}((react__WEBPACK_IMPORTED_MODULE_4___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExperienceIndex);

/***/ }),

/***/ "./frontend/components/experiences/experience_index_container.jsx":
/*!************************************************************************!*\
  !*** ./frontend/components/experiences/experience_index_container.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_experience_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/experience_actions */ "./frontend/actions/experience_actions.js");
/* harmony import */ var _experience_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience_index */ "./frontend/components/experiences/experience_index.jsx");




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    current_user: state.entities.users[state.session.id],
    // user: state.entities.users[ownProps.match.params.userId],
    experiences: state.entities.experiences
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchExperiences: function fetchExperiences() {
      return dispatch((0,_actions_experience_actions__WEBPACK_IMPORTED_MODULE_1__.fetchExperiences)());
    },
    createExperience: function createExperience(experience) {
      return dispatch((0,_actions_experience_actions__WEBPACK_IMPORTED_MODULE_1__.createExperience)(experience));
    },
    updateExperience: function updateExperience(experience) {
      return dispatch((0,_actions_experience_actions__WEBPACK_IMPORTED_MODULE_1__.updateExperience)(experience));
    },
    deleteExperience: function deleteExperience(experience) {
      return dispatch((0,_actions_experience_actions__WEBPACK_IMPORTED_MODULE_1__.deleteExperience)(experience));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_experience_index__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/experiences/experience_index_item.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/experiences/experience_index_item.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_experience_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_experience_form */ "./frontend/components/experiences/edit_experience_form.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ExperienceIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(ExperienceIndexItem, _React$Component);

  var _super = _createSuper(ExperienceIndexItem);

  function ExperienceIndexItem(props) {
    var _this;

    _classCallCheck(this, ExperienceIndexItem);

    _this = _super.call(this, props);
    _this.calculateDate = _this.calculateDate.bind(_assertThisInitialized(_this));
    _this.state = {
      editing_experience: false,
      action_modal_hidden: true
    };
    _this.toggleEditing = _this.toggleEditing.bind(_assertThisInitialized(_this));
    _this.toggleActionModal = _this.toggleActionModal.bind(_assertThisInitialized(_this));
    _this.actionModal = _this.actionModal.bind(_assertThisInitialized(_this));
    _this.handleEdit = _this.handleEdit.bind(_assertThisInitialized(_this));
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ExperienceIndexItem, [{
    key: "toggleActionModal",
    value: function toggleActionModal() {
      this.setState({
        action_modal_hidden: !this.state.action_modal_hidden
      });
    }
  }, {
    key: "actionModal",
    value: function actionModal() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "post-actions-modal",
        id: "experience-actions-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "edit-post-action",
        onClick: this.handleEdit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPen
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Edit Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "delete-post-action",
        onClick: this.handleDelete
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrashCan
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Delete Experience")));
    }
  }, {
    key: "toggleEditing",
    value: function toggleEditing() {
      this.setState({
        editing_experience: !this.state.editing_experience
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit() {
      this.setState({
        action_modal_hidden: true
      });
      this.toggleEditing();
    }
  }, {
    key: "handleDelete",
    value: function handleDelete() {
      this.setState({
        action_modal_hidden: true
      });
      this.props.deleteExperience({
        id: this.props.experience.id
      });
    }
  }, {
    key: "calculateDate",
    value: function calculateDate(date) {
      var newDate = date.split("-");
      var months = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "employment-date"
      }, "".concat(months[parseInt(newDate[1])], " ").concat(parseInt(newDate[0])));
    }
  }, {
    key: "calculateDuration",
    value: function calculateDuration(startDate, endDate) {
      startDate = startDate.split("-").map(function (num) {
        return parseInt(num);
      });
      endDate = endDate.split("-").map(function (num) {
        return parseInt(num);
      });
      var years = endDate[0] - startDate[0];
      var months = endDate[1] - startDate[1]; // if (months < 0) 
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-item-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_edit_experience_form__WEBPACK_IMPORTED_MODULE_0__["default"], {
        editing: this.state.editing_experience,
        experience: this.props.experience,
        toggleEditing: function toggleEditing() {
          return _this2.toggleEditing();
        },
        updateExperience: this.props.updateExperience
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-item-container-a"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "company-photo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
        src: "https://i.postimg.cc/yNSmf9GF/image.png",
        alt: "company-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-item-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-item-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "company-title"
      }, "".concat(this.props.experience.company)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "experience-actions-modal-container"
      }, this.props.editing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "create-icon-div",
        onClick: this.toggleActionModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEllipsis
      })) : "", this.state.action_modal_hidden ? "" : this.actionModal())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "job"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "job-title"
      }, "".concat(this.props.experience.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "job-separator"
      }, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        id: "employment-type"
      }, "".concat(this.props.experience.employment_type))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "employment-duration"
      }, this.calculateDate(this.props.experience.start_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "employment-duration-separator"
      }, " - "), Boolean(this.props.experience.end_date) ? this.calculateDate(this.props.experience.end_date) : "Present"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "employment-location"
      }, "".concat(this.props.experience.location)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "employment-description"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "experiences-separator"
      }));
    }
  }]);

  return ExperienceIndexItem;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExperienceIndexItem);

/***/ }),

/***/ "./frontend/components/experiences/experience_index_item_container.jsx":
/*!*****************************************************************************!*\
  !*** ./frontend/components/experiences/experience_index_item_container.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _experience_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience_index_item */ "./frontend/components/experiences/experience_index_item.jsx");
/* harmony import */ var _actions_experience_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/experience_actions */ "./frontend/actions/experience_actions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateExperience: function updateExperience(experience) {
      return dispatch((0,_actions_experience_actions__WEBPACK_IMPORTED_MODULE_2__.updateExperience)(experience));
    },
    deleteExperience: function deleteExperience(experience) {
      return dispatch((0,_actions_experience_actions__WEBPACK_IMPORTED_MODULE_2__.deleteExperience)(experience));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_experience_index_item__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/feed/feed.jsx":
/*!*******************************************!*\
  !*** ./frontend/components/feed/feed.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar_container */ "./frontend/components/feed/sidebar_container.jsx");
/* harmony import */ var _posts_post_index_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/post_index_container */ "./frontend/components/posts/post_index_container.jsx");
/* harmony import */ var _splash_header_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../splash/header_container */ "./frontend/components/splash/header_container.jsx");
/* harmony import */ var _widgets_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/widgets */ "./frontend/components/widgets/widgets.jsx");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Feed = /*#__PURE__*/function (_React$Component) {
  _inherits(Feed, _React$Component);

  var _super = _createSuper(Feed);

  function Feed(props) {
    var _this;

    _classCallCheck(this, Feed);

    _this = _super.call(this, props);
    _this.state = {
      user: _this.props.user,
      users: _this.props.users,
      likes: _this.props.likes,
      posts: _this.props.posts,
      comments: _this.props.comments
    };
    _this.renderFeed = _this.renderFeed.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Feed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUsers();
      this.props.fetchPosts();
      this.props.fetchConnects();
      document.querySelector('body').style.backgroundColor = '#f3f2ee';
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default()(this.props.user, prevProps.user)) {
        this.setState({
          user: this.props.user
        });
      }
    }
  }, {
    key: "renderFeed",
    value: function renderFeed() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "feed-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "feed"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sidebar_container__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_posts_post_index_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
        rerender: this.rerender
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_widgets_widgets__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_splash_header_container__WEBPACK_IMPORTED_MODULE_3__["default"], null), this.state.user && this.renderFeed());
    }
  }]);

  return Feed;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);

/***/ }),

/***/ "./frontend/components/feed/feed_container.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/feed/feed_container.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/post_actions */ "./frontend/actions/post_actions.js");
/* harmony import */ var _actions_connect_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/connect_actions */ "./frontend/actions/connect_actions.js");
/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feed */ "./frontend/components/feed/feed.jsx");






var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.entities.users[state.session.id],
    users: state.entities.users,
    posts: state.entities.posts,
    comments: state.entities.comments,
    likes: state.entities.likes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: function fetchPosts() {
      return dispatch((0,_actions_post_actions__WEBPACK_IMPORTED_MODULE_2__.fetchPosts)());
    },
    fetchUsers: function fetchUsers() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.fetchUsers)());
    },
    fetchConnects: function fetchConnects() {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_3__.fetchConnects)());
    },
    login: function login(user) {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.login)(user));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_feed__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./frontend/components/feed/sidebar.jsx":
/*!**********************************************!*\
  !*** ./frontend/components/feed/sidebar.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Sidebar = /*#__PURE__*/function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  var _super = _createSuper(Sidebar);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _super.call(this, props);
    _this.numberOfConnections = _this.numberOfConnections.bind(_assertThisInitialized(_this));
    _this.handleUserShow = _this.handleUserShow.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Sidebar, [{
    key: "handleUserShow",
    value: function handleUserShow() {
      this.props.history.push("/network");
    }
  }, {
    key: "numberOfConnections",
    value: function numberOfConnections() {
      var _this2 = this;

      return Object.values(this.props.connects).filter(function (connect) {
        return connect.accepted && (connect.sender_id === _this2.props.user.id || connect.receiver_id === _this2.props.user.id);
      }).length;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sidebar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sidebar-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "https://media-exp1.licdn.com/dms/image/C5616AQFm9VPk7Nd1cQ/profile-displaybackgroundimage-shrink_350_1400/0/1635706270087?e=1667433600&v=beta&t=-GG8YaHFDO0dW6kTxGKSS9yEXHnX56jGMCffQn1cslk",
        alt: "profile-cover"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "sidebar-user-img",
        onClick: function onClick() {
          return _this3.handleUserShow();
        }
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-profile-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-profile-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "user-details"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "demo-name"
      }, "Welcome, ", "".concat(this.props.user.first_name), "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, this.props.user.headline ? this.props.user.headline : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sidebar-stats"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sidebar-stats-top",
        onClick: function onClick() {
          return _this3.handleUserShow();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Connections"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "sidebar-stat-number"
      }, this.numberOfConnections())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sidebar-stats-bottom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Who's viewed your profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "sidebar-stat-number"
      }, "24"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sidebar-bottom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "sidebar-hashtag-logo"
      }, "Followed hashtags"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "tags"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        id: "sidebar-hashtag",
        href: "https://reactjs.org/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "#reactjs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        id: "sidebar-hashtag",
        href: "https://rubyonrails.org/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "#rubyonrails")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        id: "sidebar-hashtag",
        href: "https://linkedin.com/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "#clone")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sidebar-divider-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sidebar-divider"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "project-description"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "widgets-para"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
        className: "aa"
      }, "Project Description:"), " LoopedIn is a fullstack clone of the world's largest professional networking site LinkedIn.")));
    }
  }]);

  return Sidebar;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./frontend/components/feed/sidebar_container.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/feed/sidebar_container.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./frontend/components/feed/sidebar.jsx");




var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.entities.users[state.session.id],
    connects: state.entities.connects
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, null)(_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/modals/pending_modal.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/modals/pending_modal.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var PendingModal = /*#__PURE__*/function (_React$Component) {
  _inherits(PendingModal, _React$Component);

  var _super = _createSuper(PendingModal);

  function PendingModal(props) {
    var _this;

    _classCallCheck(this, PendingModal);

    _this = _super.call(this, props);
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PendingModal, [{
    key: "handleDelete",
    value: function handleDelete() {
      var _this2 = this;

      var toDelete = Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this2.props.current_user.id && connect.receiver_id === _this2.props.user.id;
      });

      if (toDelete.length > 0) {
        this.props.deleteConnect(toDelete[0]);
      }

      this.props.togglePendingModal();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "pending-modal-overlay",
        onClick: function onClick(e) {
          _this3.props.togglePendingModal();

          e.stopPropagation();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "pending-modal",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "pending-modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        id: "pending-modal-title"
      }, "Withdraw invitation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "close-pending-modal",
        onClick: this.props.togglePendingModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faXmark
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "pending-modal-separator"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "pending-modal-body"
      }, "Are you sure you want to withdraw your invitation?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "pending-modal-buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "pending-modal-cancel",
        onClick: this.props.togglePendingModal
      }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "pending-modal-withdraw",
        onClick: function onClick() {
          return _this3.handleDelete();
        }
      }, "Withdraw"))));
    }
  }]);

  return PendingModal;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PendingModal);

/***/ }),

/***/ "./frontend/components/modals/pending_modal_container.jsx":
/*!****************************************************************!*\
  !*** ./frontend/components/modals/pending_modal_container.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/connect_actions */ "./frontend/actions/connect_actions.js");
/* harmony import */ var _pending_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pending_modal */ "./frontend/components/modals/pending_modal.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    connects: state.entities.connects
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteConnect: function deleteConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__.deleteConnect)(connect));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(_pending_modal__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/nav/session_nav.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/nav/session_nav.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var SessionNav = /*#__PURE__*/function (_React$Component) {
  _inherits(SessionNav, _React$Component);

  var _super = _createSuper(SessionNav);

  function SessionNav(props) {
    _classCallCheck(this, SessionNav);

    return _super.call(this, props);
  }

  _createClass(SessionNav, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "splash-nav"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "splash-header-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "splash-header-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/",
        className: "header-logo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLinkedin,
        className: "fa-header-link",
        id: "fa-linkedin"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "splash-header-right"
      })));
    }
  }]);

  return SessionNav;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SessionNav);

/***/ }),

/***/ "./frontend/components/nav/splash_nav.jsx":
/*!************************************************!*\
  !*** ./frontend/components/nav/splash_nav.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var SplashNav = /*#__PURE__*/function (_React$Component) {
  _inherits(SplashNav, _React$Component);

  var _super = _createSuper(SplashNav);

  function SplashNav(props) {
    _classCallCheck(this, SplashNav);

    return _super.call(this, props);
  }

  _createClass(SplashNav, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "splash-nav"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "splash-header-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "splash-header-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/",
        className: "header-logo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLinkedin,
        className: "fa-header-link",
        id: "fa-linkedin"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "splash-header-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "header-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/signup",
        className: "signup-btn"
      }, "Join now"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/login",
        className: "login-btn"
      }, "Sign in")))));
    }
  }]);

  return SplashNav;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SplashNav);

/***/ }),

/***/ "./frontend/components/network/network.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/network/network.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _splash_header_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../splash/header_container */ "./frontend/components/splash/header_container.jsx");
/* harmony import */ var _network_item_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network_item_container */ "./frontend/components/network/network_item_container.jsx");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var _network_invitation_item_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network_invitation_item_container */ "./frontend/components/network/network_invitation_item_container.jsx");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Network = /*#__PURE__*/function (_React$Component) {
  _inherits(Network, _React$Component);

  var _super = _createSuper(Network);

  function Network(props) {
    var _this;

    _classCallCheck(this, Network);

    _this = _super.call(this, props);
    _this.renderNetworkPage = _this.renderNetworkPage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Network, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUsers();
      this.props.fetchConnects();
    }
  }, {
    key: "renderNetworkPage",
    value: function renderNetworkPage() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_splash_header_container__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-container-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-title"
      }, "Manage my network"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-contents-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-content-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiUserGroup, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Connections")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-content-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_icons_ti__WEBPACK_IMPORTED_MODULE_5__.TiContacts, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Contacts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-content-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiHashtag, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Hashtags")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-content-left-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-footer-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-left-footer-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        className: "footer-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-footer-link"
      }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        className: "footer-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-footer-link"
      }, "Accessibility")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        className: "footer-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-footer-link"
      }, "Help Center"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-left-footer-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        className: "footer-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-footer-link"
      }, "Privacy & Terms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        className: "footer-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-footer-link"
      }, "Ad Choices"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-left-footer-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        className: "footer-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-footer-link"
      }, "Advertising")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        className: "footer-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-footer-link"
      }, "Business Services"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-left-footer-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        className: "footer-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-footer-link"
      }, "Get the LoopedIn app")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        className: "footer-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-footer-link"
      }, "More"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        id: "copyright-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        id: "loopedin-copyright-info"
      }, '<LoopedIn logo>', " LoopedIn Corporation \xA9 2022"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-invitations"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-left-title"
      }, "Invitations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-invitations-divider"
      }), Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.receiver_id === _this2.props.current_user.id;
      }).map(function (connect, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_network_invitation_item_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
          users: _this2.props.users,
          connects: _this2.props.connects,
          current_user: _this2.props.current_user,
          user: _this2.props.users[connect.sender_id],
          key: connect + i + Math.random() * 100000
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-container-right-parent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-right-header-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
        className: "network-container-right-header"
      }, "People you may know")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: "network-container-right"
      }, Object.values(this.props.users).map(function (user, i) {
        if (_this2.props.current_user.id !== user.id) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_network_item_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
            user: user,
            key: user + i
          });
        }
      }))))));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.current_user && this.renderNetworkPage();
    }
  }]);

  return Network;
}((react__WEBPACK_IMPORTED_MODULE_3___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Network);

/***/ }),

/***/ "./frontend/components/network/network_container.jsx":
/*!***********************************************************!*\
  !*** ./frontend/components/network/network_container.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network */ "./frontend/components/network/network.jsx");
/* harmony import */ var _actions_connect_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/connect_actions */ "./frontend/actions/connect_actions.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    current_user: state.entities.users[state.session.id],
    users: state.entities.users,
    connects: state.entities.connects
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: function fetchUsers() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.fetchUsers)());
    },
    fetchConnects: function fetchConnects() {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_3__.fetchConnects)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_network__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/network/network_invitation_item.jsx":
/*!*****************************************************************!*\
  !*** ./frontend/components/network/network_invitation_item.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var NetworkInvitationItem = /*#__PURE__*/function (_React$Component) {
  _inherits(NetworkInvitationItem, _React$Component);

  var _super = _createSuper(NetworkInvitationItem);

  function NetworkInvitationItem(props) {
    var _this;

    _classCallCheck(this, NetworkInvitationItem);

    _this = _super.call(this, props);
    _this.state = {
      rerender: true
    };
    _this.renderInvitation = _this.renderInvitation.bind(_assertThisInitialized(_this));
    _this.handleUserShow = _this.handleUserShow.bind(_assertThisInitialized(_this));
    _this.acceptConnect = _this.acceptConnect.bind(_assertThisInitialized(_this));
    _this.deleteConnect = _this.deleteConnect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NetworkInvitationItem, [{
    key: "handleUserShow",
    value: function handleUserShow(userId) {
      this.props.history.push("/users/".concat(userId));
    }
  }, {
    key: "acceptConnect",
    value: function acceptConnect() {
      var _this2 = this;

      var pendingConnects = Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this2.props.current_user.id && connect.receiver_id === _this2.props.user.id || connect.sender_id === _this2.props.user.id && connect.receiver_id === _this2.props.current_user.id;
      });

      if (pendingConnects.length > 0) {
        var updatedConnect = Object.assign({}, pendingConnects[0], {
          pending: false,
          accepted: true
        });
        this.props.updateConnect(updatedConnect);
      }
    }
  }, {
    key: "deleteConnect",
    value: function deleteConnect() {
      var _this3 = this;

      var filteredConnects = Object.values(this.props.connects).filter(function (connect) {
        return connect.accepted && connect.sender_id === _this3.props.current_user.id && connect.receiver_id === _this3.props.user.id || connect.sender_id === _this3.props.user.id && connect.receiver_id === _this3.props.current_user.id;
      });

      if (filteredConnects.length > 0) {
        this.props.deleteConnect(filteredConnects[0]);
      }
    }
  }, {
    key: "renderInvitation",
    value: function renderInvitation() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "network-invitation-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "network-invitation-item-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "network-invitation-user-img",
        onClick: function onClick() {
          return _this4.handleUserShow(_this4.props.user.id);
        }
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "default-image"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-image"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "network-invitation-user-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "network-invitation-user-name",
        onClick: function onClick() {
          return _this4.handleUserShow(_this4.props.user.id);
        }
      }, "".concat(this.props.user.first_name, " ").concat(this.props.user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "network-invitation-user-headline"
      }, this.props.user.headline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "network-invitation-user-location"
      }, "".concat(this.props.user.location_city, ", ").concat(this.props.user.location_country)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "network-invitation-item-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "network-invitation-ignore",
        onClick: function onClick() {
          return _this4.deleteConnect();
        }
      }, "Ignore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "network-invitation-accept",
        onClick: function onClick() {
          return _this4.acceptConnect();
        }
      }, "Accept"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "network-invitation-footer-divider"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.user && this.renderInvitation();
    }
  }]);

  return NetworkInvitationItem;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NetworkInvitationItem);

/***/ }),

/***/ "./frontend/components/network/network_invitation_item_container.jsx":
/*!***************************************************************************!*\
  !*** ./frontend/components/network/network_invitation_item_container.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _network_invitation_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network_invitation_item */ "./frontend/components/network/network_invitation_item.jsx");
/* harmony import */ var _actions_connect_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/connect_actions */ "./frontend/actions/connect_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var mapStateToProps = function mapStateToProps(state) {
  return {// current_user: state.entities.users[state.session.id],
    // connects: state.entities.connects,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateConnect: function updateConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_1__.updateConnect)(connect));
    },
    deleteConnect: function deleteConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_1__.deleteConnect)(connect));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(_network_invitation_item__WEBPACK_IMPORTED_MODULE_0__["default"])));

/***/ }),

/***/ "./frontend/components/network/network_item.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/network/network_item.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modals_pending_modal_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/pending_modal_container */ "./frontend/components/modals/pending_modal_container.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var NetworkItem = /*#__PURE__*/function (_React$Component) {
  _inherits(NetworkItem, _React$Component);

  var _super = _createSuper(NetworkItem);

  function NetworkItem(props) {
    var _this;

    _classCallCheck(this, NetworkItem);

    _this = _super.call(this, props);
    _this.state = {
      pending_modal_hidden: true
    };
    _this.togglePendingModal = _this.togglePendingModal.bind(_assertThisInitialized(_this));
    _this.handleUserShow = _this.handleUserShow.bind(_assertThisInitialized(_this));
    _this.acceptConnect = _this.acceptConnect.bind(_assertThisInitialized(_this));
    _this.deleteConnect = _this.deleteConnect.bind(_assertThisInitialized(_this));
    _this.sendConnect = _this.sendConnect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NetworkItem, [{
    key: "togglePendingModal",
    value: function togglePendingModal() {
      this.setState({
        pending_modal_hidden: !this.state.pending_modal_hidden
      });
    }
  }, {
    key: "sendConnect",
    value: function sendConnect() {
      this.props.createConnect({
        sender_id: this.props.current_user.id,
        receiver_id: this.props.user.id,
        pending: true,
        accepted: false
      });
    }
  }, {
    key: "acceptConnect",
    value: function acceptConnect() {
      var _this2 = this;

      var pendingConnects = Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this2.props.current_user.id && connect.receiver_id === _this2.props.user.id || connect.sender_id === _this2.props.user.id && connect.receiver_id === _this2.props.current_user.id;
      });

      if (pendingConnects.length > 0) {
        var updatedConnect = Object.assign({}, pendingConnects[0], {
          pending: false,
          accepted: true
        });
        this.props.updateConnect(updatedConnect);
      }
    }
  }, {
    key: "deleteConnect",
    value: function deleteConnect() {
      var _this3 = this;

      var filteredConnects = Object.values(this.props.connects).filter(function (connect) {
        return connect.accepted && connect.sender_id === _this3.props.current_user.id && connect.receiver_id === _this3.props.user.id || connect.sender_id === _this3.props.user.id && connect.receiver_id === _this3.props.current_user.id;
      });

      if (filteredConnects.length > 0) {
        this.props.deleteConnect(filteredConnects[0]);
      }
    }
  }, {
    key: "handleUserShow",
    value: function handleUserShow(userId) {
      console.log('inside handleUserShow');
      this.props.history.push("/users/".concat(userId));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "network-item-container",
        onClick: function onClick() {
          return _this4.handleUserShow(_this4.props.user.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "network-item-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "network-item-images"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "network-item-cover-photo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        src: "https://media-exp1.licdn.com/dms/image/C5616AQFm9VPk7Nd1cQ/profile-displaybackgroundimage-shrink_350_1400/0/1635706270087?e=1667433600&v=beta&t=-GG8YaHFDO0dW6kTxGKSS9yEXHnX56jGMCffQn1cslk",
        alt: "cover-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "network-item-profile-photo"
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-photo"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "network-item-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "network-item-name"
      }, "".concat(this.props.user.first_name, " ").concat(this.props.user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "network-item-headline"
      }, this.props.user.headline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "network-item-location"
      }, "".concat(this.props.user.location_city, ", ").concat(this.props.user.location_country)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "connect-btn-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "network-item-about"
      }, this.props.user.about ? this.props.user.about.length > 100 ? "".concat(this.props.user.about.slice(0, 70), "...") : this.props.user.about : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "network-connect-btn",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, Object.values(this.props.connects).filter(function (connect) {
        return connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id;
      }).length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "connect-btn",
        onClick: function onClick() {
          return _this4.sendConnect();
        }
      }, "Connect") : Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id;
      }).length > 0 && Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id;
      })[0].sender_id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "connect-btn",
        id: "pending-network",
        onClick: function onClick() {
          return _this4.togglePendingModal();
        }
      }, "Pending") : Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && (connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id);
      }).length > 0 && Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && (connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id);
      })[0].receiver_id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "connect-btn",
        onClick: function onClick() {
          return _this4.acceptConnect();
        }
      }, "Accept") : Object.values(this.props.connects).filter(function (connect) {
        return connect.accepted && connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id;
      }).length === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "connect-btn",
        onClick: function onClick() {
          return _this4.deleteConnect();
        }
      }, "Disconnect") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        id: "add-profile-section",
        onClick: function onClick() {
          return _this4.deleteConnect();
        }
      }, "Disconnect"))), this.state.pending_modal_hidden ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_modals_pending_modal_container__WEBPACK_IMPORTED_MODULE_0__["default"], {
        user: this.props.user,
        current_user: this.props.current_user,
        togglePendingModal: function togglePendingModal() {
          return _this4.togglePendingModal();
        }
      }));
    }
  }]);

  return NetworkItem;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NetworkItem);

/***/ }),

/***/ "./frontend/components/network/network_item_container.jsx":
/*!****************************************************************!*\
  !*** ./frontend/components/network/network_item_container.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _network_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network_item */ "./frontend/components/network/network_item.jsx");
/* harmony import */ var _actions_connect_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/connect_actions */ "./frontend/actions/connect_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    current_user: state.entities.users[state.session.id],
    users: state.entities.users,
    connects: state.entities.connects
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createConnect: function createConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_2__.createConnect)(connect));
    },
    deleteConnect: function deleteConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_2__.deleteConnect)(connect));
    },
    updateConnect: function updateConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_2__.updateConnect)(connect));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_network_item__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/posts/post_form.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/posts/post_form.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var PostForm = /*#__PURE__*/function (_React$Component) {
  _inherits(PostForm, _React$Component);

  var _super = _createSuper(PostForm);

  function PostForm(props) {
    var _this;

    _classCallCheck(this, PostForm);

    _this = _super.call(this, props);
    _this.state = {
      user: _this.props.user,
      post: _this.props.post,
      modal_hidden: true
    };
    _this.handleUserShow = _this.handleUserShow.bind(_assertThisInitialized(_this));
    _this.handleCreate = _this.handleCreate.bind(_assertThisInitialized(_this));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.createModal = _this.createModal.bind(_assertThisInitialized(_this));
    _this.updateBody = _this.updateBody.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PostForm, [{
    key: "handleUserShow",
    value: function handleUserShow() {
      this.props.history.push("/users/".concat(this.props.user.id));
    }
  }, {
    key: "handleCreate",
    value: function handleCreate(e) {
      var _this2 = this;

      e.preventDefault();
      var formData = new FormData();

      if (e.target[1].files[0]) {
        formData.append('post[image]', e.target[1].files[0]);
      }

      formData.append('post[body]', this.state.post.body);
      formData.append('post[user_id]', this.state.post.user_id);
      $.ajax({
        url: "/api/posts",
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
      }).then(function () {
        _this2.setState({
          post: {
            user_id: "",
            body: ""
          }
        });

        _this2.props.fetchPosts().then(function (posts) {
          _this2.setState({
            posts: posts
          });
        });
      });
      this.setState({
        modal_hidden: true
      });
    }
  }, {
    key: "updateBody",
    value: function updateBody(e) {
      this.setState({
        post: {
          body: e.target.value
        }
      });
    }
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        modal_hidden: !this.state.modal_hidden
      });
    }
  }, {
    key: "createModal",
    value: function createModal() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "overlay",
        onClick: this.toggleModal
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Create a post"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "close-create-post-modal",
        onClick: this.toggleModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faXmark
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal-header-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
        className: "create-post-form",
        onSubmit: this.handleCreate
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-user-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "post-user-image",
        onClick: function onClick() {
          return _this3.handleUserShow();
        }
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-profile-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-profile-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-user-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
        id: "poster-name",
        onClick: function onClick() {
          return _this3.handleUserShow();
        }
      }, "".concat(this.state.user.first_name, " ").concat(this.state.user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Professional Tester"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        required: true,
        placeholder: "What do you want to talk about?",
        onChange: this.updateBody
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "file",
        accept: "image/png, image/jpeg"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        type: "submit",
        className: "create-post-btn"
      }, "Post")))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "post-form-content"
      }, this.state.modal_hidden ? "" : this.createModal(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "post-form-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "post-user-image",
        onClick: function onClick() {
          return _this4.handleUserShow();
        }
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-profile-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-profile-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "post-form-container",
        onClick: this.toggleModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "create-post-pen"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPen
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
        className: "post-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "post-form-placeholder"
      }, "Have a topic that excites you? Post about it")))));
    }
  }]);

  return PostForm;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostForm);

/***/ }),

/***/ "./frontend/components/posts/post_form_container.jsx":
/*!***********************************************************!*\
  !*** ./frontend/components/posts/post_form_container.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/post_actions */ "./frontend/actions/post_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _post_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post_form */ "./frontend/components/posts/post_form.jsx");





var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.entities.users[state.session.id],
    post: {
      user_id: state.entities.users[state.session.id],
      body: ''
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createPost: function createPost(post) {
      return dispatch((0,_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__.createPost)(post));
    },
    fetchPosts: function fetchPosts() {
      return dispatch((0,_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__.fetchPosts)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_post_form__WEBPACK_IMPORTED_MODULE_2__["default"])));

/***/ }),

/***/ "./frontend/components/posts/post_index.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/posts/post_index.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _post_form_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post_form_container */ "./frontend/components/posts/post_form_container.jsx");
/* harmony import */ var _post_index_item_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post_index_item_container */ "./frontend/components/posts/post_index_item_container.jsx");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var PostIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(PostIndex, _React$Component);

  var _super = _createSuper(PostIndex);

  function PostIndex(props) {
    var _this;

    _classCallCheck(this, PostIndex);

    _this = _super.call(this, props);
    _this.state = {
      display_sort_by: false,
      sort_by: "Recent"
    };
    _this.toggleSortModal = _this.toggleSortModal.bind(_assertThisInitialized(_this));
    _this.sortByModal = _this.sortByModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PostIndex, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(this.props.posts, prevProps.posts)) {
        this.setState({
          posts: this.props.posts
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchComments();
      this.props.fetchLikes();
    }
  }, {
    key: "toggleSortModal",
    value: function toggleSortModal() {
      this.setState({
        display_sort_by: !this.state.display_sort_by
      });
    }
  }, {
    key: "sortByModal",
    value: function sortByModal() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        id: "sort-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        id: "recent"
      }, "Recent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        id: "top"
      }, "Top"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_post_form_container__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        id: "post-form-separator-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        id: "post-form-separator"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
        id: "sort-by",
        onClick: function onClick() {
          return _this2.toggleSortModal();
        }
      }, "Sort by: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
        id: "selected-sort"
      }, this.state.sort_by, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoMdArrowDropdown, null))), this.state.display_sort_by ? this.sortByModal() : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", null, Object.values(this.props.posts).reverse().map(function (post, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_post_index_item_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
          post: post,
          key: post + i
        });
      })));
    }
  }]);

  return PostIndex;
}((react__WEBPACK_IMPORTED_MODULE_3___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostIndex);

/***/ }),

/***/ "./frontend/components/posts/post_index_container.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/posts/post_index_container.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/post_actions */ "./frontend/actions/post_actions.js");
/* harmony import */ var _actions_comment_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/comment_actions */ "./frontend/actions/comment_actions.js");
/* harmony import */ var _actions_like_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/like_actions */ "./frontend/actions/like_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _post_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post_index */ "./frontend/components/posts/post_index.jsx");






var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.entities.posts
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updatePost: function updatePost(post) {
      return dispatch((0,_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__.updatePost)(post));
    },
    deletePost: function deletePost(post) {
      return dispatch((0,_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__.deletePost)(post));
    },
    fetchPosts: function fetchPosts() {
      return dispatch((0,_actions_post_actions__WEBPACK_IMPORTED_MODULE_0__.fetchPosts)());
    },
    fetchComments: function fetchComments() {
      return dispatch((0,_actions_comment_actions__WEBPACK_IMPORTED_MODULE_1__.fetchComments)());
    },
    fetchLikes: function fetchLikes() {
      return dispatch((0,_actions_like_actions__WEBPACK_IMPORTED_MODULE_2__.fetchLikes)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(_post_index__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./frontend/components/posts/post_index_item.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/posts/post_index_item.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _comments_comment_form_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comments/comment_form_container */ "./frontend/components/comments/comment_form_container.jsx");
/* harmony import */ var _comments_comment_index_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comments/comment_index_container */ "./frontend/components/comments/comment_index_container.jsx");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var PostIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(PostIndexItem, _React$Component);

  var _super = _createSuper(PostIndexItem);

  function PostIndexItem(props) {
    var _this;

    _classCallCheck(this, PostIndexItem);

    _this = _super.call(this, props);
    _this.state = {
      user: _this.props.user,
      post: _this.props.post,
      is_liked: false,
      display_comments: false,
      action_modal_hidden: true,
      update_modal_hidden: true
    };
    _this.handleUserShow = _this.handleUserShow.bind(_assertThisInitialized(_this));
    _this.handleLike = _this.handleLike.bind(_assertThisInitialized(_this));
    _this.handleUpdate = _this.handleUpdate.bind(_assertThisInitialized(_this));
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    _this.actionModal = _this.actionModal.bind(_assertThisInitialized(_this));
    _this.openActionModal = _this.openActionModal.bind(_assertThisInitialized(_this));
    _this.toggleUpdateModal = _this.toggleUpdateModal.bind(_assertThisInitialized(_this));
    _this.toggleComments = _this.toggleComments.bind(_assertThisInitialized(_this));
    _this.updateModal = _this.updateModal.bind(_assertThisInitialized(_this));
    _this.updateBody = _this.updateBody.bind(_assertThisInitialized(_this));
    _this.renderPost = _this.renderPost.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PostIndexItem, [{
    key: "handleUserShow",
    value: function handleUserShow(userId) {
      this.props.history.push("/users/".concat(userId));
    }
  }, {
    key: "updateBody",
    value: function updateBody(e) {
      this.setState({
        post: {
          user_id: this.props.post.user_id,
          id: this.props.post.id,
          body: e.target.value
        }
      });
    }
  }, {
    key: "updateModal",
    value: function updateModal() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "overlay",
        onClick: this.toggleUpdateModal
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "create-post-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "create-post-modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", null, "Edit post"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "close-create-post-modal",
        onClick: this.toggleUpdateModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faXmark
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "create-post-modal-header-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("form", {
        className: "create-post-form",
        onSubmit: this.handleUpdate
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "create-post-user-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "post-user-image",
        onClick: function onClick() {
          return _this2.handleUserShow(_this2.props.user.id);
        }
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "create-post-user-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", {
        id: "poster-name",
        onClick: function onClick() {
          return _this2.handleUserShow(_this2.props.user.id);
        }
      }, "".concat(this.state.user.first_name, " ").concat(this.state.user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, "Professional Tester"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", {
        type: "text",
        required: true,
        placeholder: "What do you want to talk about?",
        onChange: this.updateBody,
        value: this.state.post.body
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "create-post-modal-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faImage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", {
        type: "submit",
        className: "create-post-btn"
      }, "Save")))));
    }
  }, {
    key: "handleLike",
    value: function handleLike() {
      var _this3 = this;

      var likes = Object.values(this.props.likes).filter(function (like) {
        return like.likeable_id === _this3.props.post.id && like.user_id === _this3.props.current_user.id && like.likeable_type === 'Post';
      });

      if (likes.length > 0) {
        this.props.deleteLike(likes[0]);
      } else {
        this.props.createLike({
          user_id: this.props.user.id,
          likeable_id: this.props.post.id,
          likeable_type: 'Post'
        });
      }
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this.setState({
        update_modal_hidden: true
      });
      this.props.updatePost(this.state.post);
    }
  }, {
    key: "handleDelete",
    value: function handleDelete() {
      this.setState({
        action_modal_hidden: true
      });
      this.props.deletePost(this.props.post);
    }
  }, {
    key: "openActionModal",
    value: function openActionModal() {
      this.setState({
        action_modal_hidden: !this.state.action_modal_hidden
      });
    }
  }, {
    key: "toggleUpdateModal",
    value: function toggleUpdateModal() {
      this.setState({
        update_modal_hidden: !this.state.update_modal_hidden,
        action_modal_hidden: true
      });
    }
  }, {
    key: "toggleComments",
    value: function toggleComments() {
      this.setState({
        display_comments: !this.state.display_comments
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this4 = this;

      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default()(this.props.comments, prevProps.comments)) {
        this.setState({
          comments: Object.values(this.props.comments).filter(function (comment) {
            return comment.post_id === _this4.props.post.id;
          })
        });
      }

      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default()(this.props.likes, prevProps.likes)) {
        this.setState({
          likes: Object.values(this.props.likes).filter(function (like) {
            return like.likeable_id === _this4.props.post.id;
          }),
          is_liked: Object.values(this.props.likes).filter(function (like) {
            return _this4.props.current_user.id === like.user_id && _this4.props.post.id === like.likeable_id && like.likeable_type === 'Post';
          }).length > 0
        });
      }
    }
  }, {
    key: "actionModal",
    value: function actionModal() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "post-actions-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "edit-post-action",
        onClick: this.toggleUpdateModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPen
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, "Edit Post")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "delete-post-action",
        onClick: this.handleDelete
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrashCan
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, "Delete Post")));
    }
  }, {
    key: "renderPost",
    value: function renderPost() {
      var _this5 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "post"
      }, this.state.update_modal_hidden ? "" : this.updateModal(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "post-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "post-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "post-user-image",
        onClick: function onClick() {
          return _this5.handleUserShow(_this5.props.user.id);
        }
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "post-header-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "poster-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
        id: "poster-name",
        onClick: function onClick() {
          return _this5.handleUserShow(_this5.props.user.id);
        }
      }, "".concat(this.props.user.first_name, " ").concat(this.props.user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
        id: "poster-pronouns"
      }, "(".concat(this.props.user.pronouns, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
        id: "poster-profession"
      }, "".concat(this.props.user.headline)))), this.props.post.user_id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "post-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "post-actions-toggler",
        onClick: this.openActionModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEllipsis
      }))) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "post-body"
      }, this.props.post.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "post-img"
      }, Object.keys(this.props.post.image).length < 5 ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
        src: this.props.post.image,
        alt: "post-image"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "likes-comments-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
        className: Object.values(this.props.likes).filter(function (like) {
          return like.user_id === _this5.props.current_user.id && like.likeable_id === _this5.props.post.id && like.likeable_type === 'Post';
        }).length > 0 ? "likes-count likes-count-liked" : "likes-count"
      }, Object.values(this.props.likes).filter(function (like) {
        return like.likeable_id === _this5.props.post.id && like.likeable_type === 'Post';
      }).length, " likes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
        className: "comments-count",
        onClick: this.toggleComments
      }, Object.values(this.props.comments).filter(function (comment) {
        return comment.post_id === _this5.props.post.id;
      }).length, " comments")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "post-btn-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "post-btn-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: Object.values(this.props.likes).filter(function (like) {
          return like.user_id === _this5.props.current_user.id && like.likeable_id === _this5.props.post.id && like.likeable_type === 'Post';
        }).length > 0 ? "post-btn post-btn-liked" : "post-btn",
        onClick: function onClick() {
          return _this5.handleLike();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "fa-thumbs-up"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faThumbsUp
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, "Like")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "post-btn",
        onClick: this.toggleComments
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        id: "fa-comment"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faComment
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, "Comment"))), this.state.display_comments ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
        className: "comment-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_comments_comment_form_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        post: this.props.post
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_comments_comment_index_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
        post: this.props.post
      })) : "", this.state.action_modal_hidden ? "" : this.actionModal());
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.user && this.renderPost();
    }
  }]);

  return PostIndexItem;
}((react__WEBPACK_IMPORTED_MODULE_4___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostIndexItem);

/***/ }),

/***/ "./frontend/components/posts/post_index_item_container.jsx":
/*!*****************************************************************!*\
  !*** ./frontend/components/posts/post_index_item_container.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _post_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post_index_item */ "./frontend/components/posts/post_index_item.jsx");
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/post_actions */ "./frontend/actions/post_actions.js");
/* harmony import */ var _actions_like_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/like_actions */ "./frontend/actions/like_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");







var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    user: state.entities.users[ownProps.post.user_id],
    current_user: state.entities.users[state.session.id],
    comments: state.entities.comments,
    likes: state.entities.likes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updatePost: function updatePost(post) {
      return dispatch((0,_actions_post_actions__WEBPACK_IMPORTED_MODULE_2__.updatePost)(post));
    },
    deletePost: function deletePost(post) {
      return dispatch((0,_actions_post_actions__WEBPACK_IMPORTED_MODULE_2__.deletePost)(post));
    },
    createLike: function createLike(like) {
      return dispatch((0,_actions_like_actions__WEBPACK_IMPORTED_MODULE_3__.createLike)(like));
    },
    deleteLike: function deleteLike(like) {
      return dispatch((0,_actions_like_actions__WEBPACK_IMPORTED_MODULE_3__.deleteLike)(like));
    },
    deleteLikes: function deleteLikes() {
      return dispatch((0,_actions_like_actions__WEBPACK_IMPORTED_MODULE_3__.deleteLikes)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_post_index_item__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/root.jsx":
/*!**************************************!*\
  !*** ./frontend/components/root.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./frontend/components/app.jsx");





var Root = function Root(_ref) {
  var store = _ref.store;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Root);

/***/ }),

/***/ "./frontend/components/search/search_results_index.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/search/search_results_index.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _search_results_index_item_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search_results_index_item_container */ "./frontend/components/search/search_results_index_item_container.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SearchResultsIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchResultsIndex, _React$Component);

  var _super = _createSuper(SearchResultsIndex);

  function SearchResultsIndex(props) {
    _classCallCheck(this, SearchResultsIndex);

    return _super.call(this, props);
  }

  _createClass(SearchResultsIndex, [{
    key: "render",
    value: function render() {
      var _this = this;

      // debugger;
      var that = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "search-results-index-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        id: "search-results"
      }, "Search results"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        id: "search-item-separator"
      }), Object.values(this.props.users).map(function (user, i) {
        var name = "".concat(user.first_name, " ").concat(user.last_name).toLowerCase();

        if (that.props.searchInput.length !== 0 && that.props.searchInput === name.slice(0, that.props.searchInput.length)) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_search_results_index_item_container__WEBPACK_IMPORTED_MODULE_0__["default"], {
            user: user,
            key: user + i + Math.random() * 100000,
            toggleSearch: _this.props.toggleSearch
          });
        }
      }));
    }
  }]);

  return SearchResultsIndex;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchResultsIndex);

/***/ }),

/***/ "./frontend/components/search/search_results_index_container.jsx":
/*!***********************************************************************!*\
  !*** ./frontend/components/search/search_results_index_container.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _search_results_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search_results_index */ "./frontend/components/search/search_results_index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var mapStateToProps = function mapStateToProps(state) {
  return {
    current_user: state.entities.users[state.session.id],
    users: state.entities.users
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_search_results_index__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./frontend/components/search/search_results_index_item.jsx":
/*!******************************************************************!*\
  !*** ./frontend/components/search/search_results_index_item.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SearchResultsIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchResultsIndexItem, _React$Component);

  var _super = _createSuper(SearchResultsIndexItem);

  function SearchResultsIndexItem(props) {
    var _this;

    _classCallCheck(this, SearchResultsIndexItem);

    _this = _super.call(this, props);
    _this.handleUserShow = _this.handleUserShow.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SearchResultsIndexItem, [{
    key: "handleUserShow",
    value: function handleUserShow() {
      this.props.history.push("/users/".concat(this.props.user.id));
      this.props.toggleSearch();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "search-item",
        onClick: function onClick() {
          return _this2.handleUserShow();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "search-item-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "search-item-user-image"
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "search-item-user-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "search-item-user-name"
      }, "".concat(this.props.user.first_name, " ").concat(this.props.user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "search-item-user-headline"
      }, this.props.user.headline))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "search-item-right"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "search-item-separator"
      }));
    }
  }]);

  return SearchResultsIndexItem;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchResultsIndexItem);

/***/ }),

/***/ "./frontend/components/search/search_results_index_item_container.jsx":
/*!****************************************************************************!*\
  !*** ./frontend/components/search/search_results_index_item_container.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _search_results_index_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search_results_index_item */ "./frontend/components/search/search_results_index_item.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_search_results_index_item__WEBPACK_IMPORTED_MODULE_0__["default"])));

/***/ }),

/***/ "./frontend/components/session_form/login_form.jsx":
/*!*********************************************************!*\
  !*** ./frontend/components/session_form/login_form.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav_session_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/session_nav */ "./frontend/components/nav/session_nav.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var LoginForm = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  var _super = _createSuper(LoginForm);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _super.call(this, props);
    _this.state = _this.props.user;
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleDemo = _this.handleDemo.bind(_assertThisInitialized(_this));
    _this.demoLogin = _this.demoLogin.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.querySelector('body').style.backgroundColor = '#f3f2ee';
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.processForm(this.state);
      this.props.history.push('/feed');
      this.setState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        location_country: 'United States',
        location_city: 'New York',
        pronouns: 'He/Him'
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "handleDemo",
    value: function handleDemo() {
      var demoUser = {
        email: 'cappy@gmail.com',
        password: 'fooood',
        location_country: 'United States',
        location_city: 'New York',
        first_name: 'Cappy',
        last_name: 'Bara',
        pronouns: 'He/Him',
        headline: 'Professional Tester'
      };
      this.props.history.push('/feed');
      this.props.processForm(demoUser);
    }
  }, {
    key: "demoLogin",
    value: function demoLogin() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "demo-btn",
        onClick: this.handleDemo
      }, "Demo User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "login-footer"
      }, "Don't have an account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        id: "join-now-link",
        to: "/signup"
      }, "Join now")));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_nav_session_nav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "login-body-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "session-form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "user-login-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        id: "user-login-logo"
      }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        id: "user-login-info"
      }, "Stay looped in your professional world")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        required: true,
        value: this.state.email,
        onChange: this.update('email'),
        placeholder: "Email"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "password",
        required: true,
        value: this.state.password,
        onChange: this.update('password'),
        placeholder: "Password"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "submit",
        className: "submit"
      }, this.props.formType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "or-separator"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "or-separator-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "or-separator-left-contents"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        id: "or-separator-content"
      }, "or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "or-separator-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "or-separator-right-contents"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "demo-btn",
        onClick: this.handleDemo
      }, "Demo User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "login-footer"
      }, "Don't have an account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        id: "join-now-link",
        to: "/signup"
      }, "Join now")))))));
    }
  }]);

  return LoginForm;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ "./frontend/components/session_form/login_form_container.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/session_form/login_form_container.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_form */ "./frontend/components/session_form/login_form.jsx");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    user: {
      email: '',
      password: ''
    },
    formType: 'Sign in',
    errors: state.errors
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    processForm: function processForm(user) {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__.login)(user));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_login_form__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/session_form/session_form.jsx":
/*!***********************************************************!*\
  !*** ./frontend/components/session_form/session_form.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SessionForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SessionForm, _React$Component);

  var _super = _createSuper(SessionForm);

  function SessionForm(props) {
    var _this;

    _classCallCheck(this, SessionForm);

    _this = _super.call(this, props);
    _this.state = _this.props.user;
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.signupFields = _this.signupFields.bind(_assertThisInitialized(_this));
    _this.handleDemo = _this.handleDemo.bind(_assertThisInitialized(_this));
    _this.demoLogin = _this.demoLogin.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SessionForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.processForm(this.state);
      this.props.history.push('/feed');
      this.setState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        location_country: 'United States',
        location_city: 'New York'
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "signupFields",
    value: function signupFields() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "signup-form-fields"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        required: true,
        value: this.state.firstName,
        onChange: this.update('first_name'),
        placeholder: "First Name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        required: true,
        value: this.state.lastName,
        onChange: this.update('last_name'),
        placeholder: "Last Name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "login-footer"
      }, "Already have an account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        id: "join-now-link",
        to: "/signup"
      }, "Sign in")));
    }
  }, {
    key: "handleDemo",
    value: function handleDemo() {
      var demoUser = {
        email: 'cappy@gmail.com',
        password: 'fooood',
        location_country: 'United States',
        location_city: 'New York',
        first_name: 'Cappy',
        last_name: 'Bara',
        pronouns: 'He/Him',
        headline: 'Professional Tester'
      };
      this.props.history.push('/feed');
      this.props.processForm(demoUser);
    }
  }, {
    key: "demoLogin",
    value: function demoLogin() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "or-separator"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "or-separator-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "or-separator-left-contents"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        id: "or-separator-content"
      }, "or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "or-separator-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "or-separator-right-contents"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "demo-btn",
        onClick: this.handleDemo
      }, "Demo User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "login-footer"
      }, "Don't have an account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        id: "join-now-link",
        to: "/signup"
      }, "Join now")));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-body-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "session-form-container",
        id: "session-form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        required: true,
        value: this.state.email,
        onChange: this.update('email'),
        placeholder: "Email"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "password",
        required: true,
        value: this.state.password,
        onChange: this.update('password'),
        placeholder: "Password"
      }), this.props.formType === 'Sign up' ? this.signupFields() : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "submit",
        className: "submit"
      }, this.props.formType), this.props.formType === 'Sign in' ? this.demoLogin() : ""))));
    }
  }]);

  return SessionForm;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SessionForm);

/***/ }),

/***/ "./frontend/components/session_form/session_form_container.jsx":
/*!*********************************************************************!*\
  !*** ./frontend/components/session_form/session_form_container.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _session_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_form */ "./frontend/components/session_form/session_form.jsx");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    user: {
      email: '',
      password: ''
    },
    formType: 'Sign in',
    errors: state.errors
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    processForm: function processForm(user) {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__.login)(user));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_session_form__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/session_form/signup_form.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/session_form/signup_form.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _nav_session_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/session_nav */ "./frontend/components/nav/session_nav.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var SignupForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SignupForm, _React$Component);

  var _super = _createSuper(SignupForm);

  function SignupForm(props) {
    var _this;

    _classCallCheck(this, SignupForm);

    _this = _super.call(this, props);
    _this.state = _this.props.user;
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SignupForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.querySelector('body').style.backgroundColor = '#f3f2ee';
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.processForm(this.state);
      this.props.history.push('/feed');
      this.setState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        pronouns: 'Other',
        headline: 'Software Engineer',
        location_country: 'United States',
        location_city: 'New York',
        about: 'Who goes there'
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_nav_session_nav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "user-signup-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        id: "signup-header"
      }, "Make the most of your professional life"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "session-form-container",
        id: "signup-form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        required: true,
        value: this.state.email,
        onChange: this.update('email'),
        placeholder: "Email"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "password",
        required: true,
        value: this.state.password,
        onChange: this.update('password'),
        placeholder: "Password"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        required: true,
        value: this.state.firstName,
        onChange: this.update('first_name'),
        placeholder: "First Name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        required: true,
        value: this.state.lastName,
        onChange: this.update('last_name'),
        placeholder: "Last Name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "login-footer"
      }, "Already have an account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        id: "join-now-link",
        to: "/login"
      }, "Sign in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "submit",
        className: "submit"
      }, this.props.formType)))))));
    }
  }]);

  return SignupForm;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupForm);

/***/ }),

/***/ "./frontend/components/session_form/signup_form_container.jsx":
/*!********************************************************************!*\
  !*** ./frontend/components/session_form/signup_form_container.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup_form */ "./frontend/components/session_form/signup_form.jsx");




var mapStateToProps = function mapStateToProps(state) {
  return {
    user: {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      pronouns: 'Other',
      headline: 'Software Engineer',
      location_country: 'United States',
      location_city: 'New York',
      about: 'Who goes there'
    },
    formType: 'Sign up',
    errors: state.errors
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    processForm: function processForm(user) {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.signup)(user));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_signup_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/splash/header_container.jsx":
/*!*********************************************************!*\
  !*** ./frontend/components/splash/header_container.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _splash_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash_header */ "./frontend/components/splash/splash_header.jsx");





var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    user: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.logout)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_splash_header__WEBPACK_IMPORTED_MODULE_2__["default"])));

/***/ }),

/***/ "./frontend/components/splash/splash.jsx":
/*!***********************************************!*\
  !*** ./frontend/components/splash/splash.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _session_form_session_form_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../session_form/session_form_container */ "./frontend/components/session_form/session_form_container.jsx");
/* harmony import */ var _nav_splash_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/splash_nav */ "./frontend/components/nav/splash_nav.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Splash = /*#__PURE__*/function (_React$Component) {
  _inherits(Splash, _React$Component);

  var _super = _createSuper(Splash);

  function Splash(props) {
    var _this;

    _classCallCheck(this, Splash);

    _this = _super.call(this, props);
    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(Splash, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.querySelector('body').style.backgroundColor = 'white';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "homepage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_nav_splash_nav__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "homepage-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "homepage-left-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
        className: "homepage-slogan"
      }, "Welcome to your professional community"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_session_form_session_form_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "homepage-login-form"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        className: "homepage-img",
        src: "https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4",
        alt: "homepage-img"
      }))));
    }
  }]);

  return Splash;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Splash);

/***/ }),

/***/ "./frontend/components/splash/splash_container.jsx":
/*!*********************************************************!*\
  !*** ./frontend/components/splash/splash_container.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash */ "./frontend/components/splash/splash.jsx");




var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(user) {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.login)(user));
    },
    logout: function logout() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.logout)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_splash__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/splash/splash_header.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/splash/splash_header.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _search_search_results_index_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/search_results_index_container */ "./frontend/components/search/search_results_index_container.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var SplashHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(SplashHeader, _React$Component);

  var _super = _createSuper(SplashHeader);

  function SplashHeader(props) {
    var _this;

    _classCallCheck(this, SplashHeader);

    _this = _super.call(this, props);
    _this.state = {
      search_input: '',
      searching: false
    };
    _this.searchContainer = _this.searchContainer.bind(_assertThisInitialized(_this));
    _this.activateSearch = _this.activateSearch.bind(_assertThisInitialized(_this));
    _this.toggleSearch = _this.toggleSearch.bind(_assertThisInitialized(_this));
    _this.handleSignout = _this.handleSignout.bind(_assertThisInitialized(_this));
    _this.signoutLinks = _this.signoutLinks.bind(_assertThisInitialized(_this));
    _this.signinLinks = _this.signinLinks.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SplashHeader, [{
    key: "toggleSearch",
    value: function toggleSearch() {
      this.setState({
        searching: !this.state.searching
      });
      var searchContainer = document.querySelector('.search-container');

      if (this.state.searching) {
        searchContainer.classList.remove('searching');
      } else {
        searchContainer.classList.add('searching');
      }
    }
  }, {
    key: "activateSearch",
    value: function activateSearch() {
      this.setState({
        searching: true
      });
      var searchContainer = document.querySelector('.search-container');
      searchContainer.classList.add('searching');
    }
  }, {
    key: "update",
    value: function update(e) {
      this.setState({
        search_input: e.target.value
      });
    }
  }, {
    key: "signoutLinks",
    value: function signoutLinks() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "header-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: "/signup",
        className: "signup-btn"
      }, "Join now"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: "/login",
        className: "login-btn"
      }, "Sign in"));
    }
  }, {
    key: "handleSignout",
    value: function handleSignout() {
      this.props.history.push('/');
      this.props.logout();
    }
  }, {
    key: "signinLinks",
    value: function signinLinks() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "header-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: "/feed"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "home-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHouse,
        className: "fa-header-link"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: "/network"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "home-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUserGroup,
        className: "fa-header-link"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "My Network"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: "/users/".concat(this.props.user.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "profile-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCircleUser,
        className: "fa-header-link"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "My Profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "profile-link",
        onClick: this.handleSignout
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faRightFromBracket,
        className: "fa-header-link"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Sign out"))));
    }
  }, {
    key: "searchContainer",
    value: function searchContainer() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, this.state.searching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "search-overlay",
        onClick: function onClick() {
          return _this2.toggleSearch();
        }
      }) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "search-container",
        onClick: function onClick() {
          return _this2.activateSearch();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMagnifyingGlass,
        className: "fa-header-link"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
        type: "text",
        placeholder: "Search",
        onChange: this.update
      })), this.state.searching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_search_search_results_index_container__WEBPACK_IMPORTED_MODULE_0__["default"], {
        searchInput: this.state.search_input,
        toggleSearch: function toggleSearch() {
          return _this2.toggleSearch();
        }
      }) : "");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "splash-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: "splash-header-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "splash-header-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: this.props.loggedIn ? "/feed" : "/",
        className: "header-logo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLinkedin,
        className: "fa-header-link",
        id: "fa-linkedin"
      })), this.props.loggedIn ? this.searchContainer() : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        id: "splash-header-right-links"
      }, this.props.loggedIn ? this.signinLinks() : this.signoutLinks())));
    }
  }]);

  return SplashHeader;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SplashHeader);

/***/ }),

/***/ "./frontend/components/users/about.jsx":
/*!*********************************************!*\
  !*** ./frontend/components/users/about.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import CreateIcon from '@mui/icons-material/Create';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';




var About = /*#__PURE__*/function (_React$Component) {
  _inherits(About, _React$Component);

  var _super = _createSuper(About);

  function About(props) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, props);
    _this.state = {
      email: _this.props.user.email,
      first_name: _this.props.user.first_name,
      last_name: _this.props.user.last_name,
      location_country: _this.props.user.location_country,
      location_city: _this.props.user.location_city,
      about: '',
      pronouns: _this.props.user.pronouns,
      headline: _this.props.user.headline,
      id: _this.props.user.id
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleUpdate = _this.handleUpdate.bind(_assertThisInitialized(_this));
    _this.editModal = _this.editModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(About, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.updateUser(this.state);
      this.props.toggleEditing();
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate(e) {
      this.setState({
        about: e.target.value
      });
    }
  }, {
    key: "editModal",
    value: function editModal() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "overlay",
        onClick: this.props.toggleEditing
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal",
        id: "edit-about-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Edit about"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "close-create-post-modal",
        onClick: this.props.toggleEditing
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faXmark
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal-header-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
        className: "create-post-form",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Tell us about yourself",
        onChange: this.handleUpdate,
        value: this.state.about
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal-footer",
        id: "about-modal-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        type: "submit",
        className: "create-post-btn"
      }, "Save")))));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, this.props.editing ? this.editModal() : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "experiences-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "experiences-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "experiences-title"
      }, "About"), this.props.user.id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "experience-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "experience-action",
        onClick: this.props.toggleEditing
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPen
      }))) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        id: "user-about"
      }, this.props.user.about)));
    }
  }]);

  return About;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./frontend/components/users/update_user_form.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/users/update_user_form.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var UpdateUserForm = /*#__PURE__*/function (_React$Component) {
  _inherits(UpdateUserForm, _React$Component);

  var _super = _createSuper(UpdateUserForm);

  function UpdateUserForm(props) {
    var _this;

    _classCallCheck(this, UpdateUserForm);

    _this = _super.call(this, props);
    _this.state = {
      first_name: _this.props.current_user.first_name,
      last_name: _this.props.current_user.last_name,
      pronouns: _this.props.current_user.pronouns || 'Other',
      headline: _this.props.current_user.headline || '',
      location_country: _this.props.current_user.location_country || '',
      location_city: _this.props.current_user.location_city || '',
      about: _this.props.current_user.about || '',
      id: _this.props.current_user.id
    }, _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.renderForm = _this.renderForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UpdateUserForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.updateUser(this.state);
      this.setState({
        first_name: '',
        last_name: '',
        pronouns: '',
        headline: '',
        location_country: '',
        location_city: '',
        about: '',
        id: ''
      });
      this.props.toggleEditing();
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "overlay",
        onClick: this.props.toggleEditing
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-experience-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "create-experience-title"
      }, "Edit user into"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "close"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        onClick: this.props.toggleEditing,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faXmark
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "create-exp-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field",
        id: "first-child"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: John",
        value: this.state.first_name,
        onChange: this.update('first_name')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Doe",
        value: this.state.last_name,
        onChange: this.update('last_name')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Pronouns"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
        value: this.state.pronouns,
        onChange: this.update('pronouns')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Please select"
      }, "Please select"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "He/Him"
      }, "He/Him"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "She/Her"
      }, "She/Her"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Non-binary"
      }, "Non-binary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
        value: "Other"
      }, "Other"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Headline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: Software Engineer",
        value: this.state.headline,
        onChange: this.update('headline')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        placeholder: "Ex: United States",
        value: this.state.location_country,
        onChange: this.update('location_country')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "input-field input-field-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
        className: "input-field-name"
      }, "City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "text",
        value: this.state.location_city,
        onChange: this.update('location_city')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("textarea", {
        value: this.state.about,
        onChange: this.update('about')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "submit-experience"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "submit-experience-btn",
        type: "submit"
      }, "Save")))));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.editing && this.renderForm();
    }
  }]);

  return UpdateUserForm;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateUserForm);

/***/ }),

/***/ "./frontend/components/users/update_user_image_form.jsx":
/*!**************************************************************!*\
  !*** ./frontend/components/users/update_user_image_form.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';




var UpdateUserImageForm = /*#__PURE__*/function (_React$Component) {
  _inherits(UpdateUserImageForm, _React$Component);

  var _super = _createSuper(UpdateUserImageForm);

  function UpdateUserImageForm(props) {
    var _this;

    _classCallCheck(this, UpdateUserImageForm);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UpdateUserImageForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      debugger;
      var formData = new FormData();
      formData.append('user[image]', e.target[0].files[0]);
      formData.append('user[first_name]', this.props.user.first_name);
      formData.append('user[last_name]', this.props.user.last_name);
      formData.append('user[location_city]', this.props.user.location_city);
      formData.append('user[location_country]', this.props.user.location_country);
      formData.append('user[headline]', this.props.user.headline);
      formData.append('user[email]', this.props.user.email);
      formData.append('user[pronouns]', this.props.user.pronouns); // formData.append('user[about]', this.props.user.about);

      formData.append('user[id]', this.props.user.id);
      $.ajax({
        url: "/api/users/".concat(this.props.user.id),
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false
      });
      this.props.toggleModal();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "overlay",
        onClick: this.props.toggleModal
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Add photo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "close-create-post-modal",
        onClick: this.props.toggleModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faXmark
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal-header-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
        className: "create-post-form",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "create-post-modal-footer",
        id: "create-post-modal-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
        type: "file",
        accept: "image/png, image/jpeg"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        type: "submit",
        className: "create-post-btn"
      }, "Post")))));
    }
  }]);

  return UpdateUserImageForm;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateUserImageForm);

/***/ }),

/***/ "./frontend/components/users/user.jsx":
/*!********************************************!*\
  !*** ./frontend/components/users/user.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _experiences_experience_index_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../experiences/experience_index_container */ "./frontend/components/experiences/experience_index_container.jsx");
/* harmony import */ var _educations_education_index_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../educations/education_index_container */ "./frontend/components/educations/education_index_container.jsx");
/* harmony import */ var _experiences_create_experience_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../experiences/create_experience_form */ "./frontend/components/experiences/create_experience_form.jsx");
/* harmony import */ var _educations_create_education_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../educations/create_education_form */ "./frontend/components/educations/create_education_form.jsx");
/* harmony import */ var _update_user_image_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update_user_image_form */ "./frontend/components/users/update_user_image_form.jsx");
/* harmony import */ var _update_user_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update_user_form */ "./frontend/components/users/update_user_form.jsx");
/* harmony import */ var _user_index_item_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user_index_item_container */ "./frontend/components/users/user_index_item_container.jsx");
/* harmony import */ var _splash_header_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../splash/header_container */ "./frontend/components/splash/header_container.jsx");
/* harmony import */ var _modals_pending_modal_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/pending_modal_container */ "./frontend/components/modals/pending_modal_container.jsx");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about */ "./frontend/components/users/about.jsx");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
















var User = /*#__PURE__*/function (_React$Component) {
  _inherits(User, _React$Component);

  var _super = _createSuper(User);

  function User(props) {
    var _this;

    _classCallCheck(this, User);

    _this = _super.call(this, props);
    _this.state = {
      pending_modal_hidden: true,
      action_modal_hidden: true,
      adding_experience: false,
      adding_education: false,
      editing_user_image: false,
      editing_about: false,
      editing_user: false
    };
    _this.togglePendingModal = _this.togglePendingModal.bind(_assertThisInitialized(_this));
    _this.toggleActionModal = _this.toggleActionModal.bind(_assertThisInitialized(_this));
    _this.actionModal = _this.actionModal.bind(_assertThisInitialized(_this));
    _this.toggleAddingExperience = _this.toggleAddingExperience.bind(_assertThisInitialized(_this));
    _this.toggleAddingEducation = _this.toggleAddingEducation.bind(_assertThisInitialized(_this));
    _this.toggleEditingUserImage = _this.toggleEditingUserImage.bind(_assertThisInitialized(_this));
    _this.toggleEditingUser = _this.toggleEditingUser.bind(_assertThisInitialized(_this));
    _this.toggleEditingAbout = _this.toggleEditingAbout.bind(_assertThisInitialized(_this));
    _this.renderUser = _this.renderUser.bind(_assertThisInitialized(_this));
    _this.shuffleArray = _this.shuffleArray.bind(_assertThisInitialized(_this));
    _this.numberOfConnections = _this.numberOfConnections.bind(_assertThisInitialized(_this));
    _this.showConnections = _this.showConnections.bind(_assertThisInitialized(_this));
    _this.sendConnect = _this.sendConnect.bind(_assertThisInitialized(_this));
    _this.acceptConnect = _this.acceptConnect.bind(_assertThisInitialized(_this));
    _this.deleteConnect = _this.deleteConnect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(User, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchConnects();
      this.props.fetchUsers();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_11___default()(prevProps.users, this.props.users)) {
        this.setState({
          action_modal_hidden: this.state.action_modal_hidden
        });
      }
    }
  }, {
    key: "numberOfConnections",
    value: function numberOfConnections() {
      var _this2 = this;

      return Object.values(this.props.connects).filter(function (connect) {
        return connect.accepted && (connect.sender_id === _this2.props.user.id || connect.receiver_id === _this2.props.user.id);
      }).length;
    }
  }, {
    key: "showConnections",
    value: function showConnections() {
      if (this.props.user.id === this.props.current_user.id) {
        this.props.history.push('/network');
      }
    }
  }, {
    key: "toggleEditingUser",
    value: function toggleEditingUser() {
      this.setState({
        editing_user: !this.state.editing_user,
        action_modal_hidden: true
      });
    }
  }, {
    key: "toggleAddingExperience",
    value: function toggleAddingExperience() {
      this.setState({
        adding_experience: !this.state.adding_experience,
        action_modal_hidden: true
      });
    }
  }, {
    key: "toggleAddingEducation",
    value: function toggleAddingEducation() {
      this.setState({
        adding_education: !this.state.adding_education,
        action_modal_hidden: true
      });
    }
  }, {
    key: "toggleEditingUserImage",
    value: function toggleEditingUserImage() {
      this.setState({
        editing_user_image: !this.state.editing_user_image,
        action_modal_hidden: true
      });
    }
  }, {
    key: "toggleEditingAbout",
    value: function toggleEditingAbout() {
      this.setState({
        editing_about: !this.state.editing_about,
        action_modal_hidden: true
      });
    }
  }, {
    key: "toggleActionModal",
    value: function toggleActionModal() {
      this.setState({
        action_modal_hidden: !this.state.action_modal_hidden
      });
    }
  }, {
    key: "togglePendingModal",
    value: function togglePendingModal() {
      this.setState({
        pending_modal_hidden: !this.state.pending_modal_hidden
      });
    }
  }, {
    key: "actionModal",
    value: function actionModal() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "profile-action-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "profile-action",
        onClick: this.toggleAddingExperience
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faPlus
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, "Add experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "profile-action",
        onClick: this.toggleAddingEducation
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faPlus
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, "Add education")));
    }
  }, {
    key: "sendConnect",
    value: function sendConnect() {
      this.props.createConnect({
        sender_id: this.props.current_user.id,
        receiver_id: this.props.user.id,
        pending: true,
        accepted: false
      });
    }
  }, {
    key: "acceptConnect",
    value: function acceptConnect() {
      var _this3 = this;

      var pendingConnects = Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this3.props.current_user.id && connect.receiver_id === _this3.props.user.id || connect.sender_id === _this3.props.user.id && connect.receiver_id === _this3.props.current_user.id;
      });

      if (pendingConnects.length > 0) {
        var updatedConnect = Object.assign({}, pendingConnects[0], {
          pending: false,
          accepted: true
        });
        this.props.updateConnect(updatedConnect);
      }
    }
  }, {
    key: "deleteConnect",
    value: function deleteConnect() {
      var _this4 = this;

      var filteredConnects = Object.values(this.props.connects).filter(function (connect) {
        return connect.accepted && connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id;
      });

      if (filteredConnects.length > 0) {
        this.props.deleteConnect(filteredConnects[0]);
      }
    }
  }, {
    key: "shuffleArray",
    value: function shuffleArray(arr) {
      var currentIndex = arr.length,
          randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        var _ref = [arr[randomIndex], arr[currentIndex]];
        arr[currentIndex] = _ref[0];
        arr[randomIndex] = _ref[1];
      }

      return arr;
    }
  }, {
    key: "renderUser",
    value: function renderUser() {
      var _this5 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_splash_header_container__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-profile"
      }, this.state.editing_user_image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_update_user_image_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
        toggleModal: function toggleModal() {
          return _this5.toggleEditingUserImage();
        },
        user: this.props.user
      }) : "", this.state.adding_experience ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_experiences_create_experience_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
        toggleAdding: function toggleAdding() {
          return _this5.toggleAddingExperience();
        },
        adding: this.state.adding_experience,
        createExperience: this.props.createExperience
      }) : "", this.state.adding_education ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_educations_create_education_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
        toggleAdding: function toggleAdding() {
          return _this5.toggleAddingEducation();
        },
        adding: this.state.adding_education,
        createEducation: this.props.createEducation
      }) : "", this.state.editing_user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_update_user_form__WEBPACK_IMPORTED_MODULE_6__["default"], {
        toggleEditing: function toggleEditing() {
          return _this5.toggleEditingUser();
        },
        current_user: this.props.current_user,
        editing: this.state.editing_user,
        updateUser: this.props.updateUser
      }) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-intro",
        id: "user-intro"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("img", {
        src: "https://media-exp1.licdn.com/dms/image/C5616AQFm9VPk7Nd1cQ/profile-displaybackgroundimage-shrink_350_1400/0/1635706270087?e=1667433600&v=beta&t=-GG8YaHFDO0dW6kTxGKSS9yEXHnX56jGMCffQn1cslk",
        alt: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-intro-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-profile-photo",
        onClick: this.toggleEditingUserImage
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-profile-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-profile-photo"
      })), this.props.user.id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        id: "edit-user",
        onClick: this.toggleEditingUser
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faPen
      })) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-intro-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-intro-name"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", null, "".concat(this.props.user.first_name, " ").concat(this.props.user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
        className: "user-intro-pronouns"
      }, "(".concat(this.props.user.pronouns, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-intro-contents-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-intro-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-intro-headline"
      }, this.props.user.headline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-intro-location"
      }, "".concat(this.props.user.location_city, ", ").concat(this.props.user.location_country)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-connection-count",
        onClick: function onClick() {
          return _this5.showConnections();
        }
      }, this.numberOfConnections(), " connections"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-intro-actions"
      }, this.props.current_user.id === this.props.user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
        id: "add-profile-section",
        onClick: this.toggleActionModal
      }, "Add Profile Section") : Object.values(this.props.connects).filter(function (connect) {
        return connect.sender_id === _this5.props.current_user.id && connect.receiver_id === _this5.props.user.id || connect.sender_id === _this5.props.user.id && connect.receiver_id === _this5.props.current_user.id;
      }).length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
        id: "add-profile-section",
        onClick: function onClick() {
          return _this5.sendConnect();
        }
      }, "Connect") : Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this5.props.current_user.id && connect.receiver_id === _this5.props.user.id || connect.sender_id === _this5.props.user.id && connect.receiver_id === _this5.props.current_user.id;
      }).length > 0 && Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this5.props.current_user.id && connect.receiver_id === _this5.props.user.id || connect.sender_id === _this5.props.user.id && connect.receiver_id === _this5.props.current_user.id;
      })[0].sender_id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
        id: "pending-user",
        onClick: function onClick() {
          return _this5.togglePendingModal();
        }
      }, "Pending") : Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && (connect.sender_id === _this5.props.current_user.id && connect.receiver_id === _this5.props.user.id || connect.sender_id === _this5.props.user.id && connect.receiver_id === _this5.props.current_user.id);
      }).length > 0 && Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && (connect.sender_id === _this5.props.current_user.id && connect.receiver_id === _this5.props.user.id || connect.sender_id === _this5.props.user.id && connect.receiver_id === _this5.props.current_user.id);
      })[0].receiver_id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
        id: "add-profile-section",
        onClick: function onClick() {
          return _this5.acceptConnect();
        }
      }, "Accept") : Object.values(this.props.connects).filter(function (connect) {
        return connect.accepted && connect.sender_id === _this5.props.current_user.id && connect.receiver_id === _this5.props.user.id || connect.sender_id === _this5.props.user.id && connect.receiver_id === _this5.props.current_user.id;
      }).length === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
        id: "add-profile-section",
        onClick: function onClick() {
          return _this5.deleteConnect();
        }
      }, "Disconnect") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
        id: "add-profile-section",
        onClick: function onClick() {
          return _this5.deleteConnect();
        }
      }, "Disconnect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("button", {
        id: "user-more-section"
      }, "More")), this.state.action_modal_hidden ? "" : this.actionModal()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "user-intro-education"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("img", {
        className: "user-education-photo",
        src: "https://i.postimg.cc/pdtrHFTQ/image.png",
        alt: "user-education"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
        className: "school-name"
      }, "Hunter College")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_about__WEBPACK_IMPORTED_MODULE_10__["default"], {
        user: this.props.user,
        current_user: this.props.current_user,
        editing: this.state.editing_about,
        toggleEditing: function toggleEditing() {
          return _this5.toggleEditingAbout();
        },
        updateUser: this.props.updateUser
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_experiences_experience_index_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        user: this.props.user,
        current_user: this.props.current_user
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_educations_education_index_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
        user: this.props.user,
        current_user: this.props.current_user
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        className: "other-users"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
        id: "other-users-logo-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
        id: "other-users-logo"
      }, "People you may know")), Object.values(this.props.users).map(function (user, i) {
        if (i < 5 && user.id !== _this5.props.current_user.id) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_user_index_item_container__WEBPACK_IMPORTED_MODULE_7__["default"], {
            user: user,
            key: user + i
          });
        }
      })))), this.state.pending_modal_hidden ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_modals_pending_modal_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        current_user: this.props.current_user,
        user: this.props.user,
        togglePendingModal: function togglePendingModal() {
          return _this5.togglePendingModal();
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.user && this.renderUser();
    }
  }]);

  return User;
}((react__WEBPACK_IMPORTED_MODULE_12___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./frontend/components/users/user_container.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/users/user_container.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/connect_actions */ "./frontend/actions/connect_actions.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _actions_experience_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/experience_actions */ "./frontend/actions/experience_actions.js");
/* harmony import */ var _actions_education_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/education_actions */ "./frontend/actions/education_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ "./frontend/components/users/user.jsx");








var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    current_user: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.userId],
    users: state.entities.users,
    connects: state.entities.connects
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createExperience: function createExperience(experience) {
      return dispatch((0,_actions_experience_actions__WEBPACK_IMPORTED_MODULE_2__.createExperience)(experience));
    },
    createEducation: function createEducation(education) {
      return dispatch((0,_actions_education_actions__WEBPACK_IMPORTED_MODULE_3__.createEducation)(education));
    },
    fetchUsers: function fetchUsers() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.fetchUsers)());
    },
    updateUser: function updateUser(user) {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.updateUser)(user));
    },
    createConnect: function createConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__.createConnect)(connect));
    },
    deleteConnect: function deleteConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__.deleteConnect)(connect));
    },
    updateConnect: function updateConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__.updateConnect)(connect));
    },
    fetchConnects: function fetchConnects() {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__.fetchConnects)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(_user__WEBPACK_IMPORTED_MODULE_5__["default"])));

/***/ }),

/***/ "./frontend/components/users/user_index_item.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/users/user_index_item.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modals_pending_modal_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/pending_modal_container */ "./frontend/components/modals/pending_modal_container.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var UserIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(UserIndexItem, _React$Component);

  var _super = _createSuper(UserIndexItem);

  function UserIndexItem(props) {
    var _this;

    _classCallCheck(this, UserIndexItem);

    _this = _super.call(this, props);
    _this.state = {
      pending_modal_hidden: true
    };
    _this.togglePendingModal = _this.togglePendingModal.bind(_assertThisInitialized(_this));
    _this.acceptConnect = _this.acceptConnect.bind(_assertThisInitialized(_this));
    _this.deleteConnect = _this.deleteConnect.bind(_assertThisInitialized(_this));
    _this.sendConnect = _this.sendConnect.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UserIndexItem, [{
    key: "togglePendingModal",
    value: function togglePendingModal() {
      this.setState({
        pending_modal_hidden: !this.state.pending_modal_hidden
      });
    }
  }, {
    key: "sendConnect",
    value: function sendConnect() {
      this.props.createConnect({
        sender_id: this.props.current_user.id,
        receiver_id: this.props.user.id,
        pending: true,
        accepted: false
      });
    }
  }, {
    key: "acceptConnect",
    value: function acceptConnect() {
      var _this2 = this;

      var pendingConnects = Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this2.props.current_user.id && connect.receiver_id === _this2.props.user.id || connect.sender_id === _this2.props.user.id && connect.receiver_id === _this2.props.current_user.id;
      });

      if (pendingConnects.length > 0) {
        var updatedConnect = Object.assign({}, pendingConnects[0], {
          pending: false,
          accepted: true
        });
        this.props.updateConnect(updatedConnect);
      }
    }
  }, {
    key: "deleteConnect",
    value: function deleteConnect() {
      var _this3 = this;

      var filteredConnects = Object.values(this.props.connects).filter(function (connect) {
        return connect.accepted && connect.sender_id === _this3.props.current_user.id && connect.receiver_id === _this3.props.user.id || connect.sender_id === _this3.props.user.id && connect.receiver_id === _this3.props.current_user.id;
      });

      if (filteredConnects.length > 0) {
        this.props.deleteConnect(filteredConnects[0]);
      }

      this.setState({
        pending_modal_hidden: true
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.history.push("/users/".concat(this.props.user.id));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "other-user-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "other-user-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "other-user-img",
        onClick: this.handleClick
      }, Object.keys(this.props.user.image).length < 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        src: "https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png",
        alt: "user-photo"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        src: this.props.user.image,
        alt: "user-photo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "other-user-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "other-user-name-contents"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "other-user-name",
        onClick: this.handleClick
      }, "".concat(this.props.user.first_name, " ").concat(this.props.user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "other-user-pronouns-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "other-user-pronouns"
      }, "(".concat(this.props.user.pronouns, ")")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "other-user-headline"
      }, this.props.user.headline), Object.values(this.props.connects).filter(function (connect) {
        return connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id;
      }).length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "connect",
        onClick: function onClick() {
          return _this4.sendConnect();
        }
      }, "Connect") : Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id;
      }).length > 0 && Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id;
      })[0].sender_id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "connect",
        id: "pending",
        onClick: function onClick() {
          return _this4.togglePendingModal();
        }
      }, "Pending") : Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && (connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id);
      }).length > 0 && Object.values(this.props.connects).filter(function (connect) {
        return connect.pending && (connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id);
      })[0].receiver_id === this.props.current_user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "connect",
        onClick: function onClick() {
          return _this4.acceptConnect();
        }
      }, "Accept") : Object.values(this.props.connects).filter(function (connect) {
        return connect.accepted && connect.sender_id === _this4.props.current_user.id && connect.receiver_id === _this4.props.user.id || connect.sender_id === _this4.props.user.id && connect.receiver_id === _this4.props.current_user.id;
      }).length === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "connect",
        onClick: function onClick() {
          return _this4.deleteConnect();
        }
      }, "Disconnect") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
        className: "connect",
        onClick: function onClick() {
          return _this4.deleteConnect();
        }
      }, "Disconnect"))), this.state.pending_modal_hidden ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_modals_pending_modal_container__WEBPACK_IMPORTED_MODULE_0__["default"], {
        user: this.props.user,
        current_user: this.props.current_user,
        togglePendingModal: function togglePendingModal() {
          return _this4.togglePendingModal();
        }
      }));
    }
  }]);

  return UserIndexItem;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserIndexItem);

/***/ }),

/***/ "./frontend/components/users/user_index_item_container.jsx":
/*!*****************************************************************!*\
  !*** ./frontend/components/users/user_index_item_container.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _user_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_index_item */ "./frontend/components/users/user_index_item.jsx");
/* harmony import */ var _actions_connect_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/connect_actions */ "./frontend/actions/connect_actions.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    current_user: state.entities.users[state.session.id],
    connects: state.entities.connects
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createConnect: function createConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_2__.createConnect)(connect));
    },
    deleteConnect: function deleteConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_2__.deleteConnect)(connect));
    },
    updateConnect: function updateConnect(connect) {
      return dispatch((0,_actions_connect_actions__WEBPACK_IMPORTED_MODULE_2__.updateConnect)(connect));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_user_index_item__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/widgets/widgets.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/widgets/widgets.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Widgets = /*#__PURE__*/function (_React$Component) {
  _inherits(Widgets, _React$Component);

  var _super = _createSuper(Widgets);

  function Widgets(props) {
    _classCallCheck(this, Widgets);

    return _super.call(this, props);
  }

  _createClass(Widgets, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "widgets"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "widgets-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "widgets-top-a"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "widgets-developer-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "widgets-headline"
      }, "About the developer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "widgets-para"
      }, "Michael Shen is a full stack software engineer who's proficient in JavaScript, Ruby, React, Redux, and Ruby on Rails. He's currently looking for opportunities to learn and sharpen his skill set as a software engineer.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "widgets-top-b"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "widgets-headline"
      }, "Connect with the developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "widget-links"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "fa-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
        href: "https://github.com/shenshuu",
        target: "_blank",
        className: "fa"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSquareGithub,
        className: "font-awesome-icon",
        id: "fa-github"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Github")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "fa-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
        href: "https://www.linkedin.com/in/michael-s-b7698b239/",
        target: "_blank",
        className: "fa"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLinkedin,
        className: "font-awesome-icon",
        id: "fa-linkedin"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "LinkedIn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "fa-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
        href: "https://shenshuu.github.io/",
        target: "_blank",
        className: "fa"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBriefcase,
        className: "font-awesome-icon",
        id: "fa-briefcase"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Portfolio"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "widgets-bottom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "project-description"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "widgets-headline"
      }, "Purpose"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "widgets-para"
      }, "The purpose of this project is to improve one's knowledge of how different technologies interact with each other and how they can be wielded to create something greater than the sum of its parts.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "technologies-used"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "widgets-headline"
      }, "Technologies Implemented"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "technology"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "technology-a"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faReact,
        className: "font-awesome-icon-a",
        id: "fa-react"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "tech-role"
      }, "Frontend:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "tech-stack"
      }, "React, Redux")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "technology"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "technology-a"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faGem,
        className: "font-awesome-icon-a",
        id: "fa-ruby"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "tech-role"
      }, "Backend:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "tech-stack"
      }, "Ruby on Rails")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "technology"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "technology-a"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faDatabase,
        className: "font-awesome-icon-a",
        id: "fa-postgresql"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "tech-role"
      }, "Database:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: "tech-stack"
      }, "PostgreSQL")))));
    }
  }]);

  return Widgets;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widgets);

/***/ }),

/***/ "./frontend/reducers/comments_reducer.js":
/*!***********************************************!*\
  !*** ./frontend/reducers/comments_reducer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/comment_actions */ "./frontend/actions/comment_actions.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");



var commentsReducer = function commentsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = Object.assign({}, state);

  switch (action.type) {
    case _actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_COMMENTS:
      return action.comments;

    case _actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.LOGOUT_USER:
      return {};

    case _actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_COMMENTS:
      return {};

    case _actions_comment_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_COMMENT:
      delete nextState[action.comment.id];
      return nextState;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsReducer);

/***/ }),

/***/ "./frontend/reducers/connects_reducer.js":
/*!***********************************************!*\
  !*** ./frontend/reducers/connects_reducer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/connect_actions */ "./frontend/actions/connect_actions.js");


var connectsReducer = function connectsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = Object.assign({}, state);

  switch (action.type) {
    case _actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_CONNECTS:
      return action.connects;

    case _actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_CONNECT:
      nextState[action.connect.id] = action.connect;
      return nextState;

    case _actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_CONNECT:
      delete nextState[action.connect.id];
      return nextState;

    case _actions_connect_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_CONNECTS:
      return {};

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectsReducer);

/***/ }),

/***/ "./frontend/reducers/educations_reducer.js":
/*!*************************************************!*\
  !*** ./frontend/reducers/educations_reducer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_education_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/education_actions */ "./frontend/actions/education_actions.js");


var educationsReducer = function educationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = Object.assign({}, state);

  switch (action.type) {
    case _actions_education_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_EDUCATIONS:
      return action.educations;

    case _actions_education_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_EDUCATION:
      nextState[action.education.id] = action.education;
      return nextState;

    case _actions_education_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_EDUCATION:
      delete nextState[action.education.id];
      return nextState;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (educationsReducer);

/***/ }),

/***/ "./frontend/reducers/entities_reducer.js":
/*!***********************************************!*\
  !*** ./frontend/reducers/entities_reducer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users_reducer */ "./frontend/reducers/users_reducer.js");
/* harmony import */ var _posts_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts_reducer */ "./frontend/reducers/posts_reducer.js");
/* harmony import */ var _comments_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments_reducer */ "./frontend/reducers/comments_reducer.js");
/* harmony import */ var _likes_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes_reducer */ "./frontend/reducers/likes_reducer.js");
/* harmony import */ var _experiences_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experiences_reducer */ "./frontend/reducers/experiences_reducer.js");
/* harmony import */ var _educations_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./educations_reducer */ "./frontend/reducers/educations_reducer.js");
/* harmony import */ var _connects_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connects_reducer */ "./frontend/reducers/connects_reducer.js");








var entitiesReducer = (0,redux__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({
  users: _users_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  posts: _posts_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  comments: _comments_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  likes: _likes_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  experiences: _experiences_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  educations: _educations_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  connects: _connects_reducer__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (entitiesReducer);

/***/ }),

/***/ "./frontend/reducers/errors_reducer.js":
/*!*********************************************!*\
  !*** ./frontend/reducers/errors_reducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_errors_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session_errors_reducer */ "./frontend/reducers/session_errors_reducer.js");


var errorsReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  session: _session_errors_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorsReducer);

/***/ }),

/***/ "./frontend/reducers/experiences_reducer.js":
/*!**************************************************!*\
  !*** ./frontend/reducers/experiences_reducer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_experience_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/experience_actions */ "./frontend/actions/experience_actions.js");


var experiencesReducer = function experiencesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = Object.assign({}, state);

  switch (action.type) {
    case _actions_experience_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_EXPERIENCES:
      return action.experiences;

    case _actions_experience_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_EXPERIENCE:
      nextState[action.experience.id] = action.experience;
      return nextState;

    case _actions_experience_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_EXPERIENCE:
      delete nextState[action.experience.id];
      return nextState;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (experiencesReducer);

/***/ }),

/***/ "./frontend/reducers/likes_reducer.js":
/*!********************************************!*\
  !*** ./frontend/reducers/likes_reducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_like_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/like_actions */ "./frontend/actions/like_actions.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");



var likesReducer = function likesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = Object.assign({}, state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.LOGOUT_USER:
      return {};

    case _actions_like_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_LIKES:
      return action.likes;

    case _actions_like_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_LIKE:
      nextState[action.like.id] = action.like;
      return nextState;

    case _actions_like_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_LIKES:
      // debugger;
      var postLikes = {};
      var likes = Object.values(state);

      for (var i = 0; i < likes.length; i++) {
        if (likes[i].likeable_type === 'Post') {
          postLikes[likes[i].id] = likes[i];
        }
      }

      return postLikes;

    case _actions_like_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_LIKE:
      delete nextState[action.like.id];
      return nextState;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesReducer);

/***/ }),

/***/ "./frontend/reducers/posts_reducer.js":
/*!********************************************!*\
  !*** ./frontend/reducers/posts_reducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/post_actions */ "./frontend/actions/post_actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var postsReducer = function postsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = Object.assign({}, state);

  switch (action.type) {
    case _actions_post_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_POSTS:
      return _objectSpread(_objectSpread({}, state), action.posts);

    case _actions_post_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_POST:
      nextState[action.post.id] = action.post;
      return nextState;

    case _actions_post_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_POSTS:
      return {};

    case _actions_post_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_POST:
      delete nextState[action.post.id];
      return nextState;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postsReducer);

/***/ }),

/***/ "./frontend/reducers/root_reducer.js":
/*!*******************************************!*\
  !*** ./frontend/reducers/root_reducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _entities_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities_reducer */ "./frontend/reducers/entities_reducer.js");
/* harmony import */ var _session_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_reducer */ "./frontend/reducers/session_reducer.js");
/* harmony import */ var _errors_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors_reducer */ "./frontend/reducers/errors_reducer.js");




var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
  entities: _entities_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  session: _session_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  errors: _errors_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./frontend/reducers/session_errors_reducer.js":
/*!*****************************************************!*\
  !*** ./frontend/reducers/session_errors_reducer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");


var sessionErrorsReducer = function sessionErrorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_USER:
      return [];

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_ERRORS:
      return action.errors;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionErrorsReducer);

/***/ }),

/***/ "./frontend/reducers/session_reducer.js":
/*!**********************************************!*\
  !*** ./frontend/reducers/session_reducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");

var _nullUser = {
  id: null
};

var sessionReducer = function sessionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _nullUser;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_USER:
      return {
        id: action.user.id
      };

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_USER:
      return _nullUser;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionReducer);

/***/ }),

/***/ "./frontend/reducers/users_reducer.js":
/*!********************************************!*\
  !*** ./frontend/reducers/users_reducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_USERS:
      return action.users;

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_USER:
      return Object.assign({}, state, _defineProperty({}, action.user.id, action.user));

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersReducer);

/***/ }),

/***/ "./frontend/store/store.js":
/*!*********************************!*\
  !*** ./frontend/store/store.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/root_reducer */ "./frontend/reducers/root_reducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);





var configureStore = function configureStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_0__["default"], preloadedState, (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"], (redux_logger__WEBPACK_IMPORTED_MODULE_1___default())));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configureStore);

/***/ }),

/***/ "./frontend/util/comment_api_util.js":
/*!*******************************************!*\
  !*** ./frontend/util/comment_api_util.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComment": () => (/* binding */ createComment),
/* harmony export */   "deleteComment": () => (/* binding */ deleteComment),
/* harmony export */   "fetchComments": () => (/* binding */ fetchComments),
/* harmony export */   "updateComment": () => (/* binding */ updateComment)
/* harmony export */ });
var fetchComments = function fetchComments(comments) {
  return $.ajax({
    url: '/api/comments',
    method: 'GET',
    data: {
      comments: comments
    }
  });
};
var createComment = function createComment(comment) {
  return $.ajax({
    url: '/api/comments',
    method: 'POST',
    data: {
      comment: comment
    }
  });
};
var updateComment = function updateComment(comment) {
  return $.ajax({
    url: "/api/comments/".concat(comment.id),
    method: 'PATCH',
    data: {
      comment: comment
    }
  });
};
var deleteComment = function deleteComment(comment) {
  return $.ajax({
    url: "/api/comments/".concat(comment.id),
    method: 'DELETE',
    data: {
      comment: comment
    }
  });
};

/***/ }),

/***/ "./frontend/util/connect_api_util.js":
/*!*******************************************!*\
  !*** ./frontend/util/connect_api_util.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConnect": () => (/* binding */ createConnect),
/* harmony export */   "deleteConnect": () => (/* binding */ deleteConnect),
/* harmony export */   "fetchConnects": () => (/* binding */ fetchConnects),
/* harmony export */   "updateConnect": () => (/* binding */ updateConnect)
/* harmony export */ });
var fetchConnects = function fetchConnects(connects) {
  return $.ajax({
    url: '/api/connects',
    method: 'GET',
    data: {
      connects: connects
    }
  });
};
var createConnect = function createConnect(connect) {
  return $.ajax({
    url: '/api/connects',
    method: 'POST',
    data: {
      connect: connect
    }
  });
};
var updateConnect = function updateConnect(connect) {
  return $.ajax({
    url: "/api/connects/".concat(connect.id),
    method: 'PATCH',
    data: {
      connect: connect
    }
  });
};
var deleteConnect = function deleteConnect(connect) {
  return $.ajax({
    url: "/api/connects/".concat(connect.id),
    method: 'DELETE'
  });
};

/***/ }),

/***/ "./frontend/util/education_api_util.js":
/*!*********************************************!*\
  !*** ./frontend/util/education_api_util.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEducation": () => (/* binding */ createEducation),
/* harmony export */   "deleteEducation": () => (/* binding */ deleteEducation),
/* harmony export */   "fetchEducations": () => (/* binding */ fetchEducations),
/* harmony export */   "updateEducation": () => (/* binding */ updateEducation)
/* harmony export */ });
var fetchEducations = function fetchEducations(educations) {
  return $.ajax({
    url: '/api/educations',
    method: 'GET',
    data: {
      educations: educations
    }
  });
};
var updateEducation = function updateEducation(education) {
  return $.ajax({
    url: "/api/educations/".concat(education.id),
    method: 'PATCH',
    data: {
      education: education
    }
  });
};
var createEducation = function createEducation(education) {
  return $.ajax({
    url: '/api/educations',
    method: 'POST',
    data: {
      education: education
    }
  });
};
var deleteEducation = function deleteEducation(education) {
  return $.ajax({
    url: "/api/educations/".concat(education.id),
    method: 'DELETE',
    data: {
      education: education
    }
  });
};

/***/ }),

/***/ "./frontend/util/experience_api_util.js":
/*!**********************************************!*\
  !*** ./frontend/util/experience_api_util.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createExperience": () => (/* binding */ createExperience),
/* harmony export */   "deleteExperience": () => (/* binding */ deleteExperience),
/* harmony export */   "fetchExperiences": () => (/* binding */ fetchExperiences),
/* harmony export */   "updateExperience": () => (/* binding */ updateExperience)
/* harmony export */ });
var createExperience = function createExperience(experience) {
  return $.ajax({
    url: '/api/experiences',
    method: 'POST',
    data: {
      experience: experience
    }
  });
};
var deleteExperience = function deleteExperience(experience) {
  return $.ajax({
    url: "/api/experiences/".concat(experience.id),
    method: 'DELETE',
    data: {
      experience: experience
    }
  });
};
var updateExperience = function updateExperience(experience) {
  return $.ajax({
    url: "/api/experiences/".concat(experience.id),
    method: 'PATCH',
    data: {
      experience: experience
    }
  });
};
var fetchExperiences = function fetchExperiences(experiences) {
  return $.ajax({
    url: '/api/experiences',
    method: 'GET',
    data: {
      experiences: experiences
    }
  });
};

/***/ }),

/***/ "./frontend/util/like_api_util.js":
/*!****************************************!*\
  !*** ./frontend/util/like_api_util.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLike": () => (/* binding */ createLike),
/* harmony export */   "deleteLike": () => (/* binding */ deleteLike),
/* harmony export */   "fetchLikes": () => (/* binding */ fetchLikes)
/* harmony export */ });
var fetchLikes = function fetchLikes(likes) {
  return $.ajax({
    url: '/api/likes',
    method: 'GET',
    data: {
      likes: likes
    }
  });
};
var createLike = function createLike(like) {
  return $.ajax({
    url: "/api/likes/",
    method: 'POST',
    data: {
      like: like
    }
  });
};
var deleteLike = function deleteLike(like) {
  return $.ajax({
    url: "/api/likes/".concat(like.id),
    method: 'DELETE',
    data: {
      like: like
    }
  });
};

/***/ }),

/***/ "./frontend/util/post_api_util.js":
/*!****************************************!*\
  !*** ./frontend/util/post_api_util.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPost": () => (/* binding */ createPost),
/* harmony export */   "deletePost": () => (/* binding */ deletePost),
/* harmony export */   "fetchPosts": () => (/* binding */ fetchPosts),
/* harmony export */   "updatePost": () => (/* binding */ updatePost)
/* harmony export */ });
var fetchPosts = function fetchPosts(posts) {
  return $.ajax({
    url: '/api/posts',
    method: 'GET',
    data: {
      posts: posts
    }
  });
};
var createPost = function createPost(post) {
  return $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: {
      post: post
    }
  });
};
var deletePost = function deletePost(post) {
  return $.ajax({
    url: "/api/posts/".concat(post.id),
    method: 'DELETE',
    data: {
      post: post
    }
  });
};
var updatePost = function updatePost(post) {
  return $.ajax({
    url: "/api/posts/".concat(post.id),
    method: 'PATCH',
    data: {
      post: post
    }
  });
};

/***/ }),

/***/ "./frontend/util/route_util.jsx":
/*!**************************************!*\
  !*** ./frontend/util/route_util.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoute": () => (/* binding */ AuthRoute),
/* harmony export */   "ProtectedRoute": () => (/* binding */ ProtectedRoute)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





var Auth = function Auth(_ref) {
  var path = _ref.path,
      Component = _ref.component,
      exact = _ref.exact,
      loggedIn = _ref.loggedIn;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    exact: exact,
    render: function render(props) {
      return loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
        to: "/feed"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, props);
    }
  });
};

var Protected = function Protected(_ref2) {
  var path = _ref2.path,
      Component = _ref2.component,
      exact = _ref2.exact,
      loggedIn = _ref2.loggedIn;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    exact: exact,
    render: function render(props) {
      return loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
        to: "/"
      });
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

var AuthRoute = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, null)(Auth));
var ProtectedRoute = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, null)(Protected));

/***/ }),

/***/ "./frontend/util/session_api_util.js":
/*!*******************************************!*\
  !*** ./frontend/util/session_api_util.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUsers": () => (/* binding */ fetchUsers),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "signup": () => (/* binding */ signup),
/* harmony export */   "updateUser": () => (/* binding */ updateUser)
/* harmony export */ });
var fetchUsers = function fetchUsers(users) {
  return $.ajax({
    url: '/api/users',
    method: 'GET',
    users: users
  });
};
var updateUser = function updateUser(user) {
  return $.ajax({
    url: "/api/users/".concat(user.id),
    method: 'PATCH',
    data: {
      user: user
    }
  });
};
var signup = function signup(user) {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {
      user: user
    }
  });
};
var login = function login(user) {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {
      user: user
    }
  });
};
var logout = function logout() {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};

/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBrowserHistory": () => (/* binding */ createBrowserHistory),
/* harmony export */   "createHashHistory": () => (/* binding */ createHashHistory),
/* harmony export */   "createLocation": () => (/* binding */ createLocation),
/* harmony export */   "createMemoryHistory": () => (/* binding */ createMemoryHistory),
/* harmony export */   "createPath": () => (/* binding */ createPath),
/* harmony export */   "locationsAreEqual": () => (/* binding */ locationsAreEqual),
/* harmony export */   "parsePath": () => (/* binding */ parsePath)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0,resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0,value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/path-to-regexp/index.js'");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react-icons/hi/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/hi/index.esm.js ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/react-icons/hi/index.esm.js'");

/***/ }),

/***/ "./node_modules/react-icons/io/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/io/index.esm.js ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/react-icons/io/index.esm.js'");

/***/ }),

/***/ "./node_modules/react-icons/ti/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/ti/index.esm.js ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/react-icons/ti/index.esm.js'");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRouter": () => (/* binding */ BrowserRouter),
/* harmony export */   "HashRouter": () => (/* binding */ HashRouter),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "MemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.MemoryRouter),
/* harmony export */   "NavLink": () => (/* binding */ NavLink),
/* harmony export */   "Prompt": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Prompt),
/* harmony export */   "Redirect": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Redirect),
/* harmony export */   "Route": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Route),
/* harmony export */   "Router": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Router),
/* harmony export */   "StaticRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.StaticRouter),
/* harmony export */   "Switch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Switch),
/* harmony export */   "generatePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.generatePath),
/* harmony export */   "matchPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath),
/* harmony export */   "useHistory": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useHistory),
/* harmony export */   "useLocation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useLocation),
/* harmony export */   "useParams": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useParams),
/* harmony export */   "useRouteMatch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useRouteMatch),
/* harmony export */   "withRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.withRouter)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_5__.createBrowserHistory)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

if (true) {
  BrowserRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
    forceRefresh: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_7__["default"])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_5__.createHashHistory)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

if (true) {
  HashRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_7__["default"])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : 0;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_5__.createLocation)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = (react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef);

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <Link> outside a <Router>") : 0 : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = (0,history__WEBPACK_IMPORTED_MODULE_5__.createPath)(context.location) === (0,history__WEBPACK_IMPORTED_MODULE_5__.createPath)(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func), prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any)
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    replace: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    target: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = (react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef);

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <NavLink> outside a <Router>") : 0 : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, style, activeStyle);
    }

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["page", "step", "location", "date", "time", "true", "false"]);
  NavLink.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    activeStyle: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
    className: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)]),
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    isActive: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    style: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)])
  });
}


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": () => (/* binding */ MemoryRouter),
/* harmony export */   "Prompt": () => (/* binding */ Prompt),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "StaticRouter": () => (/* binding */ StaticRouter),
/* harmony export */   "Switch": () => (/* binding */ Switch),
/* harmony export */   "__HistoryContext": () => (/* binding */ historyContext),
/* harmony export */   "__RouterContext": () => (/* binding */ context),
/* harmony export */   "generatePath": () => (/* binding */ generatePath),
/* harmony export */   "matchPath": () => (/* binding */ matchPath),
/* harmony export */   "useHistory": () => (/* binding */ useHistory),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useRouteMatch": () => (/* binding */ useRouteMatch),
/* harmony export */   "withRouter": () => (/* binding */ withRouter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mini-create-react-context */ "./node_modules/react-router/node_modules/mini-create-react-context/dist/esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-is */ "./node_modules/react-router/node_modules/react-is/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_2__["default"])();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        _this._pendingLocation = location;
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;

    if (this.unlisten) {
      // Any pre-mount location changes have been captured at
      // this point, so unregister the listener.
      this.unlisten();
    }

    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function (location) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location
          });
        }
      });
    }

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Router.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),
    history: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object.isRequired),
    staticContext: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(prevProps.history === this.props.history, "You cannot change <Router history>") : 0;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_10__.createMemoryHistory)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array),
    initialIndex: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node)
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : 0;
  };
}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Prompt> outside a <Router>") : 0 : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)]);
  Prompt.propTypes = {
    when: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default().compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Redirect> outside a <Router>") : 0 : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(prevProps.to);

        if (!(0,history__WEBPACK_IMPORTED_MODULE_10__.locationsAreEqual)(prevLocation, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    from: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    to: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Route> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : children : component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : null);
    });
  };

  return Route;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node)]),
    component: function component(props, propName) {
      if (props[propName] && !(0,react_is__WEBPACK_IMPORTED_MODULE_5__.isValidElementType)(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
    path: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), prop_types__WEBPACK_IMPORTED_MODULE_8___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_8___default().string))]),
    render: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool)
  };

  Route.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_10__.createPath)(location);
}

function staticHandler(methodName) {
  return function () {
      true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You cannot %s with <StaticRouter>", methodName) : 0 ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  StaticRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
    location: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : 0;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <Switch> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1___default().Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Switch.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You should not use <" + displayName + " /> outside a <Router>") : 0 : void 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7___default()(C, Component);
}

var useContext = (react__WEBPACK_IMPORTED_MODULE_1___default().useContext);
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useHistory()") : 0 : void 0;
  }

  return useContext(historyContext);
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useLocation()") : 0 : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useParams()") : 0 : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__["default"])(false, "You must use React >= 16.8 in order to use useRouteMatch()") : 0 : void 0;
  }

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ "./node_modules/react-router/node_modules/mini-create-react-context/dist/esm/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/mini-create-react-context/dist/esm/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            (0,tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired), _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext) || createReactContext;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/react-router/node_modules/react-is/cjs/react-is.development.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/react-is/cjs/react-is.development.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-router/node_modules/react-is/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-router/node_modules/react-is/index.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-router/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.2.0';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):0}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof __webpack_require__.g?"undefined":N(__webpack_require__.g))&&__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": () => (/* binding */ ActionTypes),
/* harmony export */   "applyMiddleware": () => (/* binding */ applyMiddleware),
/* harmony export */   "bindActionCreators": () => (/* binding */ bindActionCreators),
/* harmony export */   "combineReducers": () => (/* binding */ combineReducers),
/* harmony export */   "compose": () => (/* binding */ compose),
/* harmony export */   "createStore": () => (/* binding */ createStore),
/* harmony export */   "legacy_createStore": () => (/* binding */ legacy_createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/resolve-pathname/esm/resolve-pathname.js'");

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/tiny-invariant/dist/tiny-invariant.esm.js'");

/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warning);


/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/michaelshen/Desktop/projects/LoopedIn/node_modules/value-equal/esm/value-equal.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./frontend/entry.jsx ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store */ "./frontend/store/store.js");
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/root */ "./frontend/components/root.jsx");
/* harmony import */ var _actions_connect_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/connect_actions */ "./frontend/actions/connect_actions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






window.fetchConnects = _actions_connect_actions__WEBPACK_IMPORTED_MODULE_4__.fetchConnects;
window.createConnect = _actions_connect_actions__WEBPACK_IMPORTED_MODULE_4__.createConnect;
window.deleteConnect = _actions_connect_actions__WEBPACK_IMPORTED_MODULE_4__.deleteConnect;
window.deleteConnects = _actions_connect_actions__WEBPACK_IMPORTED_MODULE_4__.deleteConnects;
document.addEventListener('DOMContentLoaded', function () {
  var store;

  if (window.currentUser) {
    var preloadedState = {
      entities: {
        users: _defineProperty({}, window.currentUser.id, window.currentUser)
      },
      session: {
        id: window.currentUser.id
      }
    };
    store = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__["default"])(preloadedState);
    delete window.currentUser;
  } else {
    store = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }

  window.store = store;
  var root = document.getElementById('root');
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_root__WEBPACK_IMPORTED_MODULE_3__["default"], {
    store: store
  }), root);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map