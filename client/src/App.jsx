import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/index";
import Dashboard from "./pages/Dashboard/index";
import HomePage from "./pages/Home/index";
import ComplaintForm from "./pages/Form/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<ComplaintForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
