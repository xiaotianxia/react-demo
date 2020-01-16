import React from 'react';
import Router from './router';
import TopNav from './pages/components/topNav/TopNav';
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <TopNav></TopNav>
            <div className="main">
                <Router></Router>
            </div>
        </Provider>
    );
}