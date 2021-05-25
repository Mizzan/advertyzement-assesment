import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import User from './User';

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const url = 'https://reqres.in/api/users?page=1';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div>
      {users?.length === 0 || users === undefined ? <Spinner /> : null}
      <div className="users__section">
        {users?.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
