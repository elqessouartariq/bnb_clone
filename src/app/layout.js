import './globals.css'

export const metadata = {
  title: 'bnb clone',
  description: 'developped with	love by Tariq El Qessouar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
