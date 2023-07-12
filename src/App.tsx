import { FC } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { AppHeader, SideMenu } from "./components";
import HomePage from "./pages/homePage/homePage";

export const App: FC = () => {
  return (
    <div className="App" data-testid="App">
      <AppHeader />
      <div className="app-content flex">
        <SideMenu></SideMenu>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact={true} path={"/home"} component={HomePage} />
          <Redirect from="*" to="/home"></Redirect>
        </Switch>
      </div>
    </div>
  );
};
