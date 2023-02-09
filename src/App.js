import "./App.css";
import Header from "./components/header/Header";
import { Home } from "./components/home/home";
import { Routes, Route } from "react-router-dom";
import { Cards } from "./components/cards/cards";
import { Layout } from "./layout/layout";
import { Checkout } from "./components/checkout/checkout";
import { Login } from "./components/login/login";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
// useEffect(()=> {
//   auth.onAuthStateChanged(authUser => {
//     console.log('the user here', authUser);
//   })
// }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>}/>
      </Route>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
