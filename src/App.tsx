import React from 'react'
import { VehicleProvider } from './context/VehicleContext'
import Navigation from './components/Navigation'
import VehicleGrid from './components/VehicleGrid'

const App: React.FC = () => {
  return (
    <VehicleProvider>
      <Navigation />
      <VehicleGrid />
    </VehicleProvider>
  )
}

export default App
