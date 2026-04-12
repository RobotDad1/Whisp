import {  Route, Routes, Navigate } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import VerifyOtpPage from "./pages/VerifyOtpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";

import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();
  const { theme } = useThemeStore();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader />;

  return (
    <div data-theme={theme} className={`group/theme min-h-screen relative flex items-center justify-center p-4 overflow-hidden transition-all duration-300 ease-in-out
      ${theme === 'dark' ? 'bg-[#0a1014]' : ''}
      ${theme === 'whatsapp' ? 'bg-[#efeae2]' : ''}
      ${theme === 'glass' ? 'bg-slate-900' : ''}
    `}>
      {/* Grid .. Glow of blue and pink oval only for glass */}
      {theme === 'glass' && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px]" />
          <div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px] " />
        </>
      )}
      
      {/* Subtle green ambient glow for Dark Theme */}
      {theme === 'dark' && (
        <>
          <div className="absolute top-1/4 left-1/4 size-[670px] bg-[#00a884] opacity-50 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 size-[570px] bg-[#00a884] opacity-[50] blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        </>
      )}
      {theme === 'whatsapp' && (
        <>
          <div className="absolute top-1/4 left-1/4 size-[670px] bg-[#00a884] opacity-50 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 size-[570px] bg-[#00a884] opacity-[50] blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        </>
      )}

      <Routes>
        <Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
        <Route path="/verify-otp" element={!authUser ? <VerifyOtpPage /> : <Navigate to={"/"} />} />
        <Route path="/forgot-password" element={!authUser ? <ForgotPasswordPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;