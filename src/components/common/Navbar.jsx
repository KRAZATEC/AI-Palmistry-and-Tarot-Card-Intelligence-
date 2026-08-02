import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROLE_LABELS, ROLES } from '../../utils/constants';
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavItems = () => {
    if (!user) return [];
    const role = user.role;
    if (role === ROLES.ADMIN) {
      return [
        { path: '/admin/dashboard', label: 'Dashboard' },
        { path: '/admin/users', label: 'Users' },
        { path: '/admin/analytics', label: 'Analytics' },
      ];
    }
    if (role === ROLES.SPIRITUAL_CONSULTANT) {
      return [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/consultations', label: 'Consultations' },
        { path: '/profile', label: 'Profile' },
      ];
    }
    if (role === ROLES.TAROT_READER) {
      return [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/palm-reading', label: 'Palm Reading' },
        { path: '/tarot-reading', label: 'Tarot Reading' },
        { path: '/profile', label: 'Profile' },
      ];
    }
    return [
      { path: '/dashboard', label: 'Dashboard' },
      { path: '/palm-reading', label: 'Palm Reading' },
      { path: '/tarot-reading', label: 'Tarot Reading' },
      { path: '/profile', label: 'Profile' },
    ];
  };

  const navItems = getNavItems();

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-primary-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🔮</span>
            <span className="font-mystical text-xl gradient-text font-bold">MysticAI</span>
          </Link>

          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-primary-600/20 text-primary-300'
                      : 'text-gray-400 hover:text-white hover:bg-dark-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="hidden md:flex items-center space-x-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary-900/30 text-primary-300 border border-primary-700/30">
                    {ROLE_LABELS[user.role] || user.role}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-mystic-500 flex items-center justify-center text-white text-sm font-bold">
                      {user.username?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <span className="text-sm text-gray-300">{user.username}</span>
                  </div>
                </div>
                <button
                  onClick={() => { logout(); navigate('/login'); }}
                  className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-900/20 transition-all"
                  title="Logout"
                >
                  <FiLogOut size={18} />
                </button>
              </>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link to="/login" className="mystic-btn-outline text-sm">Login</Link>
                <Link to="/register" className="mystic-btn text-sm">Register</Link>
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-primary-700/20">
          <div className="px-4 py-3 space-y-1">
            {isAuthenticated ? (
              <>
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-sm ${location.pathname === item.path ? 'bg-primary-600/20 text-primary-300' : 'text-gray-400 hover:text-white'}`}>
                    {item.label}
                  </Link>
                ))}
                <button onClick={() => { logout(); navigate('/login'); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-red-400 text-sm">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2 text-gray-300" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                <Link to="/register" className="block px-4 py-2 text-primary-400" onClick={() => setMobileMenuOpen(false)}>Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;