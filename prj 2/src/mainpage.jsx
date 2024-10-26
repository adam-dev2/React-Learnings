import { Button } from '@mui/material';

function Mainpage() {
    return (
        <>
            <div style={{display:'flex',position:'relative',marginTop:'5%'}}>
                <div>
                    <h1 style={{fontSize:'719%',marginLeft:'15%',marginBottom:'0',width:'70%'}}>YOUR FEET DESERVE THE BEST</h1>
                    <h3 style={{opacity:'50%',fontSize:"15px",marginLeft:'15%',marginTop:0,width:'50%',fontFamily:'fantasy',font:'caption'}}>
                        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                    </h3>
                    <button style={{color:'white',backgroundColor:'red',marginRight:'2%',width:'7%',borderStyle:'none',padding:"1%",marginLeft:'15%'}}><strong>Shop Now</strong></button>
                    <button style={{color:'grey',borderColor:'black',width:'90px',paddingTop:'5px',paddingBottom:'5px'}}><strong>Category</strong></button>
                </div>
                <img style={{width:'45%',marginRight:'5%',marginLeft:0,paddingLeft:0}} src="https://i.pinimg.com/originals/41/9d/b8/419db887db8cd173efcf6dda8300f139.png" alt="" />
            </div>
        </>
    )
}

export default Mainpage;