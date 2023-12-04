import {NextUIProvider} from "@nextui-org/react";
import HomePage from "./HomePage";

function App() {
  return (
    <NextUIProvider>
      <HomePage />
    </NextUIProvider>
  );
}
export default App;