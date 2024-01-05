import React from 'react'
import Background from '../Background'
import NoiseBackground from '../NoiseBackground'

export default function Home() {
  return (
    <div>
      <div
        style={{
          background: "#000",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
        }}
      />
      <Background />
      <NoiseBackground />
    </div>
  );
}
