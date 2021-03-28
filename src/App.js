import HomePage from './pages/HomePage/index'
import Shop from './pages/Shop/index'
import { Switch,Route,Link } from 'react-router-dom';

const Hats = (props) => {
  console.log(props)
  return (<div>
    <button onClick={()=>props.history.goBack()}>Go back</button>
  </div>)
}
const Topics = (props) => {
  return (
    <div>
      <Link to={`${props.match.url}/21`}> to topic 21</Link>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/hats" component={Hats}></Route>
      <Route path="/topics/:topicId" component={Topics}></Route>
      <Route exact path='/shop' component= {Shop}></Route>
    </Switch>
  );
}

export default App;
