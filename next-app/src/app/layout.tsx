import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>What to to, to live you?</title>
      </head>

      <body className={inter.className}>
                <div className="container text-center d-flex align-items-center vh-100">
                <div className="row">
                    <div className="col-7">
                      <img src="/main_logo.jpg" className="img-fluid" alt="main_logo"></img>
                    </div>
                    <div className="col-5">
                          {children}
                    </div>
                </div>
                </div>
      </body>
    </html>
  )
} 