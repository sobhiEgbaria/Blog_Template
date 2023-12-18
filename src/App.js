import { LandingPage } from "./pages/landingPge/LandingPage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      {/* <LandingPage /> */}
    </>
  );
}

export default App;
