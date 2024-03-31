import { Box, Container, List, ListItem, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import Button from '../Button/Button'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <header>
            <Box p={1} bgcolor="primary.main">
                <Typography fontSize={14} textAlign="center" color="#fff">
                    The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
                </Typography>
            </Box>

            <Container maxWidth="xl" style={{width: "90%"}}>
                <Stack direction="row" spacing={2} justifyContent="space-between" py={2}>
                    <Link>
                        <img src={logo} alt="Logo" height={27}/>
                    </Link>

                    <Stack direction="row" spacing={4} alignItems="center" className={styles.navlinks}>
                        <Link>Find Doctors</Link>
                        <Link>Hospitals</Link>
                        <Link>Medicines</Link>
                        <Link>Surgeries</Link>
                        <Link>Software for Provider</Link>
                        <Link>Facilities</Link>
                        <Button>Login/Signup</Button>
                    </Stack>

                </Stack>
            </Container>
        </header>
    )
}