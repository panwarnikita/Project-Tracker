import React from 'react';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/auth/login";
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050212] overflow-hidden select-none">
      
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[140px]"></div>
      <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.08),transparent_60%)]"></div>

      <div className="relative z-10 [perspective:1200px]">
        <div className="w-[460px] bg-[#0d0926]/80 backdrop-blur-3xl border border-purple-500/20 rounded-[2.5rem] p-11 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_50px_rgba(147,51,234,0.15)] transform [rotateX(8deg)] [rotateY(-8deg)] transition-all duration-700 hover:rotate-0 hover:scale-[1.01] border-b-purple-500/30 border-r-purple-500/30">
          
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1c123d] to-[#0d0926] rounded-2xl flex items-center justify-center mx-auto mb-5 border-2 border-amber-500/40 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
              <span className="text-3xl font-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent [text-shadow:0_2px_10px_rgba(245,158,11,0.3)]">
                AI
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-purple-300/60 mt-2 text-sm font-medium tracking-wide">
              Secure manager login for AI-Labs Tracker
            </p>
          </div>

          <div className="space-y-7">
            <button 
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-4 bg-gradient-to-b from-slate-900 to-[#120d2e] text-slate-200 font-bold py-4 rounded-xl border border-amber-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:-translate-y-0.5 transition-all cursor-pointer group"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
                Sign in with Google
              </span>
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-purple-500/10"></div>
              <span className="flex-shrink mx-4 text-purple-400/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                Corporate Portal
              </span>
              <div className="flex-grow border-t border-purple-500/10"></div>
            </div>

            <p className="text-center text-purple-400/30 text-[11px] leading-relaxed px-4 font-medium">
              By signing in, you agree to AI-Labs internal security policies and repository access guidelines.
            </p>
          </div>

          <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-amber-500/5 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;