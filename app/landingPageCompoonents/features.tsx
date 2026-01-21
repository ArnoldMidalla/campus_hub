// features.tsx
import {
  BookOpen,
  Users,
  Calendar,
  FileText,
  TrendingUp,
  Lock,
} from "lucide-react";

function FeatureCard({
  Icon,
  title,
  sub,
  colour,
}: {
  Icon: any;
  title: string;
  sub: string;
  colour: string;
}) {
  const colourMap: { [key: string]: string } = {
    cyan: "bg-cyan-200 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-100",
    yellow: "bg-yellow-200 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100",
    orange: "bg-orange-300 dark:bg-orange-900 text-orange-900 dark:text-orange-100",
    pink: "bg-pink-300 dark:bg-pink-900 text-pink-900 dark:text-pink-100",
    emerald: "bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-100",
    purple: "bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-100",
    blue: "bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
    red: "bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-100",
  };

  return (
    <div className="flex flex-col items-center text-center font-dmSans tracking-tight font-medium w-64 gap-3">
      <div
        className={`p-4 ${colourMap[colour]} rounded-2xl w-fit transition-transform duration-300 hover:scale-110 hover:shadow-lg`}
      >
        <Icon size={16} strokeWidth={2.5} />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="opacity-70 text-sm leading-5 text-muted-foreground">{sub}</p>
    </div>
  );
}

export default function Features() {
  return (
    <div className="flex flex-col items-center gap-4 font-dmSans tracking-tight py-16 px-4 bg-background min-h-screen w-full">
      <p className="bg-green-100 dark:bg-green-900/30 w-fit px-4 py-1.5 text-green-800 dark:text-green-400 font-semibold text-xs rounded-full uppercase tracking-wide">
        Features
      </p>
      <h1 className="text-5xl font-bold tracking-tighter text-foreground">
        Explore our amazing features
      </h1>
      <p className="text-center max-w-2xl text-lg leading-relaxed text-muted-foreground mb-8">
        We are a comprehensive academic resource management system that empowers
        students, faculty, and administrators to collaborate, organize, and
        access educational materials seamlessly.
      </p>

      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-8 pt-4">
        <FeatureCard
          Icon={BookOpen}
          title="Resource Library"
          sub="Access a vast collection of academic materials, textbooks, and research papers in one centralized location."
          colour="cyan"
        />
        <FeatureCard
          Icon={Users}
          title="Collaborate Securely"
          sub="Share resources and collaborate with classmates, study groups, and faculty members in a secure environment."
          colour="yellow"
        />
        <FeatureCard
          Icon={Calendar}
          title="Smart Scheduling"
          sub="Manage deadlines, class schedules, and resource availability with intelligent calendar integration."
          colour="orange"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-border w-full max-w-6xl my-8"></div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-8">
        <FeatureCard
          Icon={FileText}
          title="Document Management"
          sub="Upload, organize, and version-control your academic documents with ease and efficiency."
          colour="emerald"
        />
        <FeatureCard
          Icon={TrendingUp}
          title="Progress Tracking"
          sub="Monitor your academic progress and resource usage with comprehensive analytics dashboards."
          colour="blue"
        />
        <FeatureCard
          Icon={Lock}
          title="Secure Access Control"
          sub="Role-based permissions ensure that students, faculty, and admins access appropriate resources."
          colour="red"
        />
      </div>
    </div>
  );
}