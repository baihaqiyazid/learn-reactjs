import React from "react";
import LoginPage from "./pages/login";
import AuthLayout from "./components/Layouts/AuthLayouts";
import FormLogin from "./components/Fragments/FormLogin";
import Button from "./components/Elements/Button";
import RegisterPage from "./pages/register";

function App() {
  return (


   <div className="flex bg-white min-h-screen items-center justify-center">
      <RegisterPage />
   </div>
  )
}

export default App