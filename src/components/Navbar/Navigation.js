import { Icon } from "Icons";
import { useHistory } from "react-router-dom";

function Navigation() {

    const history = useHistory()

    return (
        <nav className="flex items-center gap-x-4">
            <button onClick={() => history.goBack()} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
                <Icon size={22} name="prev" />
            </button>
            <button onClick={() => history.goForward()} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
                <Icon size={22} name="next" />
            </button>
        </nav>
    )
}

export default Navigation