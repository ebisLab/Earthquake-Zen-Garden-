import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail({ data, options }) {
  const { infoID } = useParams();
  const [crisis, setCrisis] = useState(
    data.filter((item) => item.id === infoID)
  );
  return (
    <div className="main_placing">
      {crisis.map((item) => (
        <div key={item.properties.ids}>
          <h3>{item.properties.title}</h3>
          <table>
            <tbody>
              <tr>
                <td className="table_key">Title</td>
                <td className="table_value">{item.properties.title}</td>
              </tr>
              <tr>
                <td className="table_key">Magnitude</td>
                <td className="table_value">{item.properties.mag}</td>
              </tr>
              <tr>
                <td className="table_key">Time</td>
                <td className="table_value">
                  {Intl.DateTimeFormat("en-US", options).format(
                    new Date(item.properties.time)
                  )}
                </td>
              </tr>
              <tr>
                <td className="table_key">Status</td>
                <td className="table_value">{item.properties.status}</td>
              </tr>
              <tr>
                <td className="table_key">Tsunami</td>
                <td className="table_value">{item.properties.tsunami}</td>
              </tr>
              <tr>
                <td className="table_key">Type</td>
                <td className="table_value">{item.properties.type}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
