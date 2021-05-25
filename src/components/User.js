import React from 'react';

const User = ({ user: { avatar, email, first_name, last_name } }) => {
  return (
    <section className="user__card">
      <img src={avatar} alt="" />
      <h2>
        {first_name} {last_name}
      </h2>
      <p className="email">{email}</p>
    </section>
  );
};

export default User;
