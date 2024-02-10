import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type AppError } from 'utils/types/AppError';
import { type Plan } from './types/Plan';
import { createPlan, getAllPlans, getCurrentPlan, getPlanById, updatePlanById } from './plansApi';

interface PlansState {
  plans: Plan[];
  currentPlan?: Plan;
  isLoading: boolean;
  isError: boolean;
  error: AppError;
}

const initialState: PlansState = {
  plans: [],
  currentPlan: undefined,
  isLoading: false,
  isError: false,
  error: { message: '', code: 0 },
};

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlanById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPlanById.fulfilled, (state, action: PayloadAction<Plan>) => {
      state.isLoading = false;
      state.isError = false;
      state.currentPlan = action.payload;
    });
    builder.addCase(getPlanById.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(updatePlanById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updatePlanById.fulfilled, (state, action: PayloadAction<Plan>) => {
      state.isLoading = false;
      state.isError = false;
      state.currentPlan = action.payload;
    });
    builder.addCase(updatePlanById.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(getAllPlans.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPlans.fulfilled, (state, action: PayloadAction<Plan[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.plans = action.payload;
    });
    builder.addCase(getAllPlans.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(getCurrentPlan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCurrentPlan.fulfilled, (state, action: PayloadAction<Plan>) => {
      state.isLoading = false;
      state.isError = false;
      state.currentPlan = action.payload;
    });
    builder.addCase(getCurrentPlan.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });

    builder.addCase(createPlan.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPlan.fulfilled, (state, action: PayloadAction<Plan>) => {
      state.isLoading = false;
      state.isError = false;

      const currentPlans = state.plans;
      currentPlans.unshift(action.payload);
      state.plans = currentPlans;
    });
    builder.addCase(createPlan.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error.message = action.payload.message;
      state.error.code = action.payload.code;
    });
  },
});

export const {} = plansSlice.actions;

export default plansSlice.reducer;
