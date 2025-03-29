import { ChakraProvider } from "@chakra-ui/react";
import HeroComponent from "./components/hero-component";
import { Layout } from "./layout/layout";
import { theme } from "./utils/theme";
import ReservationComponent from "./components/reservation-component";
import RegionContainer from "./components/region-container";
import BlogComponent from "./components/blog-component";
import ContactComponent from "./components/contact-component";
import GroupComponent from "./components/group-component";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <HeroComponent />
        <ReservationComponent />
        <RegionContainer />
        <BlogComponent />
        <GroupComponent />
        <ContactComponent />
      </Layout>
    </ChakraProvider>
  )
}

export default App;