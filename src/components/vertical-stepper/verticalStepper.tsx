import { FC } from 'react';
import './verticalStepper.scss';
import { Step, StepContent, StepLabel, Stepper } from '@mui/material';
import AppTable from '../app-table/appTable';

interface IVerticalStepperProps {
    data: any
    handleStepClick: (stepName: any, type?: string) => void
}


export const VerticalStepper: FC<any> = (props: any) => {
    const { data, handleStepClick } = props

    return (
        <>
            {/* <div className="stepper-wrapper" data-testid="VerticalStepper">
                <div className="root">
                    <Stepper orientation="vertical">

                        {Object.keys(data).map((label: string, index: number) => (
                            <Step active={true} completed={false}
                                key={index} >
                                <StepLabel className="label flex pointer">{label}</StepLabel>

                                <StepContent>

                                    <div className="content-wrapper">
                                        {data[label].rows && data[label].rows.length > 0 &&
                                            <AppTable
                                                type={'vartical' + index} columns={data[label].columns}
                                                rows={data[label].rows} onRowClick={handleStepClick}>
                                            </AppTable>
                                        }

                                    </div>

                                </StepContent>
                            </Step>
                        ))}



                    </Stepper>

                </div>
            </div> */}
        </ >
    );
};


export default VerticalStepper;