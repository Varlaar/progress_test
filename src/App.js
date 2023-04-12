import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import BonusPage from "./pages/BonusPage";
import { LayoutComponent } from "./components";

const App = () => {
  return (
    <Provider store={store}>
      <LayoutComponent children={<BonusPage />} />
    </Provider>
  );
};

export default App;
