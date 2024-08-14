import '@openassistantgpt/ui/dist/index.css';

export const metadata = {
  title: 'OpenAssistantGPT SDK Example',
  description: 'Example of using OpenAssistantGPT SDK in a Next.js website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'ReyesLawLight, sans-serif' }}>{children}</body>
    </html>
  );
}
