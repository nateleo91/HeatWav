import React, { useState } from 'react';
import '../Css/Admin.css';

function Admin() {
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const admins = [
    { id: 1, name: 'Admin 1', bio: 'Bio for Admin 1' },
    { id: 2, name: 'Admin 2', bio: 'Bio for Admin 2' },
    { id: 3, name: 'Admin 3', bio: 'Bio for Admin 3' },
    // Add more admins as needed
  ];

  const handleAdminClick = (adminId) => {
    setSelectedAdmin(adminId);
  };

  return (
    <div className="admin-container">
      <div className="admin-list">
        <ul>
          {admins.map((admin) => (
            <li key={admin.id} onClick={() => handleAdminClick(admin.id)}>
              {admin.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="admin-bio">
        {selectedAdmin && (
          <div>
            <h2>{admins.find((admin) => admin.id === selectedAdmin).name}</h2>
            <p>{admins.find((admin) => admin.id === selectedAdmin).bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
