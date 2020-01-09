import React from 'react';
import Router from './router';
import TopNav from './pages/components/topNav/TopNav';

export default function App() {
    return (
        <>
            <TopNav></TopNav>
            <Router></Router>
        </>
    );
}