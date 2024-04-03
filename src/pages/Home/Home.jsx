import { Container, Box } from "@mui/material";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import HospitalSearch from "../../components/HospitalSearchForm/Search"

export default function Home() {
    return (
        <div style={{ background: 'linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47))' }}>
            <Container maxWidth='xl'>
                <HeroSlider />
                <Box p={8} bgcolor="#fff" borderRadius="15px">
                    <HospitalSearch />
                    
                </Box>
            </Container>
        </div>
    )
}