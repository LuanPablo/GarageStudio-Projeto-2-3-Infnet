import { Route, Routes, useParams } from "react-router-dom";
import { PrivateRoute } from "./componentes/PrivateRoute";
import { DashboardView } from "./views/Dashboard";
import { HomeView } from "./views/Home";
import { LoginView } from "./views/Login";
import { NotFoundView } from "./views/NotFound";
import { StudioDetailView } from "./views/StudioDetail";
import { StudiosView } from "./views/Studios";
import { RegisterView } from "./views/Register";
import { AdminSchedulingsView } from "./views/AdminScheduling/AdminSchedulingView";
import { AdminAddSchedulingView } from "./views/AdminAddScheduling/AdminAddSchedulingView";
import { AdminEditSchedulingView } from "./views/AdminEditScheduling/AdminEditSchedulingView";


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/studios' element={<StudiosView />} />
      <Route path='*' element={<NotFoundView />} />
      <Route path='/portal/login' element={<LoginView />} />
      <Route path='/portal/schedulings/studioId/:id'
        element={
          <PrivateRoute>
            <StudioDetailView />
          </PrivateRoute>
        }
      />
      <Route path='/portal/register' element={<RegisterView />} />

      <Route path='/portal'
        element={
          <PrivateRoute>
            <DashboardView />
          </PrivateRoute>
        }
      />
      <Route path='/portal/schedulings'
        element={
          <PrivateRoute userTypes={[1]}>
            <AdminSchedulingsView />
          </PrivateRoute>
        } />
      <Route path='/portal/newscheduling'
        element={
          <PrivateRoute userTypes={[1]}>
            <AdminAddSchedulingView />
          </PrivateRoute>
        } />
        <Route path='/portal/scheduling/:id'
        element={
          <PrivateRoute>
            <AdminEditSchedulingView />
          </PrivateRoute>
        } />
    </Routes>
  )
}

export default App;
