import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Features from "./landingPageCompoonents/features";
import HowItWorks from "./landingPageCompoonents/howItsDone";
import CTASection from "./landingPageCompoonents/cta";
import TestimonialsSection from "./landingPageCompoonents/testimonials";

export default function Home() {
  return (
    <div className="w-dvw min-h-screen flex justify-center font-dmSans tracking-tight">
      <main className="flex-1 max-w-5xl flex flex-col gap-10 items-center text-center min-h-screen pt-32">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-semibold tracking-tighter">
            All Your Academic
            <br />
            Resources in One Place
          </h1>
          <h3 className="opacity-90">
            Search courses, access materials, submit assignments
          </h3>
          {/* <Button></Button> */}
          <div className="w-sm mt-6 flex border p-1 rounded-xl gap-2">
            <Input
              placeholder="Enter your email"
              className="flex-1 border-none shadow-none"
              name="email"
            />
            <Button type="submit">Get started</Button>
          </div>
        </div>

        {/* image */}
        <div className="bg-neutral-300 h-120 rounded-xl w-3xl" />

        <div className="flex flex-col gap-2 items-center pt-4">
          <Features />
          <HowItWorks />
          <TestimonialsSection />
          <CTASection />
        </div>
      </main>
    </div>
  );
}
