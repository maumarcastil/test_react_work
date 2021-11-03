import React from "react";

const Welcome = ({ user }) => {
  return (
    <>
      <h1>{`Bienvenido ${user.firstName} ${user.lastName}`}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        recusandae aliquam consequatur accusamus sapiente ut pariatur quisquam
        architecto, ea dolores tempore? Itaque quidem aliquid soluta quae
        maxime, nostrum in voluptatibus.
      </p>
    </>
  );
};

export default Welcome;
