import { createAppSlice } from "@/lib/createAppSlice";
import { storeData } from "app/components/store/Data";
import { StoreItem } from "app/components/store/Data";

export interface BasketSliceState {
  products: StoreItem[];
  amount: number;
  total: number;
}

const initialState: BasketSliceState = {
  products: storeData,
  amount: storeData.reduce((accumulator, item) => accumulator + item.amount, 0), // Sum of all prices
  total: storeData.reduce((accumulator, item) => accumulator + item.amount * item.price, 0), // Sum of all prices
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const basketSlice = createAppSlice({
  name: "basket",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    incrementAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload.name);
      console.log(item)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (item) {

        item.amount++;
        state.amount++;
        state.total += item.price
      }
    },
    decrementAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload.name);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (item && item.amount > 0) {
        item.amount--;
        state.amount--;
        state.total -= item.price
      }
    },
    removeItem: (state, {payload}) => {
      const item = state.products.find((item) => item.name === payload.name);

      if (item && item.amount > 0) {
        state.amount -= item.amount;
        state.total -= item.amount * item.price
        item.amount = 0;
      }

      state.products = state.products.filter(item => item.name !== payload.name)

    }
  }),
  //   }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectProducts: (basket) => basket.products,
    selectAmount: (basket) => basket.amount,
    selectTotal: (basket) => basket.total,
  },
});

// Action creators are generated for each case reducer function.
export const { incrementAmount, decrementAmount, removeItem } = basketSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectProducts, selectAmount, selectTotal } =
  basketSlice.selectors;

// // We can also write thunk s by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
