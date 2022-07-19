import { Route, Routes } from "react-router-dom";
import { DashboardView } from "./views/Dashboard";
import { HomeView } from "./views/Home";
import { NotFoundView } from "./views/NotFound";
import { StudioDetailView } from "./views/StudioDetail";
import { StudiosView } from "./views/Studios";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/studios' element={<StudiosView />} />
      <Route path='*' element={<NotFoundView />} />
      <Route path='/studios/:id' element={<StudioDetailView />} />
      <Route path='/portal' element={<DashboardView/>} />
    </Routes>
  )
}

export default App;
