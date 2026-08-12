import React, { useState } from 'react';
import { X, User, Lock, Mail, ArrowRight, Leaf, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'signin' | 'login';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, mode: initialMode, onClose }) => {
  const [mode, setMode] = useState<'signin' | 'login'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoggedIn(true);
    setTimeout(() => {
      onClose();
      setLoggedIn(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="bg-[#113123] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-300 hover:text-white p-1 rounded-lg bg-emerald-900/50"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/30 flex items-center justify-center text-emerald-300">
              <Leaf className="w-4 h-4" />
            </div>
            <span className="text-xl font-bold font-sans text-white">Cirql</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white">
            {mode === 'login' ? 'Welcome Back' : 'Create Cirql Account'}
          </h3>
          <p className="text-xs text-emerald-200/80 mt-1">
            {mode === 'login'
              ? 'Access your Eco-Coins balance, recycle history & payouts.'
              : 'Join over 2.5 million users turning e-waste into value.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {loggedIn ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Successfully Logged In!</h4>
              <p className="text-xs text-slate-500">Redirecting to your Cirql eco dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signin' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1b4332] hover:bg-[#113123] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{mode === 'login' ? 'Sign In to Account' : 'Create Free Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
                {mode === 'login' ? (
                  <p>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signin')}
                      className="font-bold text-emerald-800 hover:underline"
                    >
                      Sign Up
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="font-bold text-emerald-800 hover:underline"
                    >
                      Login
                    </button>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
