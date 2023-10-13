import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Hero from "./Home/Hero";
import Parceiros from "./Home/Parceiros";

export default function Layout() {
    return (
        <>
            <Container maxW="container.xl">
                <Navbar />
                <Hero />
                <Parceiros />
            </Container>
        </>
    )
}