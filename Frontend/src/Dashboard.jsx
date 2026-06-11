import React from 'react';

function Dashboard({ user }) {
  const projects = [
    { id: 1, name: "AI-Labs Automation Tool", manager: "Nikita", status: "Active", teamCount: 5, commits: 142 },
    { id: 2, name: "Company HR Portal", manager: "Rohan", status: "Inactive", teamCount: 3, commits: 0 },
    { id: 3, name: "Repository Insights Dashboard", manager: "Nikita", status: "Active", teamCount: 4, commits: 89 },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            AI-Labs Project Tracker
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">User: <strong className="text-slate-200">{user?.name || 'Manager'}</strong></span>
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-slate-900">
              {user?.name ? user.name[0].toUpperCase() : 'M'}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-100">Welcome Back, {user?.name}!</h2>
          <p className="text-slate-400 text-sm mt-1">Monitor company projects and team activity in one place.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 shadow-lg">
            <p className="text-sm font-medium text-slate-400">Total Projects</p>
            <p className="text-3xl font-bold text-emerald-400 mt-2">3</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 shadow-lg">
            <p className="text-sm font-medium text-slate-400">Active Contributors</p>
            <p className="text-3xl font-bold text-cyan-400 mt-2">12</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 shadow-lg">
            <p className="text-sm font-medium text-slate-400">Total Commits (This Week)</p>
            <p className="text-3xl font-bold text-purple-400 mt-2">231</p>
          </div>
        </div>

        <div className="bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden shadow-xl">
          <div className="p-5 border-b border-slate-700/50 flex justify-between items-center bg-slate-800/20">
            <h3 className="font-semibold text-slate-200">Project Status Overview</h3>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-medium text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer">
              + New Project
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/60 text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-slate-700/50">
                  <th className="p-4">Project Name</th>
                  <th className="p-4">Manager</th>
                  <th className="p-4">Team Size</th>
                  <th className="p-4">Commits</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-medium text-slate-200">{project.name}</td>
                    <td className="p-4 text-slate-300">{project.manager}</td>
                    <td className="p-4 text-slate-400">{project.teamCount} members</td>
                    <td className="p-4 text-slate-400 font-mono">{project.commits}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === 'Active' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;