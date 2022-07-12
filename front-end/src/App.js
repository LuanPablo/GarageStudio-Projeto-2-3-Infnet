import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views/Home";
import { NotFoundView } from "./views/NotFound";
import { StudiosView } from "./views/Studios";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/studios' element={<StudiosView />} />
      <Route path='*' element={<NotFoundView />} />
      
    </Routes>
  )
}

export default App;
