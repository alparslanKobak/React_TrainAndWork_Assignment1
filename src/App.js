
import './App.css';
import { useState } from 'react';
import React, { Component } from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import CoinList from './Components/CoinList';
import Modals from './Components/Modals';

export default class App extends Component {
  render() {
    return (

      <>
      {/* Header ve navigasyon kısmının bulunduğu alan */}
        <Header /> 
        {/* Slider kısmının bulunduğu alan */}
        <Slider />

        {/* Coin listesinin bulunduğu alan */}
        <CoinList />

        {/* Footer kısmının bulunduğu alan */}
        <Footer />

        {/* Modal kısmının bulunduğu alan */}
        <Modals />
      </>

    )
  }
}

