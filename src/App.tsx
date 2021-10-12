import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import FoodList from './components/food-list.component.js';
import CreateFood from './components/create-food.component.js';
import EditFood from './components/edit-food.component.js';
import Tab3 from './pages/Tab3.js';
import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>

        <IonRouterOutlet>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>

          <Route exact path="/">
            <Redirect to="/tab3" />
          </Route>

          <Route exact path="/foodList">
            <FoodList/>
          </Route>

          <Route exact path="/create">
            <CreateFood/>
          </Route>

          <Route path ="/edit/:id">
            <EditFood/>
          </Route>

        </IonRouterOutlet>


        <IonTabBar slot="bottom">
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={ellipse} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
        </IonTabBar>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={ellipse} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
