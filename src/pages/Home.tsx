import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IonSlides, IonSlide, IonIcon, IonFab, IonFabButton } from '@ionic/react';
import './Home.css';
import avatar from './avatar.png'
import { starOutline, star } from 'ionicons/icons';

const Home: React.FC = () => {

  const slideOpts = { slidesPerView: 1 };

  return (
    <IonPage>
      <IonContent color="secondary">
        <h2 className="home__title"> Good Morning</h2>
        <img src={avatar} alt="avatar" className="avatar__home"></img>
        <h2 className="your__goals">Your Goals</h2>

        <IonSlides options={slideOpts} pager={true}>
          <IonSlide >
            <IonCard style={{ "width": "100%" }} >
              <IonGrid>
                <IonRow>
                  <IonCol size="9">
                    <IonCardHeader>
                      <IonCardTitle>Card Title</IonCardTitle>
                      <IonCardSubtitle>test subtitle</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="3" style={{ 'margin-top': 'auto', 'margin-bottom': 'auto' }}>
                    <CircularProgressbar className="progress__bar" value={0.60} maxValue={1} text="100%" />
                  </IonCol>
                </IonRow>
              </IonGrid>

            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard>
              <IonCardContent>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonIcon icon={starOutline}></IonIcon>
                <IonIcon icon={star}></IonIcon>
              </IonCardContent>
            </IonCard>
          </IonSlide>
        </IonSlides>

        <a className="link__view">View All</a>
        <h2 className="activities__title">Activities</h2>
        <IonCard>
          <IonCardContent>
            <IonCardTitle>Feedback Received</IonCardTitle>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonCardTitle>Feedback Received</IonCardTitle>
          </IonCardContent>
        </IonCard>
        <IonFab className="fab__button" horizontal="center">
          <IonFabButton color="primary" >+</IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
