//import 
import { NavLink } from "react-router-dom";
//import 

export default function Homepage () {
    return (
        <>
            <div id="containerHome">
                <div className="containerNavBar">
                    <div className="contInfo"></div>
                    <NavLink to="/webDeveloper"><div className="containerPages webDeveloper"></div></NavLink>
                    <NavLink to="/photography"><div className="containerPages photography"></div></NavLink>
                    <NavLink to="/blender"><div className="containerPages blender"></div></NavLink>
                    <NavLink to="/stampa3D"><div className="containerPages stampa3D"></div></NavLink>
                </div>
            </div>
        </>
    )
}