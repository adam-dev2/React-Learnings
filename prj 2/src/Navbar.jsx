import { Button } from '@mui/material';
function Navbar() {
    return (
        <> 
            <div id='imgdiv' style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <img style={{width:'50px', marginLeft:'30%'}} src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="nikelogo" />
                </div>
                <div>
                    <Button style={{color:'black'}}><strong>MENU</strong></Button>
                    <Button style={{color:'black'}}><strong>LOCATION</strong></Button>
                    <Button style={{color:'black'}}><strong>ABOUT</strong></Button>
                    <Button style={{color:'black'}}><strong>CONTACT</strong></Button>
                </div>
                <div style={{backgroundColor:'red'}}>
                    <Button style={{color:'white'}}><strong>Login</strong></Button>
                </div>
            </div>
        </>
    )
}

export default Navbar;