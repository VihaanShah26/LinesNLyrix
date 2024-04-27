// App.js
import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Home from './components/Home';


const App = () => {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" component={Home} />
        //     </Routes>
        // </BrowserRouter>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
