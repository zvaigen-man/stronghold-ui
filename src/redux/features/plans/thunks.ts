import { createAsyncThunk } from '@reduxjs/toolkit'
import { Pagination } from '../../../models';
import { mockData } from '../../../utils/mockData/mock';
import { apiAdapter } from '../../middlewares/apiAadapter';
// TODO fix any type
export const getPlans = createAsyncThunk<any, Pagination | any>(
    'plans/getPlans',
    async ({ itemsPerPage, page, searchValue }) => {
        // TODO
        let sortBy = 'request_ts'
        let sortOrder = -1
        // return mockData;
        return apiAdapter.getPlans(page, itemsPerPage, sortBy, sortOrder, searchValue)
    }
);


export const getOverview = createAsyncThunk<any>(
    'projects/getOverview',
    async () => {
        return apiAdapter.getOverview()
    }
);

