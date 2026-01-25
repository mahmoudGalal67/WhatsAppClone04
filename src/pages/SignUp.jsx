// LoginPage.jsx
import React from "react";
import { Facebook, Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f2f5] to-[#e4e6eb] flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden ">
        {/* Header with dark green background */}
        <div className="bg-[#0F796D] p-8">
          <div className="flex items-center flex-col space-x-3 gap-2">
            <div className="w-[67px] h-[67px]">
              <img className="w-full h-full" src="logo.png" alt="" />
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold mb-2">
                WhatsApp Business
              </h1>
              <p className="text-[#d1f7cb] text-sm">
                Manage your business conversations
              </p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="p-8">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-sm">
              Sign in to continue to your account
            </p>
          </div>

          <form className="space-y-6">
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
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-2">
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

              {/* Forgot Password Link */}
              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-sm text-[#075e54] hover:text-[#054d43] font-medium"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#25d366] hover:bg-[#20bd5c] text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">
              Or continue with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Facebook Button */}
          <button className="w-1/2 ml-auto flex items-center justify-center space-x-3 bg-[#1877f2] hover:bg-[#166fe5] text-white font-medium py-3 px-4 rounded-lg transition duration-200 ease-in-out">
            <Facebook size={24} />
            <span>Facebook</span>
          </button>

          {/* Footer Note - based on the image showing "ahmed baz_" at top */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              By signing in, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>
      </div>

      {/* Decorative element at the top like in the image */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#075e54] via-[#128c7e] to-[#25d366]"></div>
    </div>
  );
};

export default SignUp;
