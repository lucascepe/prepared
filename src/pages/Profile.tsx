import React from 'react';
import { IonPage, IonContent, IonButtons, IonBackButton, IonToolbar, IonTitle } from '@ionic/react'
import avatar from './avatar.png';
import './Profile.css';


function Profile() {

  const hardcodedValues = [
    { name: "Intravenous Injection & Canu", percentage: 45 },
    { name: "Local Skin Anesthecia", percentage: 55 },
    { name: "Wound cleaning", percentage: 65 },
    { name: "Poronga operation", percentage: 25 },
  ]

  return (
    <IonPage>
      <IonToolbar color="secondary">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>Andres Müller</IonTitle>
        <IonButtons slot="end">
          <IonBackButton defaultHref="/" />
        </IonButtons>
      </IonToolbar>
      <IonContent color="secondary">
        <img src={avatar} alt="user__img" className="avatar__profileimg"></img>
        <h2 className="skills__overview">Skills Overview</h2>

        {
          hardcodedValues.map(value => (
            <div>
              <p className="profile__subtitle">{value.name}</p>
              <div>
                <div style={{ 'background': 'var(--ion-color-primary)', 'width': '100%', 'height': '30px', borderRadius: '3px', 'margin': '0 auto' }}>
                  <div style={{ background: 'white', opacity: '.5', width: `${value.percentage}%`, height: '30px' }}></div>
                </div>
              </div>
            </div>
          ))
        }




      </IonContent>
    </IonPage>
  )
}

export default Profile

/*
<p className="profile__subtitle">Local Skin Anesthecia</p>
        <p className="progressbar__text">progress bar goes here</p>
        <p className="profile__subtitle">Wound cleaning</p>
        <p className="progressbar__text">progress bar goes here</p>
*/