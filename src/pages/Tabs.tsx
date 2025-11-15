import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,} from '@ionic/react';
import {Redirect, Route} from 'react-router';
import {calendar, flashOutline, folder, home, person} from 'ionicons/icons';

import Home from './Home';
import Library from './Library';
import Flashcards from './Flashcards';
import Planner from './Planner';
import Profile from './Profile';

const Tabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/tabs/home" component={Home}/>
                <Route exact path="/tabs/library" component={Library}/>
                <Route exact path="/tabs/flashcards" component={Flashcards}/>
                <Route exact path="/tabs/planner" component={Planner}/>
                <Route exact path="/tabs/profile" component={Profile}/>
                <Route exact path="/tabs">
                    <Redirect to="/tabs/home"/>
                </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/tabs/home">
                    <IonIcon icon={home}/>
                    <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="library" href="/tabs/library">
                    <IonIcon icon={folder}/>
                    <IonLabel>Library</IonLabel>
                </IonTabButton>

                <IonTabButton tab="flashcards" href="/tabs/flashcards">
                    <IonIcon icon={flashOutline}/>
                    <IonLabel>Flashcards</IonLabel>
                </IonTabButton>

                <IonTabButton tab="planner" href="/tabs/planner">
                    <IonIcon icon={calendar}/>
                    <IonLabel>Planner</IonLabel>
                </IonTabButton>

                <IonTabButton tab="profile" href="/tabs/profile">
                    <IonIcon icon={person}/>
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default Tabs;