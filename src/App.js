import React, { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import Graph from './components/Graph';
import ZoomIndicator from './components/ZoomIndicator';
import AboutMe from './components/AboutMe';
import Research from './components/Research';

const CameraTracker = ({ setDistance }) => {
  useFrame(({ camera }) => {
    setDistance(camera.position.length());
  });
  return null;
};

function App() {
  const [distance, setDistance] = useState(35);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showResearch, setShowResearch] = useState(false);
  const minDistance = 5;
  const maxDistance = 100;

  const handleShowAboutMe = () => {
    setShowResearch(false);
    setShowAboutMe(true);
  };

  const handleShowResearch = () => {
    setShowAboutMe(false);
    setShowResearch(true);
  };

  const handleClosePopups = () => {
    setShowAboutMe(false);
    setShowResearch(false);
  }

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 35], fov: 75 }}
      >
        <color attach="background" args={['#12060c']} />
        <OrbitControls makeDefault minDistance={minDistance} maxDistance={maxDistance} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />

        <Suspense fallback={null}>
          <group visible={!showAboutMe && !showResearch}>
            <Text
              position={[0, 1.2, 0]}
              fontSize={1.5}
              color="#fff5fa"
              anchorX="center"
              anchorY="middle"
            >
              shraeya iyer
            </Text>
            <Text
              position={[0, -0.8, 0]}
              fontSize={0.5}
              color="#fff5fa"
              anchorX="center"
              anchorY="middle"
              textAlign="center"
              maxWidth={10}
            >
              4th year student at northwestern university studying cs + philosophy
            </Text>
            <Text
              position={[0, -2.4, 0]}
              fontSize={0.5}
              color="#fff5fa"
              anchorX="center"
              anchorY="middle"
              textAlign="center"
              maxWidth={10}
            >
              contact me at: shraeya[dot]iyer[at]gmail[dot]com
            </Text>
          </group>

          <Graph onAboutClick={handleShowAboutMe} onResearchClick={handleShowResearch} />
          <CameraTracker setDistance={setDistance} />
        </Suspense>
      </Canvas>
      <ZoomIndicator currentDistance={distance} minDistance={minDistance} maxDistance={maxDistance} />
      {showAboutMe && <AboutMe handleClose={handleClosePopups} />}
      {showResearch && <Research handleClose={handleClosePopups} />}
    </>
  );
}

export default App;
