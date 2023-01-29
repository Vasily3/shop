import React from 'react'
import './scss/style.scss'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductPage from './pages/ProductPage/ProductPage'
import {Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<ProductListPage/>} />
            <Route path={'/product/:id'} element={<ProductPage/>}/>
        </Routes>
    );
};

export default App;
