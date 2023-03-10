import { applyMiddleware, createStore,compose } from 'redux';
import { blogReducer } from '../reducers/blogreducer';

const configureStore=() => {
    const store = createStore(
        blogReducer
    )
    return store;
}

export default configureStore;