import { Container, Stack, Box, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import HospitalCard from "../../components/HospitalCard/HospitalCard"
import icon from '../../assets/tick.png'
import cta from '../../assets/cta.png'
import HospitalSearch from "../../components/HospitalSearch/Search"

export default function Search() {

    const [seachParams, setSearchParams] = useSearchParams()
    const [hospitals, setHospitals] = useState([])
    const [state, setState] = useState(seachParams.get('state'))
    const [city, setCity] = useState(seachParams.get('city'))

    useEffect(() => {

        const getHospitals = async () => {
            try {
                const data = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
                setHospitals(data.data)
            }
            catch (err) {
                console.log(err)
            }
        }

        if (state && city) {
            getHospitals()
        }

    }, [state, city])

    useEffect(() => {

        setState(seachParams.get('state'))
        setCity(seachParams.get('city'))

    }, [seachParams])

    return (
        <Box sx={{ background: 'linear-gradient(#EFF5FE, rgba(241,247,255,0.47))', width: '100%', pl: 0 }}>

            <Box sx={{ background: 'linear-gradient(90deg, #2AA7FF, #0C8CE5)', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
                <Container maxWidth='xl' sx={{ background: '#fff', p: 3, borderRadius: 2, transform: 'translatey(50px)', mb: '50px' }} >
                    <HospitalSearch />
                </Container>
            </Box>


            <Container maxWidth='xl' sx={{ pt: 8, pb: 3 }}>

                {hospitals.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                        <Typography component='h1' fontSize={24} fontWeight={500}>
                            {`${hospitals.length} medical centers available in `}
                            <span style={{ textTransform: 'capitalize' }}>{city.toLocaleLowerCase()}</span>
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <img src={icon} height={24} width={24} />
                            <Typography color='#787887'>
                                Book appointments with minimum wait-time & verified doctor details
                            </Typography>
                        </Stack>
                    </Box>
                )}

                <Stack alignItems='flex-start' spacing={3} direction={{ md: 'row' }}>

                    <Stack spacing={3} flexGrow={1}>

                        {hospitals.length > 0 && hospitals.map(hospital => (
                            <HospitalCard key={hospital['Hospital Name']} details={hospital} />
                        ))}

                    </Stack>

                    <img src={cta} width={360} height='auto' />

                </Stack>
            </Container>
        </Box>
    )
}