function Taskbdy() {
    return (
        <>
            <div style={{marginTop: '10px', borderRadius : '5px', marginLeft : '5%', width : '100%', }}>
                <div style={{backgroundColor : 'brown',height:'100%'}}>
                    <p >Projects / My Project</p>
                    <h2>My Project</h2>
                </div>
                <div>
                    <div style={{display : 'flex'}}>
                        <h3 style={{marginRight : '5.5%',padding:'10px',marginTop:'1%',color :'grey',fontSize:'15px'}}>Priority</h3>
                        <p style={{backgroundColor : 'grey',borderRadius : '4px' ,padding: '10px',marginTop:'1%'}}>Medium</p>
                    </div>
                    <div style={{display : 'flex'}}>
                        <h3 style={{marginRight : '5%',padding:'10px',marginTop:'1%',color :'grey',fontSize:'15px'}}>DueDate</h3>
                        <p style={{backgroundColor : 'grey',borderRadius : '4px' ,padding: '10px',marginTop:'1%'}}>20 Feb 2023</p>
                    </div>
                    <div style={{display : 'flex'}}>
                        <h3 style={{marginRight : '8.25%',padding:'10px',marginTop:'1%',color :'grey',fontSize:'15px'}}>Tags</h3>
                        <p style={{backgroundColor : 'grey',borderRadius : '4px' ,padding: '10px',marginTop:'1%',marginRight:'2%'}}>Meetings</p>
                        <p style={{backgroundColor : 'grey',borderRadius : '4px' ,padding: '10px',marginTop:'1%',marginRight:'2%'}}>UI Design</p>
                        <p style={{backgroundColor : 'grey',borderRadius : '4px' ,padding: '10px',marginTop:'1%',marginRight:'2%'}}>Development</p>
                        <p style={{backgroundColor : 'grey',borderRadius : '4px' ,padding: '10px',marginTop:'1%',marginRight:'2%'}}>UX Reasearch</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Taskbdy;