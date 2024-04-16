import { useState } from "react";
import "./UserAction.css";

const UserAction = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Not Verified');

  const handleVerificationChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption)
  };
  const handleInfoClick = () => {
    setIsPopupOpen(true);
  };
  const handleDelClick = () => {};

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const Popup = () => {
    return (
      <div className="popup-overlay">
        <div className="popup">
          <div className="popup-close">
            <h2>Your Information</h2>
            <button onClick={closePopup}>Close</button>
          </div>

          <div>
            <ul>
              <li>nikku</li>
              <li>nikku</li>
              <li>nikku</li>
              <li>nikku</li>
              <li>nikku</li>
              <li>nikku</li>
              <li>nikku</li>
              <li>nikku</li>
              <li>nikku</li>
              
            </ul>
          </div>
          <div className="verification">
                  
                  <select
                    id="select-option"
                    value={selectedOption}
                    onChange={handleVerificationChange}
                  >
                    <option value="Verified">Verified</option>
                    <option value="Not Verified">Not Verified</option>
                  </select>
                </div>
        </div>
      </div>
    );
  };


  return (
    <>
      <div>
        <div className="user-table">
          <table id="customers">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>isVerified</th>
              <th>Info</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>
              {selectedOption}
              </td>
              <td onClick={handleInfoClick}>info</td>
              <td onClick={handleDelClick}>delete</td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Königlich Essen</td>
              <td>Philip Cramer</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
            <tr>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>France</td>
            </tr>
          </table>
          {isPopupOpen && <Popup />}
        </div>
      </div>
    </>
  );
};

export default UserAction;
