import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <CssBaseline/>
      <Navbar />
      <h1>App</h1>
      <Outlet/>
    </div>
  );
}

export default App;