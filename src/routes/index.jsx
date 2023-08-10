import React  from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RequireAuth } from '../components/auth';

import { Home } from '../pages/home';

import { LoginPage }   from "../pages/user/login/index";
import { CreationPage }   from "../pages/user/creation/index";

import { VariablePage} from "../pages/variavel/index";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path="/login"     element={<RequireAuth><Home /></RequireAuth>} /> */}

          <Route path="/var"    element={ <VariablePage/> } />

          <Route path="/"           element={ <Home/> } />
          <Route path="/login"      element={ <LoginPage/> } />
          <Route path="/registro"   element={ <CreationPage/> } />
      </Routes>
    </BrowserRouter>
  )
}

