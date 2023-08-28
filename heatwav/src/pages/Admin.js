import React, { useState } from 'react';
import '../Css/Admin.css';

function Admin() {
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const name1 = 'Fiction - Pat Carney';
  const bio1 = 'Bio for Admin 1';

  const name2 = 'Braniac the Maniac - Drew Burford';
  const bio2 = 'Bio for Admin 2';

  const name3 = 'Evm - Erik Von Trapp';
  const bio3 = 'Bio for Admin 3';

  const handleAdminClick = (adminId) => {
    setSelectedAdmin(adminId);
  };

  return (
    <div className="admin-container">
      <div className="admin-list">
        <ul>
          <li
            onClick={() => handleAdminClick(1)}
            className={selectedAdmin === 1 ? 'selected' : ''}
          >
            <div>{name1}</div>
          </li>
          <li
            onClick={() => handleAdminClick(2)}
            className={selectedAdmin === 2 ? 'selected' : ''}
          >
            <div>{name2}</div>
          </li>
          <li
            onClick={() => handleAdminClick(3)}
            className={selectedAdmin === 3 ? 'selected' : ''}
          >
            <div>{name3}</div>
          </li>
        </ul>
      </div>
      <div className="admin-bio">
        {selectedAdmin && (
          <div>
            {/* Render the appropriate name and bio based on the selectedAdmin */}
            {selectedAdmin === 1 && (
              <>
                <h2>{name1}</h2>
                <p>{bio1}</p>
              </>
            )}
            {selectedAdmin === 2 && (
              <>
                <h2>{name2}</h2>
                <p>{bio2}</p>
              </>
            )}
            {selectedAdmin === 3 && (
              <>
                <h2>{name3}</h2>
                <p>{bio3}</p>
              </>
            )}
            {/* Add more conditions as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
