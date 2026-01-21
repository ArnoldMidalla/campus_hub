import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border py-16 px-4 font-dmSans">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/favicons/favicon-32x32.png"
                alt="Campus Hub logo"
                width={32}
                height={32}
              />
              <h3 className="text-xl font-bold text-foreground">Campus Hub</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Academic resource management and collaboration platform for your institution.
            </p>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/materials"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Course Materials
                </Link>
              </li>
              <li>
                <Link
                  href="/assignments"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Assignments
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Digital Library
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Student Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Institution Section */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">
              Institution
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Faculty Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/departments"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Career Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Campus Events
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">
              Follow Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/cookies"
              className="hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © Campus Hub {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}