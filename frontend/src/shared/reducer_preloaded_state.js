
const searchResults = JSON.parse(localStorage.getItem('searchResults') || '{}');
const searchTerm = localStorage.getItem('searchTerm') || '';


export const USER_STATE = { isAuthenticated: false }

export const GIPH_STATE = { trending: {}, searchResults, searchTerm, favorites: {} };

export const LOADING_STATE = false;

export const ERRORS_STATE = {};
