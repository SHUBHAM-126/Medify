import DaySelector from "./DaySelector/DaySelector";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { set } from 'date-fns'
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

export default function Calendar({ availableSlotes, details, handleBooking }) {

    const [selectedDate, setSelectedDate] = useState(set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }))

    const totalSlots = availableSlotes.morning.length + availableSlotes.afternoon.length + availableSlotes.evening.length

    return (
        <Box>
            <DaySelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} totalSlots={totalSlots} />
            <TimeSlotPicker
                availableSlotes={availableSlotes}
                selectedDate={selectedDate}
                details={details}
                handleBooking={handleBooking}
            />
        </Box>
    )
}