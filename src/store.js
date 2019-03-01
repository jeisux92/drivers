import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const myReducer = (state = 0, action) => {
    switch (action.type) {
        case 'sumar':
            return state + 1;
        case 'restar':
            return state - 1;
        default:
            return state;
    }
}
const loading = (state = false, action) => {
    switch (action.type) {
        case 'mostrar':
            return !state;
        default:
            return state;
    }
}
const reducer = combineReducers({
    form: reduxFormReducer,
    myReducer,
    loading// mounted under "form"
});
const store = createStore(reducer);

export default store;
