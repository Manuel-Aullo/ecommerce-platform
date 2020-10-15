import React from "react";
import HomePage from "./views/homepage/homepage.view";
import ShopPage from "./views/shop/shop.view";
import HatsView from "./views/hats/hats.view";
import JacketsView from "./views/jackets/jackets.view";
import SneakersView from "./views/sneakers/sneakers.view";
import MenView from "./views/men/men.view";
import WomenView from "./views/women/women.view";
import Header from "./components/header/header.component";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/shop/hats" component={HatsView} />
        <Route exact path="/shop/jackets" component={JacketsView} />
        <Route exact path="/shop/sneakers" component={SneakersView} />
        <Route exact path="/shop/mens/" component={MenView} />
        <Route exact path="/shop/womens/" component={WomenView} />
      </Switch>
    </div>
  );
}

export default App;
