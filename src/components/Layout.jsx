import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[102px] mobile:pt-[102px] tablet:pt-[112px] desktop:pt-[132px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout