import { useEffect, useState } from "react";
import "./AreaCards.scss";

function AreaCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/mynote", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoxLCJpYXQiOjE3MTMzNjc5OTYsImV4cCI6MTcxMzM2OTc5Nn0.ExYeMENLnZxKG6y0nfKmQxXTKdilfm3L-dbhlOD6uso",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.info(res);
        setData(res);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section className="content-area-cards">
      {data.map(
        (note) =>
          console.info(note) || (
            <h1>TEST</h1>
            //  <AreaCard
            //   colors={["#e4e8ef", "#4ce13f"]}
            //   percentFillValue={70}
            //   cardInfo={{
            //     title: "Vitesse",
            //     value: "70",
            //   }}
            // />
          )
      )}
    </section>

    // </section>
  );
}

export default AreaCards;
