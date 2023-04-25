import { Routes } from "react-router-dom";
import "./App.css";
import {
  PrivateRouter,
  PublicRouter,
} from "./routes/protectedRoutes/ProtectedRoutes";

function App() {
  return (
    <Routes>
      {PrivateRouter()}
      {PublicRouter()}
    </Routes>
  );
}

export default App;
