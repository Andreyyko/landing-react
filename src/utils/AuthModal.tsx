import React, { useState } from "react";

interface AuthModalProps {
  onLogin: (userData: { email: string }) => void;
  onClose: () => void;
  isSignUp: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onLogin, onClose, isSignUp: initialSignUp }) => {
  const [isSignUp, setIsSignUp] = useState(initialSignUp);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    agreeToPolicy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp && !formData.agreeToPolicy) {
      alert("You must agree to the Privacy Policy");
      return;
    }
    onLogin({ email: formData.fullName });
  };

  const toggleAuthMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <div className="modal-header">
          <h2 className="modal-header_title">{isSignUp ? "Sign Up" : "Sign In"}</h2>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>

        {isSignUp && (
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Name Surname"
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Mail"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        {isSignUp && (
          <div className="form-group">
            <label htmlFor="phone">Your Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
            />
          </div>
        )}

        {isSignUp && (
          <div className="policy-agreement">
            <input
              type="checkbox"
              id="agreeToPolicy"
              name="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeToPolicy">
              Yes, I have read and agree to the Privacy Policy
            </label>
          </div>
        )}

        <button className="modal-button" type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>

        <p className="switch-auth">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="switch-auth-link" onClick={toggleAuthMode}>
            {isSignUp ? "Log in" : "Sign up"}
          </span>
        </p>
      </form>
    </div>
  );
};
