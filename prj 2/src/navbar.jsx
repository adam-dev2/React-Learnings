import { Button } from '@mui/material';
function Navbar() {
    return (
        <>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <img src="prj 2/src/images/Nike-Logo.png" alt="nikelogo" />
                </div>
                <div>
                    <Button>MENU</Button>
                    <Button>LOCATION</Button>
                    <Button>ABOUT</Button>
                    <Button>CONTACT</Button>
                </div>
                <div style={{backgroundColor:'red'}}>
                    <Button>Login</Button>
                </div>
            </div>
        </>
    )
}

export default Navbar;