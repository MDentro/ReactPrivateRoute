import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Privateroute1 from "./pages/PrivateRoute1";
import Privateroute2 from "./pages/PrivateRoute2";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

//https://blog.utsavkumar.tech/private-routes-in-react-router-v6
// https://codesandbox.io/s/privateroute-v6-latest-solution-1-io0gu?from-embed=&file=/src/components/AuthProvider.js:0-446

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/privateroute1"
          element={
            <PrivateRoute>
              <Privateroute1 />
            </PrivateRoute>
          }
        />
        <Route
          path="/privateroute2"
          element={
            <PrivateRoute>
              <Privateroute2 />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
