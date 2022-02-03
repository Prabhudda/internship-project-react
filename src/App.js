import React from 'react';
import Homepage from './components/Homepage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Footer from './components/Footer';


export default function App() {
  return (
    <div>
      <Homepage />
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4 
        title="Research  Facility" 
        content={<p>The research labs at our study sites use state-<br/>of-the-art equipment operated by highly <br/> qualified technicians</p>}
        />
        <Page5/>
        <Page6/>
        <Footer/>
    </div>
  );
} 
