import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} exact></Route>
          <Route path="/dashboard" element={<Dashboard />} exact></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
