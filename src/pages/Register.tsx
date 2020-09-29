import React, { Fragment } from "react";
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonBackButton,
  IonHeader,
  IonButtons,
  IonToolbar,
  IonPage,
} from "@ionic/react";
import "./Register.css";

function Register() {
  return (
    <IonPage>
      <IonButtons>
      <IonBackButton defaultHref="/login" />
      </IonButtons>
      <IonContent color="secondary">
        <h1 className="register__textform">Create Account</h1>
        <form className="form__register">
          <IonItem>
            <IonInput placeholder="Name"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Email"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Password"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Password Check"></IonInput>
          </IonItem>
          <IonButton expand="block">Register</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default Register;
