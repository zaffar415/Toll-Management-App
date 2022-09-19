import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from './layouts/AppLayout';
import Tolls from './screens/Tolls';
import Vehicles from './screens/Vehicles';

const App = () => {
  return (
    <BrowserRouter>      
        <AppLayout>
          <Routes>
            {/* Route Group */}
            <Route path="/"> 
              {/* Route */}
              <Route exact path="/" element={<Vehicles />} />
              <Route path="/tolls" element={<Tolls />} />
            </Route>
          </Routes>
        </AppLayout>
    </BrowserRouter>
  )
}

export default connect(null)(App);