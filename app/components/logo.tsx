'use client'; // Required for hooks in Next.js 13+

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from "next/image"

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent mismatch between server and client rendering
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoids SSR flash

  return (
    <Image
      src={theme === 'dark' ? '/favicons/favicon-32x32dark.png' : '/favicons/favicon-32x32.png'}
      alt="Logo"
            width={30}
            height={30}
    />
  );
}
