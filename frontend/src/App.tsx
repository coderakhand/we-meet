import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Attend from "./pages/Attend";
import Error from './pages/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/create" element={<Create />} />
          <Route path="/attend" element={<Attend />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
