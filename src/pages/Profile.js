import React from "react";
import { useNavigate } from "react-router-dom";

import Nav from "../components/UserNav";

let baseURL = "http://localhost:3001";

const Profile = props => {
  const navigate = useNavigate();

  const handleLogout = e => {
    e.preventDefault();
    const url = baseURL + "/users/logout";
    // const user = { username, password };
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        console.log(url);
      });
    navigate("/");
  };

  return (
    <div>
      <h1>profile page</h1>
      <Nav />
      <button onClick={handleLogout}>LogOut</button>
      {/* <table>
        <tbody>
          <tr>
            <th>Creator</th>
            <th>YearCreated</th>
            <th>imgMedium</th>
          </tr>
            { props.dogs.map((dog, i) => {
                return (
                  <tr key={dog.id}>
                    <td style={{textDecoration: "underline", color: "blue"}} onClick={()=>{navigate(`${dog.id}`)}}>
                    { dog.name }
                    </td>
                    <td>
                     { dog.breed }
                    </td>
                    <td>
                     { dog.owner }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table> */}
    </div>
  );
};

export default Profile;
