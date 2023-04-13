import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./cart-slice";

const store = configureStore({
    reducer:{ui:uiSlice.reducer}
});


export default store