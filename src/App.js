import React, { useEffect } from 'react'
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './global/styles.css'
import AppLayout from './layouts/AppLayout'
import { HeroUi, PaymentToolsUI, FooterUi, BusinessHeroUi } from './ui/index'
import { RouteProvider } from './contexts/RouteProvider'
import { useRouteContext } from './hooks/useRouteContext'

function App() {
  return (
    <RouteProvider>
      <AppLayout>
        <NavBar />
        <HeroUi />
        <PaymentToolsUI />
        <FooterUi />
      </AppLayout>
    </RouteProvider>
  )
}

export default App
