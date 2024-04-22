import React, { useState } from 'react';
import { CiChat2 } from "react-icons/ci";
import './Commentary.css';
import ThoughtBubble from './ThoughtBubble';

const Commentary = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='commentary-container'>
            <div className={`toggle ${click ? 'expanded' : 'icon-only'}`} onClick={handleClick}>
                {click ? (
                    <div>
                        <ThoughtBubble />
                    </div>
                ) : (
                    <CiChat2 size={20} style={{ color: '#000' }} />
                )}
            </div>
        </div>
    );
}

export default Commentary;
