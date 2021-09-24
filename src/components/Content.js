import { Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar'

import Home from "views/Home"
import Search from "views/Search"
import Collection from "views/Collection"

function Content() {
	return (
		<main className="flex-auto">
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
				<Route path="/collection">
					<Collection />
				</Route>
			</Switch>
		</main>
	)
}

export default Content