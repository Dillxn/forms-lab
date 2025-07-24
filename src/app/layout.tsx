export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body className="bg-gray-200 p-16">{children}</body>;
}
