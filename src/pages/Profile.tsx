import React from 'react';
import { IonPage, IonContent, IonButtons, IonBackButton, IonToolbar, IonTitle } from '@ionic/react'
import avatar from './avatar.png';
import './Profile.css';


function Profile() {
    return (
        <IonPage>
        <IonToolbar>
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
            <p className="profile__subtitle">Intravenous Injection & Canu</p>   
            <p className="progressbar__text">progress bar goes here</p>
            <p className="profile__subtitle">Local Skin Anesthecia</p>   
            <p className="progressbar__text">progress bar goes here</p>
            <p className="profile__subtitle">Wound cleaning</p>   
            <p className="progressbar__text">progress bar goes here</p>
        </IonContent>
        </IonPage>
    )
}

export default Profile
