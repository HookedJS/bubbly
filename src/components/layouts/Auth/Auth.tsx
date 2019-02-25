import React from "react";

// @material-ui/core components
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

// core components
import PageHeader from "@bubbly/components/sections/HeaderFullWidth/HeaderFullWidth";
import Footer from "@bubbly/components/sections/Footer/Footer";

import { AuthStyle } from "./AuthStyle";

import bgImage from "@bubbly/components/demo/assets/img/register.jpeg";

import { BubblyAuthHeaderLinks } from "~/var/config";

const Auth = (
  {
    classes,
    children,
    ...rest
  }
  : WithStyles<typeof AuthStyle> & {
    children: React.ReactNode
  }
) => {

  // React.useEffect(() => {document.body.style.overflow = "unset";}, [false]);

  return (
    <div>
      <PageHeader {...rest} links={BubblyAuthHeaderLinks}/>
      <div className={classes.wrapper} ref="wrapper">
        <div
          className={classes.fullPage}
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        >
          {children}
          <Footer white/>
        </div>
      </div>
    </div>
  );

};

// Auth.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(AuthStyle)(Auth) as unknown as React.ComponentClass;
