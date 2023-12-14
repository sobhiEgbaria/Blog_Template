import { Outlet } from "react-router-dom";
import { DailyDigestPage } from "./pages/DailyDigestPage";
import { NotFound } from "./components/notFoundPage/notFoundPage";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
