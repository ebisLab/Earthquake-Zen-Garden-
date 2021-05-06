import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ data, options }) {
  const [info, setInfo] = useState([data]);
  const [toggled, setToggled] = useState(false);
  const [tableData, setTableData] = useState(
    info.flatMap((stuff) => stuff.features)
  );

  const arrangeByName = () => {
    setToggled(!toggled);

    if (toggled) {
      let totoggle = info.flatMap((item) =>
        item.features.sort((a, b) =>
          a.properties.place.toUpperCase() < b.properties.place.toUpperCase()
            ? 1
            : -1
        )
      );
      setTableData(totoggle);
    } else {
      let totoggle = info.flatMap((item) =>
        item.features.sort((a, b) =>
          a.properties.place.toUpperCase() > b.properties.place.toUpperCase()
            ? 1
            : -1
        )
      );
      setTableData(totoggle);
    }
  };

  const arrangeByMag = () => {
    setToggled(!toggled);
    if (toggled) {
      let totoggle = info.flatMap((item) =>
        item.features.sort((a, b) =>
          a.properties.mag < b.properties.mag ? 1 : -1
        )
      );
      setTableData(totoggle);
    } else {
      let totoggle = info.flatMap((item) =>
        item.features.sort((a, b) =>
          a.properties.mag > b.properties.mag ? 1 : -1
        )
      );
      setTableData(totoggle);
    }
  };

  const arrangeByTime = () => {
    setToggled(!toggled);
    if (toggled) {
      let totoggle = info.flatMap((item) =>
        item.features.sort((a, b) =>
          a.properties.time < b.properties.time ? 1 : -1
        )
      );
      setTableData(totoggle);
    } else {
      let totoggle = info.flatMap((item) =>
        item.features.sort((a, b) =>
          a.properties.time > b.properties.time ? 1 : -1
        )
      );
      setTableData(totoggle);
    }
  };

  return (
    <>
      {info.map((item) => (
        <div key={item.metadata.generated} className="main_placing">
          <h2 className="earthquake_heading">{item.metadata.title}</h2>
          <table className="earthquake_data_an_hour">
            <thead className="earthquake_data_an_hour_heading">
              <tr>
                <td className="table_title" onClick={arrangeByName}>
                  Title
                </td>
                <td className="table_title" onClick={arrangeByMag}>
                  Magnitude
                </td>
                <td className="table_title" onClick={arrangeByTime}>
                  Time
                </td>
              </tr>
            </thead>
            <tbody>
              
              {tableData.flatMap((thing) => (
                <tr key={thing.id}>
                  <td>
                    <Link to={`/info/${thing.id}`}>
                      {thing.properties.place}
                    </Link>
                  </td>
                  <td>{thing.properties.mag}</td>
                  <td>
                    {Intl.DateTimeFormat("en-US", options).format(
                      new Date(thing.properties.time)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}
