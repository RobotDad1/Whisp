import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MailIcon, LoaderIcon, KeyIcon, LockIcon, KeyRoundIcon } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { forgotPassword, resetPassword, isSendingReset, isResettingPassword } = useAuthStore();
  const navigate = useNavigate();

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    const success = await forgotPassword({ email });
    if (success) {
      setStep(2);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    await resetPassword({ email, otp, newPassword }, navigate);
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-#0b141a">
      <div className="relative w-full max-w-xl h-auto">
        <BorderAnimatedContainer>
          <div className="w-full p-8 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <KeyRoundIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                <h2 className="text-2xl font-bold text-slate-200 mb-2">Reset Password</h2>
                <p className="text-slate-400">
                  {step === 1 ? "Enter your email to receive an OTP." : "Enter the OTP and your new password."}
                </p>
              </div>

              {step === 1 ? (
                <form onSubmit={handleRequestOtp} className="space-y-6">
                  <div>
                    <label className="auth-input-label">Email Address</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        placeholder="youremail@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <button className="auth-btn" type="submit" disabled={isSendingReset}>
                    {isSendingReset ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Send OTP"
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleResetPassword} className="space-y-6">
                  <div>
                    <label className="auth-input-label">OTP Code</label>
                    <div className="relative">
                      <KeyIcon className="auth-input-icon" />
                      <input
                        type="text"
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="input text-center tracking-[0.2em] font-mono text-lg"
                        placeholder="123456"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="auth-input-label">New Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="input"
                        placeholder="Minimum 6 characters"
                        required
                      />
                    </div>
                  </div>

                  <button className="auth-btn" type="submit" disabled={isResettingPassword}>
                    {isResettingPassword ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Reset Password"
                    )}
                  </button>
                </form>
              )}

              <div className="mt-6 text-center">
                <Link to="/login" className="auth-link">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
