import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./componentes/PrivateRoute";
import { DashboardView } from "./views/Dashboard";
import { HomeView } from "./views/Home";
import { LoginView } from "./views/Login";
import { NotFoundView } from "./views/NotFound";
import { StudioDetailView } from "./views/StudioDetail";
import { StudiosView } from "./views/Studios";
import { RegisterView } from "./views/Register";
import { SchedulingView } from "./views/Scheduling";



function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/studios' element={<StudiosView />} />
      <Route path='*' element={<NotFoundView />} />
      <Route path='/portal/login' element={<LoginView />} />
      <Route path='/schedulings/studioId/:id' element={<StudioDetailView />} />
      <Route path='/portal/register' element={<RegisterView />} />
      <Route path='/portal' 
      element={
        // <PrivateRoute>
          <DashboardView />
        // </PrivateRoute>
      } 
      />
      <Route path='/portal/schedulings' 
      element={
        // <PrivateRoute>
          <SchedulingView />
        // </PrivateRoute>
      }/>
    </Routes>
  )
}

export default App;
