import { Button } from "@mui/material"

export default function ButtonComponent ({children}) {
    return(
        <Button variant="contained" style={{color:"#fff", borderRadius: 8, textTransform: 'none'}}  disableElevation> 
            {children}
        </Button>
    )
}