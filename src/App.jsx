import React, { useState } from 'react';
import { Eye, EyeOff, LogOut, Search } from 'lucide-react';

export default function RBCBankClone() {
  const [currentPage, setCurrentPage] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('chequing');

  const DEMO_CREDENTIALS = {
    username: 'mikayla_demaiter',
    password: 'Mikayla2026!'
  };

  const getCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-CA', options);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
      setCurrentPage('dashboard');
      setUsername('');
      setPassword('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setCurrentPage('login');
    setUsername('');
    setPassword('');
    setLoginError('');
  };

  const transactions = [
    { date: '2026-01-20', description: 'Apple Store Purchase', amount: -49.99, balance: 1201079.65, type: 'purchase' },
    { date: '2026-01-19', description: 'TD Bank Wire Transfer', amount: -5000.00, balance: 1201129.64, type: 'transfer' },
    { date: '2026-01-18', description: 'Dividend Payment - RY Stock', amount: 1250.50, balance: 1206129.64, type: 'investment' },
    { date: '2026-01-17', description: 'Whole Foods Market', amount: -187.43, balance: 1204879.14, type: 'purchase' },
    { date: '2026-01-16', description: 'Telus Wireless Bill', amount: -89.99, balance: 1205066.57, type: 'utility' },
    { date: '2026-01-15', description: 'Salary Deposit - Accenture', amount: 8500.00, balance: 1205156.56, type: 'income' },
    { date: '2026-01-14', description: 'Uber Eats Food Delivery', amount: -34.22, balance: 1196656.56, type: 'purchase' },
    { date: '2026-01-13', description: 'Lululemon Athletica', amount: -289.00, balance: 1196690.78, type: 'purchase' },
    { date: '2026-01-12', description: 'BMO Wire Transfer - Investment', amount: -15000.00, balance: 1196979.78, type: 'transfer' },
    { date: '2026-01-11', description: 'Netflix Subscription', amount: -16.99, balance: 1211979.78, type: 'utility' },
    { date: '2026-01-10', description: 'Interest Payment - Savings', amount: 45.67, balance: 1211996.77, type: 'interest' },
    { date: '2026-01-09', description: 'Shopify Card Purchase', amount: -156.50, balance: 1211951.10, type: 'purchase' },
    { date: '2026-01-08', description: 'Toronto Hydro Electric', amount: -124.56, balance: 1212107.60, type: 'utility' },
    { date: '2026-01-07', description: 'Visa Cashback Reward', amount: 35.42, balance: 1212232.16, type: 'reward' },
    { date: '2026-01-06', description: 'Starbucks Coffee', amount: -6.75, balance: 1212196.74, type: 'purchase' },
    { date: '2026-01-05', description: 'RRSP Contribution - RBC Direct', amount: -10000.00, balance: 1212203.49, type: 'investment' },
    { date: '2026-01-03', description: 'TFSA Dividend - Index Fund', amount: 892.34, balance: 1222203.49, type: 'investment' },
    { date: '2025-12-28', description: 'Amazon.ca Holiday Purchase', amount: -234.89, balance: 1221311.15, type: 'purchase' },
    { date: '2025-12-25', description: 'Holiday Bonus Deposit', amount: 2500.00, balance: 1221546.04, type: 'income' },
    { date: '2025-12-24', description: 'Costco Wholesale', amount: -267.54, balance: 1219046.04, type: 'purchase' },
    { date: '2025-12-22', description: 'Rogers Internet/TV Bill', amount: -159.99, balance: 1219313.58, type: 'utility' },
    { date: '2025-12-20', description: 'Salary Deposit - Accenture', amount: 8500.00, balance: 1219473.57, type: 'income' },
    { date: '2025-12-18', description: 'Gift Card Purchase - Best Buy', amount: -150.00, balance: 1210973.57, type: 'purchase' },
    { date: '2025-12-16', description: 'Year-End Dividend - CNQ Stock', amount: 1875.42, balance: 1211123.57, type: 'investment' },
    { date: '2025-12-15', description: 'Equinix Data Transfer Fee', amount: -45.00, balance: 1209248.15, type: 'purchase' },
    { date: '2025-12-12', description: 'Wire Transfer - Family', amount: -2500.00, balance: 1209293.15, type: 'transfer' },
    { date: '2025-12-10', description: 'Dividend - Enbridge Stock', amount: 567.89, balance: 1211793.15, type: 'investment' },
    { date: '2025-12-08', description: 'Monthly Gym Membership', amount: -79.99, balance: 1211225.26, type: 'utility' },
    { date: '2025-12-05', description: 'Sephora Beauty Purchase', amount: -189.75, balance: 1211305.25, type: 'purchase' },
    { date: '2025-12-03', description: 'Hydro One Electricity Bill', amount: -156.32, balance: 1211495.00, type: 'utility' },
    { date: '2025-12-01', description: 'TFSA Monthly Contribution', amount: -5000.00, balance: 1211651.32, type: 'investment' },
    { date: '2025-11-28', description: 'Black Friday Shopping - Zara', amount: -412.50, balance: 1216651.32, type: 'purchase' },
    { date: '2025-11-25', description: 'Salary Deposit - Accenture', amount: 8500.00, balance: 1217063.82, type: 'income' },
    { date: '2025-11-20', description: 'Insurance Premium - Life', amount: -235.67, balance: 1208563.82, type: 'utility' },
    { date: '2025-11-18', description: 'Investment Purchase - VGRO', amount: -20000.00, balance: 1208799.49, type: 'investment' },
    { date: '2025-11-15', description: 'Restaurant - Canoe', amount: -145.89, balance: 1228799.49, type: 'purchase' },
    { date: '2025-11-12', description: 'BCE Dividend Payment', amount: 423.56, balance: 1228945.38, type: 'investment' },
    { date: '2025-11-10', description: 'Uber Eats Food Delivery', amount: -28.50, balance: 1228521.82, type: 'purchase' },
    { date: '2025-11-08', description: 'Monthly Internet Bill', amount: -89.99, balance: 1228550.32, type: 'utility' },
    { date: '2025-11-05', description: 'Lululemon Athletic Wear', amount: -245.00, balance: 1228640.31, type: 'purchase' },
    { date: '2025-11-01', description: 'Property Tax Payment', amount: -4800.00, balance: 1228885.31, type: 'utility' },
  ];

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* Full-width Header Image */}
        <div className="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden">
          <img
            src="https://i.postimg.cc/dVWsYjcG/20260120-122426.jpg"
            alt="RBC Secure Sign-In"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login Form Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Username Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white focus:border-blue-600 focus:outline-none transition-all text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white focus:border-blue-600 focus:outline-none transition-all text-gray-900 placeholder-gray-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {loginError && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded text-red-700 text-sm">
                    {loginError}
                  </div>
                )}

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-3 text-sm text-gray-600">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Footer Links */}
              <div className="space-y-3 text-center text-sm">
                <p>
                  <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Recover Your Username</a>
                </p>
                <p>
                  <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Enrol in Online Banking</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-300 py-6 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4">
              <p className="text-xs text-gray-700 mb-2">RBC Online Banking is provided by Royal Bank of Canada</p>
              <p className="text-xs text-gray-600">© 1995–2026</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs">
              <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Legal</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Accessibility</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Privacy & Security</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Advertising & Cookies</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.postimg.cc/kGV5TnMt/royal-bank-of-canada-logo.png"
              alt="Royal Bank of Canada"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">Royal Bank</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="bg-transparent ml-2 outline-none text-sm w-full text-gray-700"
              />
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back, Mikayla</h2>
          <p className="text-gray-600 mt-1">{getCurrentDate()}</p>
        </div>

        {/* Account Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Chequing Account */}
          <div
            onClick={() => setSelectedAccount('chequing')}
            className={`rounded-2xl p-6 cursor-pointer transition-all transform hover:scale-105 ${
              selectedAccount === 'chequing'
                ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-2xl'
                : 'bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-200'
            }`}
          >
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className={`text-sm font-semibold opacity-90 ${selectedAccount === 'chequing' ? 'text-blue-100' : 'text-gray-600'}`}>
                  Chequing Account
                </p>
                <h3 className="text-2xl font-bold mt-2">****7542</h3>
              </div>
              <div className="w-12 h-8 bg-opacity-30 bg-white rounded flex items-center justify-center">
                <span className="text-sm font-bold">RBC</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className={`text-xs font-semibold opacity-75 ${selectedAccount === 'chequing' ? 'text-blue-100' : 'text-gray-500'}`}>
                  Available Balance
                </p>
                <p className="text-4xl font-bold mt-1">$1,201,079.65</p>
              </div>
              <div className="flex justify-between items-end pt-4 border-t border-opacity-20 border-white">
                <div>
                  <p className={`text-xs opacity-75 ${selectedAccount === 'chequing' ? 'text-blue-100' : 'text-gray-500'}`}>
                    Valid Thru
                  </p>
                  <p className={`font-semibold mt-1 ${selectedAccount === 'chequing' ? 'text-blue-50' : 'text-gray-700'}`}>
                    12/27
                  </p>
                </div>
                <div>
                  <p className={`text-xs opacity-75 ${selectedAccount === 'chequing' ? 'text-blue-100' : 'text-gray-500'}`}>
                    Cardholder Name
                  </p>
                  <p className={`font-semibold mt-1 ${selectedAccount === 'chequing' ? 'text-blue-50' : 'text-gray-700'}`}>
                    MIKAYLA DEMAITER
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Account */}
          <div
            onClick={() => setSelectedAccount('savings')}
            className={`rounded-2xl p-6 cursor-pointer transition-all transform hover:scale-105 ${
              selectedAccount === 'savings'
                ? 'bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-2xl'
                : 'bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-200'
            }`}
          >
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className={`text-sm font-semibold opacity-90 ${selectedAccount === 'savings' ? 'text-emerald-100' : 'text-gray-600'}`}>
                  Savings Account
                </p>
                <h3 className="text-2xl font-bold mt-2">****8834</h3>
              </div>
              <div className="w-12 h-8 bg-opacity-30 bg-white rounded flex items-center justify-center">
                <span className="text-sm font-bold">RBC</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className={`text-xs font-semibold opacity-75 ${selectedAccount === 'savings' ? 'text-emerald-100' : 'text-gray-500'}`}>
                  Available Balance
                </p>
                <p className="text-4xl font-bold mt-1">$567,432.18</p>
              </div>
              <div className="flex justify-between items-end pt-4 border-t border-opacity-20 border-white">
                <div>
                  <p className={`text-xs opacity-75 ${selectedAccount === 'savings' ? 'text-emerald-100' : 'text-gray-500'}`}>
                    Interest Rate
                  </p>
                  <p className={`font-semibold mt-1 ${selectedAccount === 'savings' ? 'text-emerald-50' : 'text-gray-700'}`}>
                    4.82% APY
                  </p>
                </div>
                <div>
                  <p className={`text-xs opacity-75 ${selectedAccount === 'savings' ? 'text-emerald-100' : 'text-gray-500'}`}>
                    Account Type
                  </p>
                  <p className={`font-semibold mt-1 ${selectedAccount === 'savings' ? 'text-emerald-50' : 'text-gray-700'}`}>
                    High Yield
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Transfer', icon: '→' },
            { label: 'Pay Bills', icon: '💳' },
            { label: 'Mobile Deposit', icon: '📸' },
            { label: 'Request Money', icon: '👤' },
          ].map((action, idx) => (
            <button
              key={idx}
              className="bg-white hover:bg-gray-50 border border-gray-300 rounded-xl p-4 transition-all hover:shadow-lg group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</div>
              <p className="text-sm font-semibold text-gray-900">{action.label}</p>
            </button>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Recent Transactions</h3>
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium text-sm">
              View All
            </a>
          </div>

          {/* Transaction List */}
          <div className="space-y-1">
            {transactions.slice(0, 20).map((transaction, idx) => {
              const isPositive = transaction.amount > 0;
              const typeColors = {
                purchase: 'bg-red-50 text-red-700',
                transfer: 'bg-orange-50 text-orange-700',
                investment: 'bg-purple-50 text-purple-700',
                utility: 'bg-blue-50 text-blue-700',
                income: 'bg-green-50 text-green-700',
                interest: 'bg-emerald-50 text-emerald-700',
                reward: 'bg-yellow-50 text-yellow-700',
              };

              const typeEmojis = {
                purchase: '🛍️',
                transfer: '💸',
                investment: '📈',
                utility: '📄',
                income: '💰',
                interest: '🎁',
                reward: '⭐',
              };

              return (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-300"
                >
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${typeColors[transaction.type]}`}>
                      {typeEmojis[transaction.type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className={`font-bold text-lg ${isPositive ? 'text-green-600' : 'text-gray-900'}`}>
                      {isPositive ? '+' : ''}{transaction.amount.toLocaleString('en-CA', {
                        style: 'currency',
                        currency: 'CAD',
                        minimumFractionDigits: 2,
                      })}
                    </p>
                    <p className="text-xs text-gray-500">${transaction.balance.toLocaleString('en-CA', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 mt-16 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-xs text-gray-700 mb-2">RBC Online Banking is provided by Royal Bank of Canada</p>
            <p className="text-xs text-gray-600">© 1995–2026</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs">
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Legal</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Accessibility</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Privacy & Security</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">Advertising & Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
