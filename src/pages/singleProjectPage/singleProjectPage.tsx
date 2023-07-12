import { FC, useEffect } from "react";
import "./singleProjectPage.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppTable, OverlayLoader, VerticalStepper } from "../../components";
import { RootState } from "../../redux/root-state";
// import {
//   getProjectData,
//   getStepDetails,
// } from "../../redux/features/singleProject/thunks";
import { PlansState } from "../../models";
import { singlePageConstants } from "../../utils/texts";
import { getName } from "../../utils";
import { useAppDispatch } from "../../redux/store";
// import { getSelectedProject } from "../../redux/features/projects/thunks";
import { ReactComponent as RefreshIcon } from "../../assets/refresh.svg";

// export const SingleProjectPage: FC = (props: any) => {
//   const dispatch = useAppDispatch();
//   const history = useHistory();

//   const projectId: string = props.match.params.projectId;

//   const { steps, isLoading, selectedStepData }: SingleProjectState =
//     useSelector((state: RootState) => state.singleProjectState);
//   const { selectedProject }: ProjectsState = useSelector(
//     (state: RootState) => state.projectsState
//   );
//   const userName = getName(selectedProject?.user_name || "");

//   useEffect(() => {
//     if (selectedProject == undefined) {
//       dispatch(getSelectedProject(projectId)).then((res: any) => {
//         if (res && res.payload) {
//           fetchProjectData().then((res: any) => {});
//         } else {
//           history.push(`/home}`);
//         }
//       });
//     } else {
//       dispatch(getProjectData(projectId));
//     }
//   }, [dispatch]);

//   const fetchProjectData = async () => {
//     dispatch(getProjectData(projectId));
//   };

//   const handleRowClick = () => {};

//   const getStepData = (rowData: any, tableType: any) => {
//     let stepName: string;
//     let expId: string = "";
//     if (tableType === "vartical3") {
//       stepName = "experiment";
//       expId = rowData._id;
//     } else {
//       stepName = rowData.action_name;
//     }

//     dispatch(
//       getStepDetails({
//         stepName: stepName,
//         projectId: projectId,
//         expId: expId,
//       })
//     );
//   };

//   return (
//     <>
//       {isLoading ? <OverlayLoader></OverlayLoader> : null}

//       <div className="page-wrapper">
//         {selectedProject ? (
//           <div className="page-header flex ">
//             <div className="column center">
//               <div className="proj-name">{selectedProject.name}</div>
//               <div className="container-right flex">
//                 <span className="date">
//                   {singlePageConstants.createdAt}&nbsp;
//                   {selectedProject.request_ts}
//                 </span>
//                 <span className="name">
//                   &nbsp;{singlePageConstants.by}
//                   {userName}
//                 </span>
//               </div>
//             </div>

//             <RefreshIcon
//               className="refresh pointer"
//               onClick={fetchProjectData}
//             ></RefreshIcon>
//           </div>
//         ) : null}

//         <div className="content flex">
//           <div className="project-details steps column">
//             <VerticalStepper
//               handleStepClick={(rowData, tableType) =>
//                 getStepData(rowData, tableType)
//               }
//               data={steps}
//             ></VerticalStepper>
//           </div>

//           <div className="project-details experiments column">
//             {selectedStepData && selectedStepData.rows == undefined ? (
//               Object.keys(selectedStepData).map((label: string, i: number) =>
//                 selectedStepData[label].rows.length > 0 ? (
//                   <>
//                     <AppTable
//                       key={"experiment" + i}
//                       type={selectedStepData[label].type}
//                       columns={selectedStepData[label].columns}
//                       rows={selectedStepData[label].rows}
//                       onRowClick={handleRowClick}
//                     ></AppTable>
//                     <br />
//                   </>
//                 ) : null
//               )
//             ) : selectedStepData != undefined ? (
//               <AppTable
//                 type={selectedStepData.type}
//                 columns={selectedStepData.columns}
//                 rows={selectedStepData.rows}
//                 onRowClick={handleRowClick}
//               ></AppTable>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleProjectPage;
