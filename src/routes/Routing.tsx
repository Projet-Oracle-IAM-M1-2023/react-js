import React from 'react';
import Employe from '../Pages/Employe';
import Job from '../Pages/Job';
import { Routes, Route } from 'react-router-dom';

const Routing = (): JSX.Element => {

    return (
        <Routes>
            <Route path="/" element={<Employe />} />
            <Route path="/job" element={<Job />} />
        </Routes>
    )
}

export default Routing;