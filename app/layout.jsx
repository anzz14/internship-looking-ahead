import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import ConditionalNavbar from '@/components/ConditionalNavbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ConditionalNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
