import Curses from "./Tasks/Curses"
import General from "./General/General"
import "./App.css"

function App() {
    switch (location.pathname) {
        case "/":
            return (
                <>
                    <General/>
                </>
            )
        case "/Curses":
            return (
                <>
                    <Curses/>
                </>
            )
        default:
            return (
                <>

                </>
            )
    }
}

export default App
