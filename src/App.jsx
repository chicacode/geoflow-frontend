import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecoverPassword from "./pages/RecoverPassword";
import NewPassword from "./pages/NewPassword";
import ActivationAccount from "./pages/ActivationAccount";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recover-password" element={<RecoverPassword />} />
          <Route path="recover-password/:token" element={<NewPassword />} />
          <Route path="activation/:id" element={<ActivationAccount />} />
        </Route>

        {/* private */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
