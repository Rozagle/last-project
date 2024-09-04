import {Route,Routes} from 'react-router-dom';
import { Navbar, Hero, RequirementExpertise, Client,  Footer, OurExpertise, About, Teams, ChangingNeed, ScrollUpBtn } from './components/Imports';
import PrivacyPolicy from './Pages/PolicyPrivacy';
import NotFound from './Pages/NotFound';

function App() {

  return (
<>
      <ScrollUpBtn />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <ChangingNeed />
            <RequirementExpertise />
            <About />
            <OurExpertise />
            <Client />
            <Teams />
            <Footer />
          </>
        } />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}

export default App;
