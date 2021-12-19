import { configureStore } from '@reduxjs/toolkit'
import playerReducer from "stores/player"

export default configureStore({
    reducer: {
        player: playerReducer
    },
})
