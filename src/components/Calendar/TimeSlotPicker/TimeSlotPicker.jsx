import styled from "@emotion/styled";
import { Chip, Stack, Typography, Divider } from "@mui/material";

export default function TimeSlotPicker({ availableSlotes }) {


    const CustomChip = (props) => (
        <Chip
            label={props.label}
            color="primary"
            variant="outlined"
            sx={{
                borderRadius: '5px',
                fontSize: 14,
                cursor: 'pointer',

            }}
            onClick={props.handleClick}
        />
    )


    return (
        <Stack pt={3} spacing={3}
            divider={<Divider orientation="horizontal" flexItem />}
        >
            {availableSlotes.morning.length > 0 && (
                <Stack
                    direction='row'
                    spacing={3}
                    alignItems='center'
                    px={6}
                >
                    <Typography width='15%'>Morning</Typography>
                    {availableSlotes.morning.map(slot => (
                        <CustomChip key={slot} label={slot} handleClick={() => console.log(slot)} />
                    ))}
                </Stack>
            )}
            {availableSlotes.afternoon.length > 0 && (
                <Stack
                    direction='row'
                    spacing={3}
                    alignItems='center'
                    px={6}
                >
                    <Typography width='15%'>Afternoon</Typography>
                    {availableSlotes.afternoon.map(slot => (
                        <CustomChip key={slot} label={slot} handleClick={() => console.log(slot)} />
                    ))}
                </Stack>
            )}
            {availableSlotes.afternoon.length > 0 && (
                <Stack
                    direction='row'
                    spacing={3}
                    alignItems='center'
                    px={6}
                >
                    <Typography width='15%'>Afternoon</Typography>
                    {availableSlotes.afternoon.map(slot => (
                        <CustomChip key={slot} label={slot} handleClick={() => console.log(slot)} />
                    ))}
                </Stack>
            )}
        </Stack>
    )
}