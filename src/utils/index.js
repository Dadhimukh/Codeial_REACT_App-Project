   const API_ROOT = 'http://codeial.codingninjas.com:8000/api/v2/';

   // doc url - https://www.notion.so/aakashcn/Codeial-API-docs-3a4d0b5a42c54f0a94d951a42aabc13f
   export const API_URLS = {
   login: () => `${API_ROOT}/users/login`,
   signup: () => `${API_ROOT}/users/signup`,
   posts: (page, limit) => `${API_ROOT}/posts?page=${page}&limit=${limit}`,
   createPost: (content) => `${API_ROOT}/posts/create`,
   createFriendship: (userId) =>
      `${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
   friends: () => `${API_ROOT}/friendship/fetch_user_friends`,
   removeFriend: (userId) =>
      `${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
   toggleLike: (itemId, itemType) =>
      `${API_ROOT}/likes/toggle?likeable_id=${itemId}&likeable_type=${itemType}`, // itemType is 'Post'/'Comment'
   getLikes: (itemId, itemType) =>
      `${API_ROOT}/likes?likeable_id=${itemId}&likeable_type=${itemType}`,
   comment: () => `${API_ROOT}/comments`, // POST - create, GET - list of comments
   deleteComment: (commentId) => `${API_ROOT}/comments?comment_id=${commentId}`,
   editUser: () => `${API_ROOT}/users/edit`,
   userInfo: (userId) => `${API_ROOT}/users/${userId}`,
   searchUsers: (searchText) => `${API_ROOT}/users/search?text=${searchText}`,
   };

   export const LOCALSTORAGE_TOKEN_KEY = '__codeial_tokan__';