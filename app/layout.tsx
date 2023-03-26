import './globals.css'

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
      <body className='bg-primary-black text-[#fff]'>{children}</body>
    </html>
  )
}
