import React from 'react'
import { IonContent, IonItem, IonInput, IonButton, IonPage } from '@ionic/react';
import Logo from './prepared-logo.png';
import './Login.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Login() {
  return (
    <IonPage>
    <IonContent color="secondary">
      <img src={Logo} alt="logo" />
      <form className="login__form">
        <IonItem>
          <IonInput placeholder="Email"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput placeholder="Password"></IonInput>
        </IonItem>
        <IonButton className="login__button" color="primary">Sign In </IonButton>
      </form>
      <p className="forgot__password">Forgot Password?</p>
      <p className="register__text"> Don't have an account?<Link to="/Register" className="register__link">Create One</Link></p>

    </IonContent>
    </IonPage>
  )
}

export default Login
