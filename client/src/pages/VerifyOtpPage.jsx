import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MailCheckIcon, LoaderIcon, KeyIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function VerifyOtpPage() {
  const [otp, setOtp] = useState("");
  const { verifyOtp, isVerifyingOtp, signupEmail } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signupEmail) {
      return alert("No pending verification found. Please sign up again or log in.");
    }
    verifyOtp({ email: signupEmail, otp }, navigate);
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-xl h-auto">
        <BorderAnimatedContainer>
          <div className="w-full p-8 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <MailCheckIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                <h2 className="text-2xl font-bold text-slate-200 mb-2">Verify Your Email</h2>
                <p className="text-slate-400">
                  {signupEmail 
                    ? `Enter the 6-digit code sent to ${signupEmail}` 
                    : "Enter the OTP sent to your email."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="auth-input-label">One Time Password (OTP)</label>
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

                <button className="auth-btn" type="submit" disabled={isVerifyingOtp}>
                  {isVerifyingOtp ? (
                    <LoaderIcon className="w-full h-5 animate-spin text-center" />
                  ) : (
                    "Verify Email"
                  )}
                </button>
              </form>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}
export default VerifyOtpPage;
