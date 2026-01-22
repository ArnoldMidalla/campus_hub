import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./darkToggle";
import Logo from "./logo";

export default function Navbar() {
  return (
    <div className="w-dvw h-16 flex justify-center items-center font-dmSans tracking-tight fixed backdrop-blur-md border-b bg-white/60 dark:bg-black/30 z-50 text-sm font-medium">
      <nav className="flex justify-between lg:max-w-5xl md:max-w-4xl max-w-sm flex-1">
        <Link href="/" className="flex gap-2 items-center">
          {/* <Image
            src="/favicons/favicon-32x32.png"
            alt="logo"
            width={30}
            height={30}
          /> */}
          <Logo />
          <p className="">Campus Hub</p>
        </Link>

        <div className="flex gap-4">
          <Button asChild size="sm" variant="secondary">
            <Link href="/">Login</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/">Sign Up</Link>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
