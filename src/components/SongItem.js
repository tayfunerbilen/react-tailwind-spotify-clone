import {Icon} from "Icons";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setCurrent } from "stores/player";

function SongItem({ item }) {

    const dispatch = useDispatch()
    const { current, playing, controls } = useSelector(state => state.player)
    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return 'rounded-full'

            case 'podcast':
                return 'rounded-xl'

            default:
                return 'rounded'
        }
    }

    const updateCurrent = () => {
        if (current.id === item.id) {
            if (playing) {
                controls.pause()
            } else {
                controls.play()
            }
        } else {
            dispatch(setCurrent(item))
        }
    }

    const isCurrentItem = (current?.id === item.id && playing)

    return (
        <NavLink
            key={item.id}
            to="/"
            className={"bg-footer p-4 rounded hover:bg-active group"}
        >
            <div className="pt-[100%] relative mb-4">
                <img src={item.image} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} />
                <button
                    onClick={updateCurrent}
                    className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center ${!isCurrentItem ? 'hidden' : 'flex'}`}>
                    <Icon name={isCurrentItem ? 'pause' : 'play'} size={16} />
                </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">
                {item.description}
            </p>
        </NavLink>
    )
}

export default SongItem
