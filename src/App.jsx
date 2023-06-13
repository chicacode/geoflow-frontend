import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from './layouts/ProtectedRoute';
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecoverPassword from "./pages/RecoverPassword";
import NewPassword from "./pages/NewPassword";
import ActivationAccount from "./pages/ActivationAccount";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";

import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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

          <Route path="/projects" element={<ProtectedRoute />}>
            <Route index element={<Projects />} />
            <Route path="create-project" element={<NewProject />}  />

          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
