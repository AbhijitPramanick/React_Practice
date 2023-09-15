import { useState } from "react";
import Button from "./components/Button";
import Box from "./components/Box";
function App() {
  const [isStarted, setIsStarted] = useState(false);

  const togglePlay = () => {
    setIsStarted((prev) => !prev);
  };
  return <main>{isStarted ? <Box /> : <Button toggle={togglePlay} />}</main>;
}

export default App;
