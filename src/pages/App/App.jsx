import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseAuth/supabaseClient";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Container from "../../components/Container/Container";
import "./App.css"
import RecipeDisplay from "../../components/RecipeDisplay/RecipeDisplay";
import Modal from 'react-bootstrap/Modal'


function App() {

  // useEffect(() => {
  //   getCountries();
  // }, []);

  // async function getCountries() {
  //   const { data } = await supabase.from("countries").select();
  //   setCountries(data);
  // }

  return (
    <div className="app">
      <NavBar />
      <Hero />
      <div style={{display:"flex", margin:"20px", justifyContent:"space-around"}}>
      <RecipeDisplay />
      {/* <Container />
      <Container /> */}
      </div>
    </div>
  );
}

export default App;