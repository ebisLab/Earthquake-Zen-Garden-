import React from "react";

export default function Profile({ data }) {

  return (
    <div className="main_placing profile">
      <h3>Profile</h3>
      <div style={{ display: "inline-flex" }}>
        <div>
          <img
            src={data.avatarImage}
            alt={`${data.firstName} ${data.lastName}`}
            style={{ width: "200px" }}
          />
        </div>

        <table>
          <tbody>
            <tr>
              <td className="table_key x">First Name</td>
              <td className="table_value">{data.firstName}</td>
            </tr>
            <tr>
              <td className="table_key">Last Name</td>
              <td className="table_value">{data.lastName}</td>
            </tr>
            <tr>
              <td className="table_key">Phone</td>
              <td className="table_value">{data.phone}</td>
            </tr>
            <tr>
              <td className="table_key">Email</td>
              <td className="table_value">{data.email}</td>
            </tr>
            <tr>
              <td className="table_key td_position_up">Bio</td>
              <td className="table_value">{data.bio}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
