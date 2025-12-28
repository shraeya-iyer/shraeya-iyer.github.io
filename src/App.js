import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Text3D, OrbitControls, Center } from '@react-three/drei';
import Graph from './components/Graph';
import ZoomIndicator from './components/ZoomIndicator';
import AboutMe from './components/AboutMe';
import Research from './components/Research';
import Projects from './components/Projects';
import Publications from './components/Publications';

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
  const [showProjects, setShowProjects] = useState(false);
  const [showPublications, setShowPublications] = useState(false);
  const controlsRef = useRef();
  const minDistance = 5;
  const maxDistance = 50;
  const threeDTextFontUrl = '/fonts/TASAExplorer-Regular.ttf';
  const threeDText3DFontUrl = '/fonts/TASAExplorer-Regular.json';

  const handleShowAboutMe = () => {
    setShowResearch(false);
    setShowProjects(false);
    setShowPublications(false);
    setShowAboutMe(true);
  };

  const handleShowResearch = () => {
    setShowAboutMe(false);
    setShowProjects(false);
    setShowPublications(false);
    setShowResearch(true);
  };

  const handleShowProjects = () => {
    setShowAboutMe(false);
    setShowResearch(false);
    setShowPublications(false);
    setShowProjects(true);
  };

  const handleShowPublications = () => {
    setShowAboutMe(false);
    setShowResearch(false);
    setShowProjects(false);
    setShowPublications(true);
  };

  const handleClosePopups = () => {
    setShowAboutMe(false);
    setShowResearch(false);
    setShowProjects(false);
    setShowPublications(false)
  }

  const handleZoomIn = () => {
    if (controlsRef.current && distance > minDistance) {
      const currentDistance = controlsRef.current.object.position.length();
      const newDistance = Math.max(minDistance, currentDistance - 2);
      const direction = controlsRef.current.object.position.clone().normalize();
      controlsRef.current.object.position.copy(direction.multiplyScalar(newDistance));
      controlsRef.current.update();
    }
  };

  const handleZoomOut = () => {
    if (controlsRef.current && distance < maxDistance) {
      const currentDistance = controlsRef.current.object.position.length();
      const newDistance = Math.min(maxDistance, currentDistance + 2);
      const direction = controlsRef.current.object.position.clone().normalize();
      controlsRef.current.object.position.copy(direction.multiplyScalar(newDistance));
      controlsRef.current.update();
    }
  };

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
      >
        <color attach="background" args={['#fcf2e8']} />
        <OrbitControls ref={controlsRef} makeDefault minDistance={minDistance} maxDistance={maxDistance} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />

        <Suspense fallback={null}>
          <group visible={!showAboutMe && !showResearch && !showProjects && !showPublications}>
            {/* Shadow Text3D */}
            <Center position={[0.15, 1.1, -0.1]}>
              <Text3D
                font={threeDText3DFontUrl}
                size={1.5}
                height={0.4}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.1}
                bevelSize={0.05}
                bevelOffset={0}
                bevelSegments={5}
                letterSpacing={0.1}
              >
                shraeya iyer
                <meshBasicMaterial color="#61294e" />
              </Text3D>
            </Center>
            {/* Main Text3D */}
            <Center position={[0, 1.2, 0]}>
              <Text3D
                font={threeDText3DFontUrl}
                size={1.5}
                height={0.4}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.1}
                bevelSize={0.05}
                bevelOffset={0}
                bevelSegments={5}
                letterSpacing={0.1}
              >
                shraeya iyer
                <meshBasicMaterial color="#b0045a" />
              </Text3D>
            </Center>
            <Text
              position={[0, -0.8, 0]}
              fontSize={0.5}
              color="#61294e"
              anchorX="center"
              anchorY="middle"
              textAlign="center"
              maxWidth={10}
              font={threeDTextFontUrl}
            >
              4th year student at northwestern university studying cs + philosophy
            </Text>
            <Text
              position={[0, -2.4, 0]}
              fontSize={0.5}
              color="#61294e"
              anchorX="center"
              anchorY="middle"
              textAlign="center"
              maxWidth={10}
              font={threeDTextFontUrl}
            >
              contact me at: shraeya[dot]iyer[at]gmail[dot]com
            </Text>
          </group>

          <Graph onAboutClick={handleShowAboutMe} onResearchClick={handleShowResearch} onProjectsClick={handleShowProjects} onPublicationsClick={handleShowPublications} />
          <CameraTracker setDistance={setDistance} />
        </Suspense>
      </Canvas>
      <ZoomIndicator 
        currentDistance={distance} 
        minDistance={minDistance} 
        maxDistance={maxDistance}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />
      {showAboutMe && <AboutMe handleClose={handleClosePopups} />}
      {showResearch && <Research handleClose={handleClosePopups} />}
      {showProjects && <Projects handleClose={handleClosePopups} />}
      {showPublications && <Publications handleClose={handleClosePopups} />}
    </>
  );
}

export default App;
