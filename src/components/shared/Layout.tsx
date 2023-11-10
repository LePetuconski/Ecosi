import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Nav from "./Nav";
import Hero from "../Home/Hero";
import Parceiros from "../Home/Partners";
import Footer from "./Footer";
import BlogHome from "../Home/BlogHome";
import Features from "../Home/Features";
//import DraggableBox from "../Home/DraggableBox";

export default function Layout() {
  return (
    <>
      <Container maxW="container.xl">
        <Nav />
        <Hero />
        <Parceiros />
        <BlogHome />
        <Features />
      </Container>
      <Footer />
    </>
  )
}