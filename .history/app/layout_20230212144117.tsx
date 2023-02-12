import '../styles/globals.css't
import 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
