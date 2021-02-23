import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserForm from "./components/userform";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path="/" render = { () => <UserForm /> } />						
						{/* <Route exact path="/" render = { () => <Main /> } />					 */}
					</div>
				</Router>
			</div>
		);
	}
}

export default App;

// import React from 'react'

// import IntroSection from './components/intro/Intro'
// import ContactSection from './components/contact-section/ContactSection'
// // import MapSection from './components/map/Map' // import the map here
// import DisclaimerSection from './components/disclaimer/Disclaimer'
// import FooterSection from './components/footer/Footer'


// import './App.css'

// // const location = {
// //   address: ' 23 centennial street, Regina, Saskatchewan',
// //   lat: 50.41535,
// //   lng: -104.59671,
// // } // our location object from earlier

// const App = () => (
//   <div className="App">
//     <IntroSection />
//     <ContactSection />
//     {/* <MapSection location={location} zoomLevel={12} />  */}
//     <DisclaimerSection />
//     <FooterSection />
//   </div>
// )

// export default App
