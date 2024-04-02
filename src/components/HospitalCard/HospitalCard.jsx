import icon from '../../assets/hospitalicon.png'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import thumb from '../../assets/thumbsup.png'
import Calendar from '../Calendar/Calendar'
import { useState } from 'react'

export default function HospitalCard({ details, availableSlotes }) {

    const [showCalendar, setShowCalendar] = useState(false)

    return (
        <Box sx={{ borderRadius: 2, bgcolor: '#fff', p: 4 }}>
            <Stack direction="row" spacing={4}>
                <Box component='img' src={icon} width={130} height='auto' sx={{ flexShrink: 0, alignSelf: 'start' }} />
                <Box flex={1}>
                    <Typography
                        component='h3'
                        color='primary.main'
                        fontWeight={600}
                        fontSize={20}
                        mb={1}
                        textTransform='capitalize'
                        lineHeight={1}
                    >
                        {details['Hospital Name'].toLowerCase()}
                    </Typography>
                    <Typography
                        textTransform='capitalize'
                        color='#414146'
                        fontSize={14}
                        fontWeight={700}
                    >
                        {`${details['City'].toLowerCase()}, ${details['State']}`}
                    </Typography>
                    <Typography
                        fontSize={14}
                        mb={1}
                    >
                        {details['Hospital Type']}
                    </Typography>
                    <Stack direction='row' flexWrap='wrap' spacing='4px' mb={2}>
                        <Typography fontWeight={800} textTransform='uppercase' color='primary.green'>Free</Typography>
                        <Typography sx={{ textDecoration: 'line-through', color: '#787887' }}>₹500</Typography>
                        <Typography>Consultation fee at clinic</Typography>
                    </Stack>
                    <Divider sx={{ borderStyle: 'dashed', mb: 2 }} />
                    <Stack
                        direction='row'
                        alignItems='center'
                        bgcolor='primary.green'
                        py='4px'
                        px={1}
                        borderRadius={1}
                        width='fit-content'
                        spacing='4px'
                    >
                        <img src={thumb} width={20} height={20} />
                        <Typography fontWeight={700} color="#fff" sx={{ opacity: 0.5 }}>
                            {details['Hospital overall rating'] == 'Not Available' ? 0 : details['Hospital overall rating']}
                        </Typography>
                    </Stack>
                </Box>

                <Stack justifyContent='flex-end'>
                    <Typography textAlign='center' color='primary.green' fontSize={14} fontWeight={500} mb={1}>
                        Available Today
                    </Typography>
                    <Button variant='contained' disableElevation onClick={() => setShowCalendar(prev => !prev)}>
                        Book FREE Center Visit
                    </Button>
                </Stack>

            </Stack>

            {showCalendar && <Calendar availableSlotes={availableSlotes} />}
        </Box>
    )
}