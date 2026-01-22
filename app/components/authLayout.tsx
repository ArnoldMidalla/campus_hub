export default function AuthLayout({ title, subtitle, children }:any) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-dmSans pt-16 tracking-tight">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left */}
        <div className="p-8 md:p-12">

          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {title}
          </h1>
          <p className="text-gray-500 mb-8 text-sm">
            {subtitle}
          </p>

          {children}

        </div>

        {/* Right */}
        <div className="hidden md:flex items-center justify-center p-10 relative">
          <div className=" max-w-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Effortlessly manage your team and operations.
            </h2>
            <p className="opacity-80 text-sm mb-6">
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
