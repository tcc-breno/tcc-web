import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RequireAuth } from '../components/auth';
import { LoginPage }   from "../pages/user/login/index";
import { VariablePage} from "../pages/variavel/index";
import { Home } from '../pages/home';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login"  element={ <LoginPage/> } />
          <Route path="/var"    element={ <VariablePage/> } />

          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  )
}
