import React from "react";
import { Link, Route } from "react-router-dom";
import BasicTemplate from "./templates/BasicTemplate";
import ComplexTemplate from "./templates/ComplexTemplate";

const arrayComponents = [
  { urlName: "basictemplate", component: BasicTemplate },
  { urlName: "complextemplate", component: ComplexTemplate }
];

function TemplateEdit({ match }) {
  const newRoute = arrayComponents.filter(item => {
    return match.params.templatename === item.urlName;
  });
  const component = newRoute[0].component;
  return (
    <section>
      <Link to="/template-list">Back</Link>
      <div>
        <Route component={component} />
      </div>
    </section>
  );
}

export default TemplateEdit;
