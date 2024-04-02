import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;