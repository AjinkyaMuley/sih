import { Button, Typography } from "@mui/material"
import './Home.css'
function Home() {
    return (
    
           <div className="content">
                <Typography fontFamily={'Poppins'} fontSize={'30px'} paddingBottom={'0.2em'}>
                    Your Health, Your Chat , Your Way
                </Typography>
                <Typography paddingBottom={'0.2em'}>
                    Empowering You to Take Care of Your Wellness Journey
                </Typography>
                <Button variant="contained" style={{ backgroundColor: "black", borderRadius: "25px", textTransform: 'none' }} size="medium" href="/chat">Start Now</Button>
            </div>
    

    )
}

export default Home