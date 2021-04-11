import HomePage from "./pages/HomePage/index";
import ShopPage from "./pages/Shop/index";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/index";
import Header from "./components/header/index";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

const Hats = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.goBack()}>Go back</button>
    </div>
  );
};
const Topics = (props) => {
  return (
    <div>
      <Link to={`${props.match.url}/21`}> to topic 21</Link>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={Hats}></Route>
        <Route path="/topics/:topicId" component={Topics}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
