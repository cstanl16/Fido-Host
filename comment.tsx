import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  function routeToFoodInfo() {
    const url = `https://www.akc.org/?s=${searchText}/`
    window.location.href = url;
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 className="homePageTitle">
          What Can Fido Eat?
        </h1>
        <br></br>
        <h3 className="searchTitle">Please Search for food here</h3>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="never">
        </IonSearchbar>
        <IonButton onClick={ routeToFoodInfo } class="moreInfoOnSearch">Help Me learn More!</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
