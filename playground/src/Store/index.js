import { createStore } from 'redux';

const initialState = {
    posts: [],
    signUpModal: {
        open: false,
    }
};

const reducer = (state = initialState, action) => {

    if (action.type === 'ADD_POST') {
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
        })
    }
    return state;
}

const store = createStore(reducer);

export default store;