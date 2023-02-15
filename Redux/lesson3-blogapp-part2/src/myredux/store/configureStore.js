import { applyMiddleware, createStore,compose } from 'redux';
import thunk from 'redux-thunk';
import { blogReducer } from '../reducers/blogreducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore=() => {
    const store = createStore(
        blogReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;
}

export default configureStore;