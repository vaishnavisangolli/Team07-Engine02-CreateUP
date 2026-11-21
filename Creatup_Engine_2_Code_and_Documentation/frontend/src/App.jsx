
import { useState } from "react";
import {
  UserRound,
  Building2,
  Eye,
  EyeOff,
  BriefcaseBusiness,
  Sparkles,
  ArrowRight
} from "lucide-react";
import "./App.css";

function App() {
  const [role, setRole] = useState("individual");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");

  // LOGIN REDIRECT FUNCTION
  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "individual") {
      window.location.href = "/user_index.html";
    } else if (role === "organization") {
      window.location.href = "/org_index.html";
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="brand">
          <div className="brand-icon">
            <BriefcaseBusiness size={25} />
          </div>
          <span>Talent<span className="brand-highlight">Connect</span></span>
        </div>

        <div className="hero-content">
          <div className="hero-tag">
            <Sparkles size={15} />
            Discover Your Potential
          </div>

          <h1>
            Where Talent
            <br />
            Meets <span>Opportunity.</span>
          </h1>

          <p>
            Showcase your skills, discover exciting opportunities
            and connect with organizations that value your talent.
          </p>

          <div className="hero-features">
            <div><span>✦</span> Showcase your portfolio</div>
            <div><span>✦</span> Discover exciting opportunities</div>
            <div><span>✦</span> Connect with leading organizations</div>
          </div>
        </div>

        <div className="left-footer">
          Empowering talent. Creating opportunities.
        </div>
      </div>

      <div className="login-right">
        <div className="login-container">
          <div className="mobile-brand">
            <BriefcaseBusiness size={25} />
            <span>Talent<span className="brand-highlight">Connect</span></span>
          </div>

          <div className="welcome">
            <span className="welcome-label">WELCOME BACK</span>
            <h2>Sign in to your account</h2>
            <p>Enter your details to continue your journey.</p>
          </div>

          <form onSubmit={handleLogin}>
            <label className="field-label">I am joining as</label>

            <div className="role-selection">
              <button
                type="button"
                className={`role-card ${role === "individual" ? "active" : ""}`}
                onClick={() => setRole("individual")}
              >
                <UserRound size={21} />
                <span>Individual</span>
                <small>Showcase your talent</small>
              </button>

              <button
                type="button"
                className={`role-card ${role === "organization" ? "active" : ""}`}
                onClick={() => setRole("organization")}
              >
                <Building2 size={21} />
                <span>Organization</span>
                <small>Find talented people</small>
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <span className="forgot">Forgot password?</span>
            </div>

            <button type="submit" className="login-button">
              Sign In <ArrowRight size={18} />
            </button>

            {message && <p className="status-message">{message}</p>}
          </form>

          <div className="signup-text">
            Don't have an account? <span>Create Account</span>
          </div>

          <div className="login-footer">
            © 2026 TalentConnect. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
