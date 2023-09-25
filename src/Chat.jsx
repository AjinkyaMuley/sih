import { Typography } from '@mui/material'
import './Chat.css'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const diseases = ["jaundice", "malaria", "typhoid", "pneumonia", "dengue", "viral fever", "cold", "cough", "weakness",
    "nausea"]


const centeredStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '20vh',
};
const inputStyles = {
    width: '25em',
    color: 'black',
    backgroundColor: "white",
    borderRadius: "1.5em",
    border : 'none',
    outline : 'none'  
};

const listboxStyles = {
    maxWidth: '25em',
    backgroundColor: 'black',
    color: 'white', 
};

let isFocused = false
const handleFocus = () => {
     let isFocused = true
}  

function Chat() {
    return (
            <div>
                <Typography color={'white'} fontSize={'3em'} marginTop={"15%"} marginBottom={"5%"}>
                    Enter your accurate symptomps
                </Typography>
                <div style={centeredStyles}>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={diseases}
                        getOptionLabel={(option) => option}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search Here"
                                placeholder="Symptomps"
                                style={inputStyles}
                                InputLabelProps={{ style: { color: 'grey' } }}
                            />
                        )}
                        ListboxProps={{
                            style: listboxStyles,
                        }}
                    />
                </div>

            </div>


    )
}

export default Chat