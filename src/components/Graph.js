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
      { id: 1, label: 'resume', url: 'https://drive.google.com/file/d/1KxroHzEz5tb511bqbGety8iKg94o4c8l/view?usp=sharing', position: [-4, -4.6, 0] },
      { id: 2, label: 'socials', url: null, position: [4, -4.6, 0] },
    ];

    const tabRadius = 6;
    tabNodesData.forEach(tab => {
        nodes.push({ ...tab, isTab: true, radius: tabRadius });
        edges.push({ source: 0, target: tab.id });
    });

    // Add branching nodes for socials tab
    const socialsBranchNodes = [
      { id: 7, label: 'x', url: 'https://twitter.com/shraeya_iyer', position: [6.5, -6.1, 0], isBranch: true, parentId: 2 },
      { id: 8, label: 'linkedin', url: 'https://www.linkedin.com/in/shraeya-iyer/', position: [4, -7.1, 0], isBranch: true, parentId: 2 },
      { id: 9, label: 'github', url: 'https://github.com/shraeya-iyer', position: [1.5, -6.1, 0], isBranch: true, parentId: 2 }
    ];

    socialsBranchNodes.forEach(branch => {
        nodes.push({ ...branch, isTab: true, radius: tabRadius * 0.7 });
        edges.push({ source: branch.parentId, target: branch.id });
    });

    // Start shell node IDs after the highest existing node ID
    let nodeIdCounter = Math.max(...nodes.map(n => n.id)) + 1;
    const shells = [
        { radius: 10, count: 20, connectToPreviousShell: true },
        { radius: 16, count: 30, connectToPreviousShell: true },
        { radius: 24, count: 40, connectToPreviousShell: true },
        { radius: 34, count: 50, connectToPreviousShell: true },
        { radius: 46, count: 60, connectToPreviousShell: true },
    ];

    // Store the original main tab node IDs for shell connections
    const mainTabNodeIds = tabNodesData.map(tab => tab.id);

    shells.forEach(shell => {
        const { radius, count, connectToPreviousShell } = shell;
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i + 1) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);
            const newNodeId = nodeIdCounter++;
            nodes.push({ id: newNodeId, position: [x, y, z], radius });

            if (connectToPreviousShell) {
                // Only connect to the original main tab nodes (not sub-nodes)
                const randomMainTabId = mainTabNodeIds[Math.floor(Math.random() * mainTabNodeIds.length)];
                edges.push({ source: randomMainTabId, target: newNodeId });
            }
        }
    });

    return { nodes, edges };
};

const Node = ({ forwardedRef, position, label, isTab, url, isCenter, isBranch, onAboutClick, onResearchClick }) => {
    const internalRef = useRef();
    const [hovered, setHovered] = useState(false);
    const threeDTextFontUrl = '/fonts/TASAExplorer-Regular.ttf';

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

    const sphereColor = isTab ? (isBranch ? '#badd7f' : '#005308') : '#d84f7a';
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
                <sphereGeometry args={[isTab ? (isBranch ? 0.25 : 0.3) : 0.15, 32, 32]} />
                <meshStandardMaterial color={sphereColor} emissive={hovered ? 'orange' : sphereColor} />
            </mesh>
            {label && (
                <Text
                    position={[0, isBranch ? (position[1] < 0 ? -0.6 : 0.6) : 0.6, 0]}
                    fontSize={0.4}
                    color="#61294e"
                    anchorX="center"
                    anchorY="middle"
                    font={threeDTextFontUrl}
                >
                    {label}
                </Text>
            )}
        </group>
    );
};

const Edge = ({ forwardedRef, sourceNode, targetNode, isBranchEdge }) => {
    return (
        <group ref={forwardedRef}>
            <Line
                points={[sourceNode.position, targetNode.position]}
                color="#8a7a58"
                lineWidth={isBranchEdge ? 1.5 : 0.5}
                transparent
                opacity={isBranchEdge ? 0.3 : 0.3}
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
                const isBranchEdge = targetNode.isBranch;
                return (
                   <Edge key={i} sourceNode={sourceNode} targetNode={targetNode} forwardedRef={edgeRefs.current[i]} isBranchEdge={isBranchEdge} />
                );
            })}
        </group>
    );
};

export default Graph; 