import Navbar from "./components/Navbar";
import Body from "./components/Body"

import desktop from "./assets/bg-curvy-desktop.svg"
import mobile from "./assets/bg-curvy-mobile.svg"

function App() {
  return (
    <>
      <main>
        <section>
          <Navbar/>
          <Body />
        </section>
      </main>
    </>
  );
}

export default App;
