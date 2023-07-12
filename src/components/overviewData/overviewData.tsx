

import { FC } from 'react';
// import { OverviewData } from '../../models';
import './overviewData.scss';
// import logo from './../../../public/ds.png';
interface IOverviewProps {
    data?: any
}
export const Overview: FC<IOverviewProps> = ({ data }) => {

    return (
        <>
            {data ?

                <div className="overview-wrapper" data-testid="Overview">
                    <img width="100px" height="100px" src="/ds.png" alt="" />

                    <div className="item space-evenly">

                        <span>Projects:&nbsp;</span>
                        <span>{data.projectsTotalAmount || 0}</span>


                    </div>
                    <div className="item space-evenly">
                        <span>Users:&nbsp;</span>
                        <span>{data.usersTotalAmount || 0}</span>


                    </div>
                    <div className="item space-evenly">
                        <span>Experiments:&nbsp;</span>
                        <span>{data.experimentsTotalAmount || 0}</span>


                    </div>
                </div>
                : null
            }

        </ >
    );
};

