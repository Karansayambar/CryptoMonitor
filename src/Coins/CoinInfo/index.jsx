import React, { useState } from 'react';
import './style.css';

const CoinInfo = ({ heading, description }) => {
    const [flag, setFlag] = useState(false);

    const shortDesc = `${description.slice(0, 350)}<p style='color:var(--grey); cursor: pointer;'>Read More...</p>`;
    const longDesc = `${description}<p style='color:var(--grey); cursor: pointer;'>Read Less...</p>`;

    return (
        <div className='grey-wrapper'>
            <h2 className='coin-info-heading'>{heading}</h2>
            {description.length > 350 ? (
                <div 
                    onClick={() => setFlag(!flag)}
                    className='coin-info-desc'
                    dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
                >
                </div>
            ) : (
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
            )}
        </div>
    );
};

export default CoinInfo;
