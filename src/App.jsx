import "./app.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AdminTable from "./admin/AdminTable";
import CreateBook from "./admin/CreateBook";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/books" element={<Books/>}/>
          <Route path="/admin/dashboard" element={<AdminTable/>}/>
          <Route path="/admin/dashboard/create-book" element={<CreateBook/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
