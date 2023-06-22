import React from 'react';
import Employe from '../Pages/Employe';
import { Routes, Route } from 'react-router-dom';

const Routing = (): JSX.Element => {

    return (
        <Routes>
            <Route path="/" element={<Employe />} />
        </Routes>
    )
}

export default Routing;