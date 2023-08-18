import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import DrinkListPage from "./pages/DrinkListPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { NextUIProvider } from "@nextui-org/react";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App = () => (
  <IonApp>
    <NextUIProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/drinkListPage">
            <DrinkListPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/drinkListPage" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </NextUIProvider>
  </IonApp>
);

export default App;
