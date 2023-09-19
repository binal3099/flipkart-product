import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import {persistStore} from 'redux-persist';
import {persistReducer} from 'redux-persist';
import { Cart_Addreducer } from './Services/Reducer/Cart_AddReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const sagamiddle = createSagaMiddleware();

const persistConfig = {
    key: 'myroot',
    storage,
    blacklist : ['counter_Reducer']
  }

// const persister = persistReducer(persistConfig)

const store = createStore (
    Cart_Addreducer
    ,composeEnhancers(applyMiddleware(thunk))
    // ,composeEnhancers(applyMiddleware(sagamiddle))
)
const persistor = persistStore(store)

// sagamiddle.run(CountWatcher)

// export  {persistor};
export default store