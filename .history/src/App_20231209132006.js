import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Header from "./Header";
import Feed from "./Feed";
import { auth } from "./firebase";
import "./App.css";
import Sidebar from "./Sidebar";
import Login from "./Login";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //useris login
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  });

  return (
    <div className="app">
      {/*header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />

          {/*widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;