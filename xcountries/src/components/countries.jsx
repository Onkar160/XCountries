import React, { useEffect, useState } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data :");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setCountries(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {countries.map((country, index) => {
        return (
          <div
            style={{
              border: "0.5px solid grey",
              borderRadius: "5px",
              width: "130px",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "10px"
            }}
            key={`${index}_${country.name}`}
          >
            <img
              src={country.flag}
              styles={{ objectFit: "cover" }}
              alt={country.name}
              width="100px"
            />
            <p><b>{country.name}</b></p>
          </div>
        );
      })}
    </div>
  );
}
