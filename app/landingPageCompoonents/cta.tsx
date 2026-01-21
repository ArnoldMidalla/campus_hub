import { BookOpen, TrendingUp, Calendar, FileText } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full  py-20 px-4 font-dmSans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p 
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: 'var(--primary)' }}
          >
            Get Started Now!
          </p>
          <h2 className="text-5xl md:text-6xl font-bold  leading-tight">
            Start Managing Your Academic Resources Today
          </h2>
          <p className="text-lg  leading-relaxed max-w-xl">
            Are you ready to make your academic journey more organized? 
            Join Campus Hub now and access all your resources in one place!
          </p>
          <button 
            className="text-white dark:text-black font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            Get a Free Demo
          </button>
        </div>

        {/* Right - Dashboard Preview */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-100 rounded-3xl p-8 shadow-2xl">
            {/* Header */}
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Academic Progress
            </h3>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Donut Chart Card */}
              <div className="col-span-2 bg-gray-50 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-base font-semibold text-gray-800">
                    Course Progress
                  </h4>
                  <div className="text-gray-400">•••</div>
                </div>
                
                {/* Simple Donut Chart */}
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <svg className="w-40 h-40 transform -rotate-90">
                      {/* Background circle */}
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#e5e7eb"
                        strokeWidth="20"
                        fill="none"
                      />
                      {/* Progress segments */}
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#ec4899"
                        strokeWidth="20"
                        fill="none"
                        strokeDasharray="94 377"
                        strokeDashoffset="0"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#f9a8d4"
                        strokeWidth="20"
                        fill="none"
                        strokeDasharray="47 377"
                        strokeDashoffset="-94"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#7c3aed"
                        strokeWidth="20"
                        fill="none"
                        strokeDasharray="70 377"
                        strokeDashoffset="-141"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#c4b5fd"
                        strokeWidth="20"
                        fill="none"
                        strokeDasharray="47 377"
                        strokeDashoffset="-211"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#60a5fa"
                        strokeWidth="20"
                        fill="none"
                        strokeDasharray="70 377"
                        strokeDashoffset="-258"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-500">Overall</p>
                      <p className="text-2xl font-bold text-gray-900">78%</p>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                  <span className="text-gray-600">Active Courses</span>
                  <span className="ml-auto font-semibold text-gray-900">12</span>
                </div>
              </div>

              {/* Bar Chart Card */}
              <div className="col-span-2 bg-gray-50 rounded-2xl p-6">
                <h4 className="text-base font-semibold text-gray-800 mb-4">
                  Weekly Activity
                </h4>
                <div className="flex items-end justify-between h-32 gap-3">
                  {[85, 60, 95, 70, 88, 75, 92].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full rounded-t-lg transition-all duration-300 hover:opacity-80"
                        style={{ 
                          height: `${height}%`,
                          backgroundColor: i === 6 ? '#1f2937' : '#8b5cf6'
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expense Tooltip */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-xl">
                <p className="text-xs opacity-75">Assignments Due</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}