// GXSignInPage.jsx
import React from "react";
import { Facebook, Eye, EyeOff } from "lucide-react";

const GXSignInPage = () => {
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#0F796D] flex items-center justify-center ">
      <div className="w-full max-w-sm">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-md p-8 py-12">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-[#0F796D] mb-8">
            Sign In
          </h2>

          {/* Email/Username Field */}
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email/Username
            </label>
            <div className="relative">
              <img
                src="email.png"
                alt=""
                className="absolute w-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              />
              <input
                placeholder="Email"
                type="text"
                className="w-full px-10 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:border-transparent text-gray-700"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6 text-left">
            <label className="block text-sm font-medium text-[#0F796D] mb-1.5">
              Password
            </label>
            <div className="relative">
              <img
                src="lock.png"
                alt=""
                className="absolute w-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-10 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:border-transparent pr-12 text-gray-700"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember me and Forgot password row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-[#0F796D] focus:[#0F796D] border-[#0F796D] rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                remember me
              </label>
            </div>
            <a href="#" className="text-sm text-[#0F796D] hover:text-[#0F796D]">
              forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#47CC7C] hover:[#0F796D] text-white font-medium py-2.5 px-4 rounded focus:outline-none focus:ring-2 focus:[#47CC7C] focus:ring-offset-2 transition duration-150"
            style={{ fontSize: "15px" }}
          >
            Sign In
          </button>

          {/* Alternative Sign In Options */}
        </div>

        {/* Sign Up Link */}
      </div>
    </div>
  );
};

export default GXSignInPage;
