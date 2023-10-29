import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Nav from "./Nav";
import Hero from "../Home/Hero";
import Parceiros from "../Home/Partners";
import Footer from "./Footer";
import BlogHome from "../Home/BlogHome";

export default function Layout() {
  return (
    <>
      <Container maxW="container.xl">
        <Nav />
        <Hero />
        <Parceiros />
        <BlogHome />
      </Container>
      <Footer />
    </>
  )
}