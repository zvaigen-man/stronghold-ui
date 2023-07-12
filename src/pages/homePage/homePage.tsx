import { FC, useEffect } from "react";
import "./homePage.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-state";
import { getPlans } from "../../redux/features/plans/thunks";
import { Plan, PlansState, TableColumn } from "../../models";
import { useHistory } from "react-router-dom";
// import { setPagination, setSearchTerm, setSelectedProject } from '../../redux/features/projects/plans.slice';
// import { setSelectedStepActions } from '../../redux/features/singleProject/singleProject.slice';
import { ReactComponent as ArrowUp } from "../../assets/arrow-up.svg";
import { homePageConstants } from "../../utils/texts";
import { AppTable } from "../../components";
import { setCellValue } from "../../redux/features/plans/plans.slice";

export const HomePage: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { plans, isLoading, plansTotalAmount, pagination }: PlansState =
    useSelector((state: RootState) => state.plansState);

  // const { page, itemsPerPage } = pagination

  useEffect(() => {
    dispatch(
      getPlans({
        // page: page,
        // itemsPerPage: itemsPerPage,
        // searchValue: searchTerm
      })
    );
  }, []);

  const planColumns: TableColumn[] = [
    { name: "תרגיל", type: "text", field: "label" },
    { name: "סטים", type: "number", field: "sets" },
    { name: "חזרות/טווח חזרות", type: "text", field: "reps" },
    { name: "משקל", type: "number", field: "weight" },
    { name: "מנוחה", type: "number", field: "rest" },
    { name: "RPE", type: "number", field: "rpe" },
    { name: "הערות", type: "number", field: "comments" },
  ];
  const handleRowClick = async (plan: Plan) => {
    // if (project.isPrivate) return;
    // dispatch(setSelectedProject(project));
    // dispatch(setSelectedStepActions(undefined));
  };

  const handleRowChange = (
    event: any,
    row: any,
    field: string,
    index: number
  ) => {
    // if (project.isPrivate) return;
    dispatch(setCellValue({ event, row, field, index }));
    // dispatch(setSelectedStepActions(undefined));
  };

  const handleCellBlur = (
    event: any,
    row: any,
    field: string,
    index: number
  ) => {
    debugger;
    // if (project.isPrivate) return;
    // dispatch(setCellValue({ event, row, field, index }));
    // dispatch(setSelectedStepActions(undefined));
  };

  // const fetchMoreData = () => {
  //     setTimeout(() => {
  //         dispatch(setPagination(page + 1));
  //     }, 100);
  // };

  return (
    <div className="home-page-wrapper " data-testid="Home-page">
      <div className="content">
        <div className="top-section"></div>
        <div className="plans-container">
          {plans.map((plan, i) => {
            return (
              <AppTable
                key={"plan" + i}
                type={"asd"}
                columns={planColumns}
                rows={plan.exercises}
                onRowClick={handleRowClick}
                onChange={(e: any, row: any, field: string) =>
                  handleRowChange(e, row, field, i)
                }
                onBlur={(e: any, row: any, field: string) =>
                  handleCellBlur(e, row, field, i)
                }
              ></AppTable>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
