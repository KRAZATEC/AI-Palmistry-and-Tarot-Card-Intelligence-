import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { GOOGLE_AUTH_URL, GITHUB_AUTH_URL } from '../../utils/constants';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(formData.email, formData.password);
      toast.success('Welcome back! ✨');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900 stars-bg px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-float">🔮</div>
          <h1 className="font-mystical text-3xl gradient-text font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-400">Enter the mystical realm of insights</p>
        </div>

        <div className="glass-card p-8 mystic-glow">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  className="mystic-input pl-10" placeholder="your@email.com" required />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password}
                  onChange={handleChange} className="mystic-input pl-10 pr-10" placeholder="Enter your password"
                  required minLength={6} />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full mystic-btn disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Signing in...</span>
                </span>
              ) : 'Sign In ✨'}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-primary-700/30"></div>
            <span className="px-4 text-sm text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-primary-700/30"></div>
          </div>

          <div className="space-y-3">
            <a href={GOOGLE_AUTH_URL} className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-gray-600/30 rounded-xl hover:bg-dark-800/50 transition-all text-gray-300">
              <FcGoogle size={20} /><span>Google</span>
            </a>
            <a href={GITHUB_AUTH_URL} className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-gray-600/30 rounded-xl hover:bg-dark-800/50 transition-all text-gray-300">
              <BsGithub size={20} /><span>GitHub</span>
            </a>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account? <Link to="/register" className="text-primary-400 hover:text-primary-300 font-medium">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;