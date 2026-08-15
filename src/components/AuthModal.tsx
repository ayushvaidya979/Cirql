import React, { useState, useEffect } from 'react';
import {
  X, User, Lock, Mail, ArrowRight, Leaf,
  CheckCircle2, Phone, MapPin, Eye, EyeOff, ArrowLeft, Shield
} from 'lucide-react';
import { api } from '../services/api';

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface AuthModalProps {
  isOpen: boolean;
  mode: 'signin' | 'login';
  onClose: () => void;
  onAuthSuccess?: (user: any) => void;
}

/* ─────────────────────────────────────────────
   BRAND ICONS
───────────────────────────────────────────── */
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="none">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const GoogleColorLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.46.07 2.45.82 3.3.88 1.28-.28 2.5-1.05 3.85-.96 1.64.12 2.89.79 3.69 2.01-3.26 2.01-2.78 6.59.49 7.9-.59 1.49-1.38 2.95-3.33 5.05zm-4.5-17.2c.31-1.88 1.75-3.43 3.52-3.56.28 2.07-1.87 3.65-3.52 3.56z" />
  </svg>
);

/* ─────────────────────────────────────────────
   INPUT FIELD
───────────────────────────────────────────── */
interface FieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  icon: React.ReactNode;
  autoComplete?: string;
  isPassword?: boolean;
}

const Field: React.FC<FieldProps> = ({
  label, type, placeholder, value, onChange, icon, autoComplete, isPassword,
}) => {
  const [show, setShow] = useState(false);
  const inputType = isPassword ? (show ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)' }}>
        {label}
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2"
          style={{ color: 'rgba(255,255,255,0.38)' }}
        >
          {icon}
        </span>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          autoComplete={autoComplete}
          style={{
            width: '100%',
            borderRadius: 12,
            padding: '12px 40px 12px 42px',
            fontSize: 13,
            fontWeight: 500,
            color: '#ffffff',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.14)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            outline: 'none',
            transition: 'all 0.18s ease',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.18)',
          }}
          onFocus={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.13)';
            e.currentTarget.style.border = '1px solid rgba(82,183,136,0.55)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(82,183,136,0.12), inset 0 1px 2px rgba(0,0,0,0.12)';
          }}
          onBlur={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.border = '1px solid rgba(255,255,255,0.14)';
            e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.18)';
          }}
        />
        {/* placeholder color hack */}
        <style>{`input::placeholder { color: rgba(255,255,255,0.28); }`}</style>
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(s => !s)}
            style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.40)', padding: 4, display: 'flex', alignItems: 'center',
            }}
            tabIndex={-1}
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SOCIAL BUTTON
───────────────────────────────────────────── */
const SocialBtn: React.FC<{ icon: React.ReactNode; label: string; dark?: boolean; onClick?: () => void }> = ({
  icon, label, dark, onClick
}) => (
  <button
    type="button"
    onClick={onClick}
    className="flex flex-1 items-center justify-center gap-2.5 rounded-xl py-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
    style={{
      background: dark
        ? 'rgba(255,255,255,0.92)'
        : 'rgba(255,255,255,0.07)',
      border: dark
        ? '1px solid rgba(255,255,255,0.95)'
        : '1px solid rgba(255,255,255,0.12)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: dark
        ? '0 2px 14px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,1)'
        : '0 2px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
      color: dark ? '#1e293b' : 'rgba(255,255,255,0.88)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
    }}
  >
    {icon}
    <span>{label}</span>
  </button>
);

/* ─────────────────────────────────────────────
   MAIN MODAL
───────────────────────────────────────────── */
export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, mode: initialMode, onClose, onAuthSuccess }) => {
  const [mode, setMode] = useState<'signin' | 'login'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [animIn, setAnimIn] = useState(false);

  // Google OAuth Flow State
  const [showGoogleAuth, setShowGoogleAuth] = useState(false);
  const [googleEmail, setGoogleEmail] = useState('');
  const [googlePassword, setGooglePassword] = useState('');
  const [googleStep, setGoogleStep] = useState<'email' | 'password'>('email');

  useEffect(() => {
    setMode(initialMode);
    setShowGoogleAuth(false);
    setGoogleStep('email');
  }, [initialMode, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setAnimIn(false);
      requestAnimationFrame(() => setTimeout(() => setAnimIn(true), 10));
    } else {
      setAnimIn(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const switchMode = (m: 'signin' | 'login') => {
    setMode(m);
    setFormError('');
    setShowGoogleAuth(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setLoading(true);

    try {
      let authUser: any = null;

      if (mode === 'signin') {
        if (!name || !email || !password || !confirmPassword) {
          setFormError('Please fill in all required fields.');
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setFormError('Passwords do not match.');
          setLoading(false);
          return;
        }

        const res = await api.auth.register({
          name,
          email,
          password,
          phone: mobile,
        });

        if (!res.success) {
          setFormError(res.message || 'Registration failed.');
          setLoading(false);
          return;
        }

        authUser = res.data?.user;
        setSuccessMsg(res.message || 'Account successfully created! +100 Cirql Coins credited.');
      } else {
        if (!email || !password) {
          setFormError('Please enter your email and password.');
          setLoading(false);
          return;
        }

        const res = await api.auth.login({ email, password });
        if (!res.success) {
          setFormError(res.message || 'Invalid credentials.');
          setLoading(false);
          return;
        }

        authUser = res.data?.user;
        setSuccessMsg('Welcome back! Signed in successfully.');
      }

      setSuccess(true);
      if (authUser && onAuthSuccess) {
        onAuthSuccess(authUser);
      }
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormError('');
      }, 1200);
    } catch (err: any) {
      setFormError(err.message || 'Network error connecting to backend.');
    } finally {
      setLoading(false);
    }
  };

  // Google OAuth Trigger
  const handleOpenGoogle = () => {
    setShowGoogleAuth(true);
    setGoogleStep('email');
    setFormError('');
  };

  const handleGoogleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (googleStep === 'email') {
      if (!googleEmail || !googleEmail.includes('@')) {
        setFormError('Enter a valid Google email address');
        return;
      }
      setGoogleStep('password');
      return;
    }

    if (!googlePassword) {
      setFormError('Enter your Google account password');
      return;
    }

    setLoading(true);
    try {
      const emailPrefix = googleEmail.split('@')[0];
      const formattedName = emailPrefix
        .replace(/[._]/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());

      const res = await api.auth.googleAuth({
        email: googleEmail,
        name: formattedName || 'Google User',
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${formattedName || 'G'}&backgroundColor=00897b,43a047`,
      });

      if (res.success) {
        setSuccessMsg(`Signed in as ${googleEmail}! Welcome to Cirql.`);
        setSuccess(true);
        if (res.data?.user && onAuthSuccess) {
          onAuthSuccess(res.data.user);
        }
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setShowGoogleAuth(false);
        }, 1200);
      } else {
        setFormError(res.message || 'Google authentication failed.');
      }
    } catch (err: any) {
      setFormError('Google sign-in error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const isSignIn = mode === 'signin';

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(4,12,20,0.72)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* ── GOOGLE AUTHENTICATION VIEW ── */}
      {showGoogleAuth ? (
        <div
          className="relative w-full max-w-[440px] bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
          style={{ transform: animIn ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.97)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <button
              type="button"
              onClick={() => {
                setShowGoogleAuth(false);
                setGoogleStep('email');
                setFormError('');
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Cirql</span>
            </button>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-3 shadow-xs">
              <GoogleColorLogo />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {googleStep === 'email' ? 'Sign in with Google' : 'Welcome'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {googleStep === 'email'
                ? 'to continue to Cirql E-Waste Platform'
                : googleEmail}
            </p>
          </div>

          {success ? (
            <div className="py-8 text-center bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
              <h4 className="font-bold text-slate-900 text-sm">Authenticated with Google</h4>
              <p className="text-xs text-slate-500 mt-1">{successMsg}</p>
            </div>
          ) : (
            <form onSubmit={handleGoogleSubmit} className="space-y-4">
              {googleStep === 'email' ? (
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-1.5 text-left">
                    Email or phone
                  </label>
                  <input
                    type="email"
                    required
                    autoFocus
                    placeholder="example@gmail.com"
                    value={googleEmail}
                    onChange={e => setGoogleEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900 text-sm font-medium transition-all"
                  />
                  <div className="text-left mt-2">
                    <span className="text-xs text-blue-600 font-semibold hover:underline cursor-pointer">
                      Forgot email?
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-1.5 text-left">
                    Enter your password
                  </label>
                  <input
                    type="password"
                    required
                    autoFocus
                    placeholder="Enter password"
                    value={googlePassword}
                    onChange={e => setGooglePassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900 text-sm font-medium transition-all"
                  />
                  <div className="text-left mt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setGoogleStep('email')}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      Change account
                    </button>
                    <span className="text-xs text-blue-600 font-semibold hover:underline cursor-pointer">
                      Forgot password?
                    </span>
                  </div>
                </div>
              )}

              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl text-left">
                  {formError}
                </div>
              )}

              <div className="pt-2 flex justify-between items-center">
                <span className="text-[11px] text-slate-400 font-medium">
                  Protected by Google Identity
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors flex items-center gap-2 shadow-sm"
                >
                  {loading ? 'Verifying…' : googleStep === 'email' ? 'Next' : 'Sign in'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        /* ── CIRQL STANDARD AUTH PANEL ── */
        <div
          className="relative w-full flex flex-col overflow-hidden"
          style={{
            maxWidth: isSignIn ? 520 : 440,
            maxHeight: '92vh',
            borderRadius: 26,
            background: 'rgba(14,28,22,0.82)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.10)',
            transform: animIn ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
            opacity: animIn ? 1 : 0,
            transition: 'transform 0.34s cubic-bezier(0.34,1.46,0.64,1), opacity 0.22s ease',
          }}
        >
          {/* soft inner glow top */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 right-0 h-40"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(82,183,136,0.22), transparent 70%)',
            }}
          />

          {/* ── HEADER ── */}
          <div
            className="flex items-center justify-between px-7 pt-6 pb-5 shrink-0"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(82,183,136,0.15)',
                  border: '1px solid rgba(82,183,136,0.28)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              >
                <Leaf className="w-4 h-4" style={{ color: '#52b788' }} />
              </div>
              <div>
                <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>
                  Cirql
                </p>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
                  {isSignIn ? 'Create your account' : 'Welcome back'}
                </h2>
              </div>
            </div>

            {/* close btn */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.50)',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.50)'; }}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* ── SCROLLABLE BODY ── */}
          <div className="overflow-y-auto flex-1 px-7 py-6">

            {/* ── SUCCESS ── */}
            {success ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(82,183,136,0.15)',
                    border: '1px solid rgba(82,183,136,0.35)',
                    boxShadow: '0 0 0 10px rgba(82,183,136,0.06)',
                  }}
                >
                  <CheckCircle2 className="w-8 h-8" style={{ color: '#52b788' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff' }}>
                    {isSignIn ? 'Account created!' : 'Signed in successfully'}
                  </h4>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', marginTop: 6 }}>
                    {successMsg || 'Redirecting to your eco dashboard…'}
                  </p>
                </div>
              </div>

            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

                {/* ── SIGN UP ONLY FIELDS ── */}
                {isSignIn && (
                  <>
                    <Field
                      label="Full Name" type="text" placeholder="Jane Doe"
                      value={name} onChange={setName}
                      icon={<User className="w-4 h-4" />} autoComplete="name"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Field
                        label="Mobile Number" type="tel" placeholder="+91 98765 43210"
                        value={mobile} onChange={setMobile}
                        icon={<Phone className="w-4 h-4" />} autoComplete="tel"
                      />
                      <Field
                        label="Location" type="text" placeholder="Bengaluru, India"
                        value={location} onChange={setLocation}
                        icon={<MapPin className="w-4 h-4" />} autoComplete="address-level2"
                      />
                    </div>
                  </>
                )}

                {/* Email */}
                <Field
                  label="Email ID" type="email" placeholder="name@example.com"
                  value={email} onChange={setEmail}
                  icon={<Mail className="w-4 h-4" />} autoComplete="email"
                />

                {/* Password(s) */}
                {isSignIn ? (
                  <div className="grid grid-cols-2 gap-3">
                    <Field
                      label="Password" type="password" placeholder="••••••••"
                      value={password} onChange={setPassword}
                      icon={<Lock className="w-4 h-4" />} autoComplete="new-password" isPassword
                    />
                    <Field
                      label="Confirm Password" type="password" placeholder="••••••••"
                      value={confirmPassword} onChange={setConfirmPassword}
                      icon={<Lock className="w-4 h-4" />} autoComplete="new-password" isPassword
                    />
                  </div>
                ) : (
                  <>
                    <Field
                      label="Password" type="password" placeholder="••••••••"
                      value={password} onChange={setPassword}
                      icon={<Lock className="w-4 h-4" />} autoComplete="current-password" isPassword
                    />
                    <div className="-mt-2 flex justify-end">
                      <button type="button"
                        style={{ fontSize: 11, fontWeight: 700, color: '#52b788', background: 'none', border: 'none', cursor: 'pointer' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#74c69d'}
                        onMouseLeave={e => e.currentTarget.style.color = '#52b788'}
                      >
                        Forgot password?
                      </button>
                    </div>
                  </>
                )}

                {/* Error */}
                {formError && (
                  <div style={{
                    borderRadius: 10, padding: '10px 14px', fontSize: 12, fontWeight: 600,
                    color: '#fca5a5',
                    background: 'rgba(239,68,68,0.12)',
                    border: '1px solid rgba(239,68,68,0.28)',
                  }}>
                    {formError}
                  </div>
                )}

                {/* CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  style={{
                    fontSize: 14,
                    background: 'linear-gradient(135deg, #1f5c3c 0%, #40916c 50%, #52b788 100%)',
                    boxShadow: '0 4px 20px rgba(64,145,108,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
                    border: '1px solid rgba(82,183,136,0.35)',
                    cursor: 'pointer',
                  }}
                >
                  <span>{loading ? 'Please wait…' : isSignIn ? 'Create free account' : 'Sign in to account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-0.5">
                  <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.09)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)' }}>
                    or continue with
                  </span>
                  <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.09)' }} />
                </div>

                {/* Social */}
                <div className="flex gap-3">
                  <SocialBtn icon={<GoogleIcon />} label="Google" onClick={handleOpenGoogle} />
                  <SocialBtn icon={<AppleIcon />} label="Apple" dark />
                </div>

                {/* Switch */}
                <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.42)', marginTop: 2 }}>
                  {isSignIn ? (
                    <>Already have an account?{' '}
                      <button type="button" onClick={() => switchMode('login')}
                        style={{ fontWeight: 700, color: '#52b788', background: 'none', border: 'none', cursor: 'pointer' }}>
                        Log in
                      </button>
                    </>
                  ) : (
                    <>Don't have an account?{' '}
                      <button type="button" onClick={() => switchMode('signin')}
                        style={{ fontWeight: 700, color: '#52b788', background: 'none', border: 'none', cursor: 'pointer' }}>
                        Sign up free
                      </button>
                    </>
                  )}
                </p>

                {/* T&C */}
                {isSignIn && (
                  <p style={{ textAlign: 'center', fontSize: 10, color: 'rgba(255,255,255,0.28)', lineHeight: 1.6, marginTop: -4 }}>
                    By signing up you agree to our{' '}
                    <span style={{ color: '#52b788', fontWeight: 700, cursor: 'pointer' }}>Terms of Service</span>
                    {' & '}
                    <span style={{ color: '#52b788', fontWeight: 700, cursor: 'pointer' }}>Privacy Policy</span>
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
