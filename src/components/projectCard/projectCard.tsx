

import { FC, useEffect, useRef, useState } from 'react';
// import { Project } from '../../models';
import './projectCard.scss';
interface IProjectCardProps {
    data: any | undefined;
    onItemClick: (project: any) => void;
}
export const ProjectCard: FC<IProjectCardProps> = ({ data, onItemClick }) => {


    const elementRef: any = useRef(null);
    const wrapperRef: any = useRef(null);

    const handleHover = () => {

        elementRef.current.style.textOverflow = 'clip';
        elementRef.current.style.overflow = 'unset';
        elementRef.current.style.transition = 'left 1.63s linear 0s';
        elementRef.current.style.left =
            '-' + (elementRef.current.clientWidth - wrapperRef.current.clientWidth + 15) + 'px';

    }


    const handleMouseOut = () => {
        elementRef.current.style.transition = 'unset ';
        elementRef.current.style.overflow = 'hidden';
        elementRef.current.style.textOverflow = 'ellipsis';
        elementRef.current.style.left = "15px";
    }
    return (
        <>
            {data != undefined ?
                <div onClick={() => onItemClick(data)} className="card-wrapper pointer"
                    data-testid="projectCard">
                    <div
                        className="card-header flex" ref={wrapperRef}>
                        <span title={data.name} className="title" ref={elementRef} onMouseOut={handleMouseOut} onMouseOver={handleHover}>
                            {data.name}
                        </span>

                    </div>
                    <div className="card-body">

                    </div>
                    <div className="card-bottom space-between">
                        <span className="name" title={data.user_name}> {data.user_name}</span>
                        <span className="date">{data.request_ts}</span>
                    </div>
                </div>
                :
                <div className="card-wrapper ">
                    <div className="card-header flex">
                        <span className="ghost item">

                        </span>
                    </div>
                    <div className="card-body">

                    </div>
                    <div className="card-bottom space-between">
                        <span className="ghost item small half" ></span>
                        <span className="ghost item small quarter"></span>
                    </div>
                </div>

            }
        </ >
    );
};

