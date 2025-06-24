import React, { useMemo, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Text } from '@react-three/drei';

const generateGraphData = () => {
    const nodes = [];
    const edges = [];

    nodes.push({ id: 0, label: 'shraeya iyer', position: [0, 0, 0], isCenter: true, radius: 0 });

    const tabNodesData = [
      { id: 6, label: 'about me', url: null, position: [-4, 3.4, 0] },
      { id: 3, label: 'research', url: null, position: [4, 3.4, 0] },
      { id: 1, label: 'resume', url: 'https://www.linkedin.com/in/shraeya-iyer-4b0796216/', position: [-4, -4.6, 0] },
      { id: 4, label: 'linkedin', url: 'https://www.linkedin.com/in/shraeya-iyer/', position: [4, -4.6, 0] },
      { id: 2, label: 'blog (coming soon)', url: null, position: [-8, -0.6, 0] },
      { id: 5, label: 'github', url: 'https://github.com/shraeya-iyer', position: [8, -0.6, 0] },
    ];

    const tabRadius = 6;
    tabNodesData.forEach(tab => {
        nodes.push({ ...tab, isTab: true, radius: tabRadius });
        edges.push({ source: 0, target: tab.id });
    });

    let nodeIdCounter = nodes.length;
    const shells = [
        { radius: 10, count: 20, connectToPreviousShell: true },
        { radius: 16, count: 30, connectToPreviousShell: true },
        { radius: 24, count: 40, connectToPreviousShell: true },
        { radius: 34, count: 50, connectToPreviousShell: true },
        { radius: 46, count: 60, connectToPreviousShell: true },
    ];

    let previousShellNodeStartIndex = 1;
    let previousShellNodeCount = tabNodesData.length;

    shells.forEach(shell => {
        const { radius, count, connectToPreviousShell } = shell;
        const currentShellNodeStartIndex = nodeIdCounter;
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i + 1) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);
            const newNodeId = nodeIdCounter++;
            nodes.push({ id: newNodeId, position: [x, y, z], radius });

            if (connectToPreviousShell) {
                const targetNodeIndex = previousShellNodeStartIndex + Math.floor(Math.random() * previousShellNodeCount);
                edges.push({ source: nodes[targetNodeIndex].id, target: newNodeId });
            }
        }
        previousShellNodeStartIndex = currentShellNodeStartIndex;
        previousShellNodeCount = count;
    });

    return { nodes, edges };
};

const Node = ({ forwardedRef, position, label, isTab, url, isCenter, onAboutClick, onResearchClick }) => {
    const internalRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame(({ clock }) => {
        const targetRef = forwardedRef || internalRef;
        if (targetRef.current && !isTab && !isCenter) {
            const time = clock.getElapsedTime();
            targetRef.current.position.x = position[0] + Math.sin(time + position[2]) * 0.2;
            targetRef.current.position.y = position[1] + Math.cos(time + position[0]) * 0.2;
            targetRef.current.position.z = position[2] + Math.sin(time + position[1]) * 0.2;
        }
    });

    const handleClick = (e) => {
        if (url) {
            e.stopPropagation();
            window.open(url, '_blank');
        } else if (label === 'about me') {
            e.stopPropagation();
            onAboutClick();
        } else if (label === 'research') {
            e.stopPropagation();
            onResearchClick();
        }
    };

    const handlePointerOver = (e) => {
        if ((isTab && url) || label === 'about me' || label === 'research') {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
        }
    };
    
    const handlePointerOut = () => {
        if ((isTab && url) || label === 'about me' || label === 'research') {
            setHovered(false);
            document.body.style.cursor = 'default';
        }
    };

    const sphereColor = isTab ? '#db3981' : '#fff5fa';
    const scale = hovered ? [1.5, 1.5, 1.5] : [1, 1, 1];

    if (isCenter) return null;

    return (
        <group position={position} ref={forwardedRef || internalRef}>
            <mesh
                onClick={handleClick}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                scale={scale}
            >
                <sphereGeometry args={[isTab ? 0.3 : 0.15, 32, 32]} />
                <meshStandardMaterial color={sphereColor} emissive={hovered ? 'orange' : sphereColor} />
            </mesh>
            {label && (
                <Text
                    position={[0, 0.6, 0]}
                    fontSize={0.4}
                    color="#fff5fa"
                    anchorX="center"
                    anchorY="middle"
                >
                    {label}
                </Text>
            )}
        </group>
    );
};

const Edge = ({ forwardedRef, sourceNode, targetNode }) => {
    return (
        <group ref={forwardedRef}>
            <Line
                points={[sourceNode.position, targetNode.position]}
                color="#fff5fa"
                lineWidth={0.5}
                transparent
                opacity={0.3}
            />
        </group>
    );
}

const Graph = ({ onAboutClick, onResearchClick }) => {
    const { nodes, edges } = useMemo(generateGraphData, []);
    const nodeRefs = useRef({});
    const edgeRefs = useRef({});

    nodes.forEach(n => nodeRefs.current[n.id] = nodeRefs.current[n.id] || React.createRef());
    edges.forEach((_, i) => edgeRefs.current[i] = edgeRefs.current[i] || React.createRef());

    useFrame(({ camera }) => {
        const distance = camera.position.length();
        const nodeVisibility = {};

        nodes.forEach(node => {
            const ref = nodeRefs.current[node.id];
            if (!ref.current) return;
            
            let isVisible = false;
            if (node.isTab) {
                isVisible = true;
            } else if (node.radius > 0) {
                isVisible = distance > node.radius + 5;
            }
            ref.current.visible = isVisible;
            nodeVisibility[node.id] = isVisible;
        });

        edges.forEach((edge, i) => {
            const ref = edgeRefs.current[i];
            if (ref.current) {
                const sourceVisible = nodeVisibility[edge.source];
                const targetVisible = nodeVisibility[edge.target];
                ref.current.visible = sourceVisible && targetVisible;
            }
        });
    });

    return (
        <group>
            {nodes.map(node => (
                <Node key={node.id} {...node} forwardedRef={nodeRefs.current[node.id]} onAboutClick={onAboutClick} onResearchClick={onResearchClick} />
            ))}
            {edges.map((edge, i) => {
                const sourceNode = nodes.find(n => n.id === edge.source);
                const targetNode = nodes.find(n => n.id === edge.target);
                if (!sourceNode || !targetNode) return null;
                return (
                   <Edge key={i} sourceNode={sourceNode} targetNode={targetNode} forwardedRef={edgeRefs.current[i]} />
                );
            })}
        </group>
    );
};

export default Graph; 