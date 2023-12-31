import { Inter } from 'next/font/google'
import '../styles/globals.css'
import SideHeader from '@/components/site-header'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div>
                <SideHeader/>
                <div>{children}</div>
            </div>
        </ThemeProvider>
        </body>
      </html>
  )
}
