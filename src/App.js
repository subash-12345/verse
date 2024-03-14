
import './App.css';
import './Navbar.css';
import './mostpopular.css';
import './featuretopics.css';
import './Topreads.css';
import './Recently.css';
import './Browse.css'
import Navbar from './Navbar';
import SecondHeader from './secondnavbar';
import BodyContent from './resource';
import MostPopular from './mostpopular';
import FeaturedTopics from './featuretopics';
import TopReads from './Topreads';
import Recently from './Recently';
import Browse from './Browse'
import Fooder from './Footer';
function App() {
  return (
    <div className="App">
        <Navbar />
        <SecondHeader />
        <BodyContent />
        <MostPopular />
        <FeaturedTopics />
        <TopReads />
        <Recently />
        <Browse />
        <Fooder />
    </div>
  );
}

export default App;
