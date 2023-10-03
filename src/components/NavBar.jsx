import {useNavigate} from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/Home");
    };
    
    const handleProfile = () => {
    navigate("/Profile");
    };

    const handleSettings = () => {
    navigate("/Settings");
    };

  

    return (
        <>
       
        <ul>
            <li><a>MY WEBSITE</a></li>
            <li><a onClick={handleHome}>Home</a></li>
            <li><a onClick={handleProfile}>Profile</a></li>
            <li><a onClick={handleSettings}>Settings</a></li>
        </ul> 
        
        
        </>
    )
}


export default NavBar