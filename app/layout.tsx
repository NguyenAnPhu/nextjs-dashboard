import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  icons: {
    icon: [
      { url: '/icon/favicon.ico' },
      { url: '/icon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon/apple-icon.png' },
      { url: '/icon/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/icon/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/icon/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/icon/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/icon/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/icon/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/icon/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/icon/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icon/apple-icon-precomposed.png',
      },
    ],
  },
  manifest: '/icon/manifest.json',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/icon/ms-icon-144x144.png',
    'msapplication-config': '/icon/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
