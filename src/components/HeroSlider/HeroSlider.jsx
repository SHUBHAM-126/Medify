import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../assets/hero.png'
import { Box, Stack, Typography, Button } from '@mui/material';

export default function HeroSlider() {
    return (
        <Swiper>
            <SwiperSlide>
                <Stack direction="row" spacing={6} alignItems="center" py={2}>
                    <Box>
                        <Typography variant='h3' component='h1'>Skip the travel! Find Online</Typography>
                        <Typography variant='h1' component='h1' mb={1}>Medical <span style={{color: '#2AA7FF'}}>Centers</span></Typography>
                        <Typography color = "#5C6169" fontSize={20} mb={3}>
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                        </Typography>
                        <Button variant='contained' size="large" disableElevation>
                            Find Centers
                        </Button>
                    </Box>
                    <img src={img} width="50%" />
                </Stack>
            </SwiperSlide>
        </Swiper>
    )
}