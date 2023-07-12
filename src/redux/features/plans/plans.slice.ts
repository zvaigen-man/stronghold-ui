import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plan, PlansState } from "../../../models";
import { getOverview, getPlans } from "./thunks";

const REQUEST_LIMIT: number = 20;

const REQUEST_PAGE: number = 0;

const initialState: PlansState = {
  plans: [],
  selectedTrainees: [],
  plansTotalAmount: 0,
  isLoading: false,
  searchTerm: "",
  pagination: { page: REQUEST_PAGE, itemsPerPage: REQUEST_LIMIT },
};

const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    // setSearchTerm(state, action: PayloadAction<string>) {
    //   state.searchTerm = action.payload;
    //   state.pagination = { page: 0, itemsPerPage: REQUEST_LIMIT };
    //   state.plans = [];
    // },
    setCellValue(state, action: PayloadAction<any>) {
      const { event, row, field, index } = action.payload;
      state.plans = state.plans.map((plan, i) => {
        if (i === index) {
          plan.exercises = plan.exercises.map((ex: any) => {
            if (ex.id === row.id) {
              ex[field] = event.target.value;
              console.log(ex);
              
            }
            return ex;
          });
        }
        return plan;
      });
    },
  },
  extraReducers: {
    [getPlans.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [getPlans.fulfilled.type]: (state, { payload }) => {
      try {
        state.plans = state.plans.concat(payload);
        state.plans = state.plans.concat(payload);
        state.plans = state.plans.concat(payload);
        state.plans = state.plans.concat(payload[0]);

        state.isLoading = false;
      } catch (error) {
        // TODO handle error
        console.log(error);
      }
    },
    [getPlans.rejected.type]: (state, action) => {
      state.isLoading = false;
    },
  },
});

// export const { setSelectedProject, setPagination, setSearchTerm } =
export const { setCellValue } = plansSlice.actions;

export const plansReducer = plansSlice.reducer;
