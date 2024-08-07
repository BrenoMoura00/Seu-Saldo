import DashBoard from "./components/Dashboard/Dashboard"
import Entrada from "./assets/entrada.png"
import Saida from "./assets/saida.png"
import Dolar from "./assets/dolar.png"
import Graph from "./components/Graph/Graph"

function App() {

  return (
    <div className=" relative w-full flex justify-center px-4 -mt-12">
      <div className=" max-w-screen-lg grid grid-cols-2 gap-4 mx-auto">
        <DashBoard
          title="Entradas"
          icon={Entrada}
          value={1700}
        />
        <DashBoard
          title="Saídas"
          icon={Saida}
          value={700}
        />
        <DashBoard
          title="Total"
          icon={Dolar}
          value={1000}
        />
        <Graph />
      </div>
    </div>
  )
}

export default App
