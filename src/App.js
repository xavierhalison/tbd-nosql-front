import "./global.css";
import { Filters, Layout, Table } from "./components";
import { useSystemQuery } from "./hooks";
import { useMemo, useState } from "react";

function App() {
  const [field, setField] = useState("download");

  const { isLoading, error, data } = useSystemQuery(field);

  const memoizedTable = useMemo(
    () =>
      data ? (
        <Table data={data} heading={["_field", "_value", "_time"]} />
      ) : (
        <></>
      ),
    [data]
  );

  return (
    <Layout>
      <p>
        O InfluxDB é um banco de dados não relacional do tipo <i>time series</i>
        , o que quer dizer que a natureza de seus dados tem estritamente à ver
        com o tempo. Utilizar um banco como o InfluxDB com a mesma abordagem que
        utilizaríamos um banco relacional, linkando registros uns aos outros por
        meio de identificadores, não funcionaria. Entretanto, utilizá-lo para
        monitoramento de dados que tem a ver com o tempo é uma ótima ideia. Ex:
        dados de uso de dispositivos de IOT.
      </p>
      <Filters onChange={(e) => setField(e.target.value)} />
      {isLoading ? <h1>Carregando</h1> : error ? <h1>Erro</h1> : memoizedTable}
    </Layout>
  );
}

export default App;
