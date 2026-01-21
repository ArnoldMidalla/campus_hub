export default function AuthLayout({ title, subtitle, children }:any) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-dmSans pt-16">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left */}
        <div className="p-8 md:p-12">
          {/* <div className="mb-10">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <span className="w-8 h-8 rounded text-white flex items-center justify-center">
                S
              </span>
              Sellora
            </div>
          </div> */}

          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {title}
          </h1>
          <p className="text-gray-500 mb-8 text-sm">
            {subtitle}
          </p>

          {children}

          {/* <div className="mt-10 text-xs text-gray-400 flex justify-between">
            <span>© 2025 Sellora Enterprises LTD.</span>
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
          </div> */}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center justify-center p-10 relative">
          <div className="text-white max-w-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Effortlessly manage your team and operations.
            </h2>
            <p className="text-white/80 text-sm mb-6">
              Log in to access your CRM dashboard and manage your team.
            </p>

            {/* Dashboard Mock */}
            <div className="bg-white rounded-xl shadow-xl p-4">
              <div className="h-32 bg-gray-100 rounded mb-3" />
              <div className="h-20 bg-gray-100 rounded" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
