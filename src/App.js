import React, { Component } from 'react';


//importujemy STore
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';//compose potrzebny do Redux devTools
import { Provider } from 'react-redux'; //dostarcza dostęp do magazynu Store i okala wszystko co renderje się w App


//importujemy thunka
import thunk from 'redux-thunk';



import './App.css';
import Container from './Container'
import CounterSuperButton from './CounterSuperButton'
import counterReducer from './logic';//mozemy sobie tak nazwać bo funkcja reducer zostatła eksportowana defaultowo a nie w sposób nazwany


const reducers = combineReducers({
    counter: counterReducer
});
//to trzeba przepisać żeby działała wtyczka redux devtools
const store = createStore(reducers, applyMiddleware(thunk)//, compose(
    //window.devToolsExtension ? window.devToolsExtension() : f => f,
    //)
);


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
                <Container />
                <CounterSuperButton />
            </div>
        </Provider>
    );
  }
}

export default App;
