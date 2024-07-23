import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './main.css'
import { Canvas } from '@react-three/fiber'

const cameraSettings = {
  fov: 45,
  zoom: 100,
  near: 0.01,
  far: 200,
  position: [9, 5, 12]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
      dpr={1}
      gl={{ antialias: true }}
      // flat
      orthographic camera={cameraSettings}>
      <App />
    </Canvas>
  </React.StrictMode>,
)
