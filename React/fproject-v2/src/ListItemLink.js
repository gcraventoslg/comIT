import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const ListItemLink = ({ to, ...rest }) => {
  return (
    <div>
      <ul>
        <ListItemLink to="/somewhere" />
        <ListItemLink to="/somewhere-else" />
      </ul>
      <Route
        path={to}
        children={({ match }) => (
          <li className={match ? "active" : ""}>
            <Link to={to} {...rest} />
          </li>
        )}
      />
    </div>
  );
};

export default ListItemLink;
