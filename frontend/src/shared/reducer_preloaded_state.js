
// const searchResults = JSON.parse(localStorage.getItem('searchResults') || '[]');
// const searchTerm = JSON.parse(localStorage.getItem('searchTerm') || ' "" ');


export const USER_STATE = { isAuthenticated: false }

export const GIPH_STATE = { trending: [], searchResults: {}, searchTerm: '', favorites: { array: [] } };

export const LOADING_STATE = false;

export const ERRORS_STATE = {};