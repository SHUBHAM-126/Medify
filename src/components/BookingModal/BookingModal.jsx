import { Modal, Typography, Box, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";

export default function BookingModal({ setOpen, open, bookingDetails }) {

    const [email, setEmail] = useState('')

    const handleBooking = (e) => {
        e.preventDefault()
        console.log(bookingDetails)
        console.log(email)
        setEmail('')
        setOpen(false)
    }

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box
                sx={{
                    width: 1,
                    maxWidth: 500,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: 24,
                    p: 4,
                    outline: 0,
                    bgcolor: '#fff',
                    borderRadius: 2
                }}
            >
                <Typography
                    component='h3'
                    variant="h3"
                >
                    Confirm booking
                </Typography>
                <Typography fontSize={14} mb={3}>
                    Please enter your email to confirm booking
                </Typography>
                <form onSubmit={handleBooking}>
                    <Stack alignItems='flex-start' spacing={2}>
                        <TextField
                            type="email"
                            label="Enter your email"
                            variant="outlined"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Stack direction='row' spacing={1}>
                            <Button type="submit" variant="contained" size="large" disableElevation>Confirm</Button>
                            <Button variant="outlined" size="large" disableElevation onClick={() => setOpen(false)}>Cancel</Button>
                        </Stack>
                    </Stack>
                </form>
            </Box>
        </Modal>
    )
}