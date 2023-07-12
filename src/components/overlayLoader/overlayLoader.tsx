

import { FC } from 'react';
import './overlayLoader.scss';

export const OverlayLoader: FC = () => {
    const gridArr: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    return (
        <>
            <div className="loader-wrapper" data-testid="OverlayLoader">

                <div className="grid">
                    {gridArr.map((item: number, i: number) => (
                        <div key={i} className={`cube cube${i + 1}`}></div>
                    ))}
                    <p>Loading...</p>
                </div>

            </div>
        </ >
    );
};

