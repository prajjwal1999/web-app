import React, { Component } from "react";
import db from "../../Firebase";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      if (user != null) {
        db.collection("profile")
          .doc(user.uid)
          .get()
          .then((docSnapshot) => {
            if (!docSnapshot.exists) {
              db.collection("profile")
                .doc(user.uid)
                .set(
                  {
                    name: user.displayName,
                    email: user.email,
                    post: [],
                    country: "USAwqdqd",
                    followers: [],
                    following: [],
                    hobby: "xx",
                    Profession: "ssx",
                  },
                  { merge: true }
                )
                .then(() => {
                  console.log("Document successfully writen!");
                })
                .catch((error) => {
                  console.error("Error writing document: ", error);
                });
            }
          });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>

            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>

            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
