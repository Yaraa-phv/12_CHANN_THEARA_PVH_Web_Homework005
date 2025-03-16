
export default function Layout({children}) {
  return (
    <html lang="en">
      <body className="w-full h-screen bg-green-900">
      {children}
      </body>
    </html>
  );
}