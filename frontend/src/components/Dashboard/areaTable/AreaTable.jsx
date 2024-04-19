import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Difficulté",
  "Description",
  "Date",
  "Action",
];

const TABLE_DATA = [
  {
    name: "Standard",
    order_id: "Faire une passe lobée et rentrer la balle dans le bucket",
    date: "17.04.23",
    customer: "En Cours",
    amount: 400,
  },
  {
    id: 101,
    name: "Difficile",
    order_id: "Réussir une frappe enroulée à 25 mètres",
    date: "17.04.23",
    customer: "Réussi",
    amount: 288,
  },
  {
    id: 102,
    name: "Facile",
    order_id: "Marquer un pénalty",
    date: "17.04.23",
    customer: "Réussi",
    amount: 500,
  },
  {
    id: 103,
    name: "Expert",
    order_id: "Réussir à faire un lob ",
    date: "17.04.23",
    customer: "A refaire",
    amount: 100,
  },
  {
    id: 104,
    name: "Très Facile",
    order_id: "Faire 30 pompes et 50 squatts",
    date: "17.04.23",
    customer: "Réussi",
    amount: 60,
  },
  {
    id: 105,
    name: "Facile",
    order_id: "Réussir à toucher la barre sur un tir aux abords de la surface",
    date: "17.04.23",
    customer: "En cours",
    amount: 80,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Missions</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td className="action">{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
