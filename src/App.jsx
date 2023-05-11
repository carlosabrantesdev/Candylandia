import { Route } from 'react-router-dom';
import Home from './Home';
import Vitrine from './Vitrine';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/vitrine" component={Vitrine} />
    </div>
  );
}

export default App;