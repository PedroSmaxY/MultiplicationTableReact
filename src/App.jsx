import Calc from "./component/Calc";

export default function App() {
  return (
    <>
      <header>Multiplication Table</header>
      <div className="spacing">
        <main>
          <section>
            <Calc />
          </section>
        </main>
      </div>
      <footer>&copy; SmaxY</footer>
    </>
  );
}
