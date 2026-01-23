
// howItWorks.tsx
import { CheckCircle2 } from "lucide-react";

function StepCard({
  number,
  title,
  Icon,
}: {
  number: string;
  title: string;
  Icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div 
          className="absolute -top-4 -left-4 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10"
          style={{ backgroundColor: 'var(--primary)' }}
        >
          {number}
        </div>
        <div className="bg-card rounded-3xl p-8 w-80 h-48 flex items-center justify-center shadow-lg border border-border">
          {Icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground text-center max-w-xs leading-tight">
        {title}
      </h3>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="w-full min-h-screen bg-background py-20 px-4 font-dmSans">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Header */}
        <p className="bg-orange-100 dark:bg-orange-900/30 w-fit px-4 py-1.5 text-orange-800 dark:text-orange-400 font-semibold text-xs rounded-full uppercase tracking-wide">
          How It Works
        </p>
        <h1 className="text-5xl font-bold tracking-tighter text-foreground">
          Few Easy Steps and Done
        </h1>
        <p className="text-center max-w-3xl text-lg leading-relaxed text-muted-foreground mb-4">
          In just few easy steps, you are all set to manage your academic resources.
          Access all materials and collaborate with peers in one place.
        </p>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-12 mt-8">
          <StepCard
            number="1"
            title="Register your account."
            Icon={
              <div className="flex flex-col gap-6 w-full">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground block text-left">
                    Username
                  </label>
                  <div className="bg-muted rounded-lg px-4 py-3 text-foreground text-left">
                    your_user
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground block text-left">
                    Password
                  </label>
                  <div className="bg-muted rounded-lg px-4 py-3 text-foreground tracking-widest">
                    • • • • • • • •
                  </div>
                </div>
              </div>
            }
          />

          <StepCard
            number="2"
            title="Upload and organize your resources."
            Icon={
              <div className="w-full space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-base font-semibold text-foreground">
                    Resources
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {[1, 2, 3, 4].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center gap-3"
                    >
                      <div
                        className="h-2 bg-muted rounded-full"
                        style={{ width: `${100 - i * 15}%` }}
                      ></div>
                      <span className="text-xs text-muted-foreground w-6">
                        $
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          <StepCard
            number="3"
            title="Done, let's continue the work."
            Icon={
              <div className="w-full space-y-3">
                {[1, 2, 3, 4].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-green-500 dark:text-green-400 shrink-0"
                      strokeWidth={2.5}
                    />
                    <div className="flex-1 space-y-1.5">
                      <div
                        className="h-1.5 bg-muted-foreground/30 rounded-full"
                        style={{ width: `${90 - i * 10}%` }}
                      ></div>
                      <div
                        className="h-1.5 bg-muted-foreground/30 rounded-full"
                        style={{ width: `${70 - i * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-12 justify-center">
          <button 
            className="text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            Get a Free Demo
          </button>
          <button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 shadow-lg">
            See Pricing
          </button>
        </div>
      </div>
    </section>
  );
}