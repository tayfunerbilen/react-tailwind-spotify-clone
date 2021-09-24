import Sidebar from 'components/Sidebar'
import BottomBar from 'components/BottomBar'
import Content from 'components/Content'
import { BrowserRouter as Router } from "react-router-dom"

function App() {
	return (
		<Router>
			<div className="wrapper">
				<Sidebar/>
				<Content/>
			</div>
			<BottomBar/>
		</Router>
	);
}

export default App;
