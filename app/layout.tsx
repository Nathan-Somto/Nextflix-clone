
import './globals.css'
import AuthProvider from './context/AuthContext';
export const metadata = {
  title: 'Netflix',
  description: 'A simple Netflix clone built with next js 13 and typescript',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${'bg-[#000]'} text-[#fff]`}>
      <AuthProvider>
        {children}
        </AuthProvider>
      
      </body>
    </html>
  )
}
