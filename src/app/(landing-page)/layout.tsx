import React from 'react'
import Header from '@/components/organisms/Header'

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default LandingLayout
