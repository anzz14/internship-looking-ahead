import '../globals.css'

export default function AdminLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="admin-layout">
        {children}
      </body>
    </html>
  );
}
