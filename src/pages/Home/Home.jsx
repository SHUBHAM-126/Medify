import { Container, Box, Stack } from "@mui/material";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import HospitalSearch from "../../components/HospitalSearchForm/Search"
import HeroUSPs from "../../components/Sections/HeroUSPs/HeroUSPs";
import FAQs from "../../components/Sections/FAQs/FAQs";
import OurFamilies from "../../components/Sections/OurFamilies/OurFamilies";
import Blogs from "../../components/Sections/Blogs/Blogs";
import PatientCaring from "../../components/Sections/PatientCaring/PatientCaring";
import Specialists from "../../components/Sections/Specialists/Specialists";
import Specialization from "../../components/Sections/Specialization/Specialization";

export default function Home() {
    return (
        <Box>

            <Box sx={{ background: 'linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)', }} mb={12}>
                <Container maxWidth='xl'>
                    <HeroSlider />
                    <Stack
                        p={8}
                        mt={-10}
                        position='relative'
                        zIndex={99}
                        bgcolor="#fff"
                        borderRadius="15px"
                        spacing={10}
                        boxShadow='0 0 12px rgba(0,0,0,0.1)'
                    >
                        <HospitalSearch />
                        <HeroUSPs />
                    </Stack>
                </Container>
            </Box>

            <Specialization />

            <Specialists />

            <PatientCaring />

            <Blogs />

            <OurFamilies />

            <FAQs />

        </Box>
    )
}