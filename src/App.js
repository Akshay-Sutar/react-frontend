import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddItemPage from "./pages/AddItemPage";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="*" element={<Login />}></Route>
          {!isAuthenticated && <Route path="*" element={<Login />}></Route>}
          {isAuthenticated && (
            <Route path="/" element={<Dashboard />} exact></Route>
          )}
          {isAuthenticated && (
            <Route path="/dashboard" element={<Dashboard />}></Route>
          )}
          {isAuthenticated && (
            <Route path="/addItem" element={<AddItemPage />}></Route>
          )}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
