import Link from "next/link";
const RegisterPage = () => {
  return (
    <div className="bg-slate-950 text-white antialiased flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="py-10">
        {/* Container */}
        <div className="w-full max-w-5xl grid md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          {/* LEFT SIDE */}
          <div className="hidden md:flex flex-col justify-center p-10 bg-linear-to-br from-[#33B6EF]/10 to-indigo-500/10 border-r border-white/10">
            <h1 className="text-3xl font-semibold">
              Join{" "}
              <span className="text-[#33B6EF]">
                <Link href={"/"}>Proghive</Link>
              </span>
            </h1>

            <p className="text-white/60 mt-4">
              Start your journey with a modern publishing & SaaS platform built
              for creators and authors.
            </p>

            <ul className="mt-8 space-y-3 text-white/60 text-sm">
              <li>✔ Publish professional books</li>
              <li>✔ Use advanced formatting tools</li>
              <li>✔ Scale your publishing workflow</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-10">
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold">Create Account</h2>
              <p className="text-white/50 text-sm mt-1">
                Register to access your dashboard
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="text-sm text-white/60">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#33B6EF] outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-white/60">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#33B6EF] outline-none transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-white/60">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#33B6EF] outline-none transition"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm text-white/60">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#33B6EF] outline-none transition"
                />
              </div>

              {/* Terms */}
              <label className="flex items-center gap-2 text-sm text-white/60">
                <input type="checkbox" className="accent-[#33B6EF]" />I agree to
                the Terms & Conditions
              </label>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#33B6EF] text-black font-medium hover:opacity-90 transition"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-white/40">or sign up with</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                {/* Google */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition"
                >
                  <svg className="w-4 h-4" viewBox="0 0 48 48">
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.9-6.9C36.63 2.36 30.7 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.06 6.26C12.52 13.01 17.8 9.5 24 9.5z"
                    />
                    <path
                      fill="#34A853"
                      d="M46.5 24.5c0-1.64-.15-3.22-.43-4.75H24v9h12.7c-.55 2.9-2.2 5.35-4.69 7.01l7.24 5.62C43.98 37.5 46.5 31.5 46.5 24.5z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M10.62 28.48A14.5 14.5 0 0 1 9.5 24c0-1.57.27-3.09.76-4.48l-8.06-6.26A23.93 23.93 0 0 0 0 24c0 3.84.92 7.47 2.56 10.72l8.06-6.24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M24 48c6.48 0 11.93-2.14 15.91-5.82l-7.24-5.62C30.62 38.5 27.58 39.5 24 39.5c-6.2 0-11.48-3.51-13.38-8.48l-8.06 6.24C6.51 42.62 14.62 48 24 48z"
                    />
                  </svg>
                  Google
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition"
                >
                  <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.7-1.6 1.5V12H18l-.5 3h-3.1v7A10 10 0 0 0 22 12z" />
                  </svg>
                  Facebook
                </button>
              </div>

              {/* Login Link */}
              <p className="text-center text-sm text-white/50 mt-6">
                Already have an account?
                <Link
                  href="/login"
                  className="text-[#33B6EF] hover:underline ml-1"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
