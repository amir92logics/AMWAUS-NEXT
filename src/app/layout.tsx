
import './globals.css';
import './styles.css';

// project-imports
import ProviderWrapper from './ProviderWrapper';

import type { Metadata } from 'next';
import Script from 'next/script';

<Script
   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAWfuNoyVahS2oLLE3AqfP7hSRN8n2ZYAM&libraries=places&loading=async"
  strategy="beforeInteractive" // or "afterInteractive" depending on timing
  onLoad={() => {
    console.log('Google Maps script loaded');
  }}
/>
export const metadata: Metadata = {
    title: 'Find Best Daycares in USA | Affordable Prices | ChildrenKARE ',
    description: 'Discover best daycares in USA with ChildrenKARE. Find affordable options with prices, reviews and photos for a reliable daycare choice. Start your search now!',
    alternates: {
        canonical: `${process.env.PUBLIC_URL}`,  // ✅ Canonical URL
      },
    };

export default function RootLayout({ children }: { children: React.ReactElement }) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
