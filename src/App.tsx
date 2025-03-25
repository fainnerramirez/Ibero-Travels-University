import { ChakraProvider } from "@chakra-ui/react";
import { HeroComponent } from "./components/hero-component";

const App = () => {
  return (
    <ChakraProvider>
      <HeroComponent />
    </ChakraProvider>
  )
}

export default App;