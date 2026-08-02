import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-primary-700/20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-2xl">🔮</span>
              <span className="font-mystical text-lg gradient-text font-bold">MysticAI</span>
            </div>
            <p className="text-gray-500 text-sm">AI-powered Palmistry & Tarot Intelligence Platform for spiritual insights and personal growth.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/palm-reading" className="text-gray-400 hover:text-primary-400 transition-colors">Palm Reading</a></li>
              <li><a href="/tarot-reading" className="text-gray-400 hover:text-primary-400 transition-colors">Tarot Reading</a></li>
              <li><a href="/profile" className="text-gray-400 hover:text-primary-400 transition-colors">My Profile</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">📧 support@mysticai.com</span></li>
              <li><span className="text-gray-400">🌐 www.mysticai.com</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-primary-700/10 text-center">
          <p className="text-gray-600 text-xs">© 2024 Palmistry & Tarot Intelligence Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;