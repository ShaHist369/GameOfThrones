import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import mainReducer from "./redux/reducers/mainReducer";


// const rootReducer = combineReducers({
//     articles: articlesReducer,
//     comments: commentsReducer,
//     tabs: tabsReducer,
//     auth: auth,
//     form: formReducer
// })

const store = createStore(mainReducer,  applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
