import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/homePage";

const Routes = () => {
  return (
    <>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </AnimatePresence>
    </>
  );
};
export default Routes;
