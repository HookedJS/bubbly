import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import PageHeader from "@theme/components/Header/PageHeader";
import Footer from "@theme/components/Footer/Footer";

import {AuthStyle} from "./AuthStyle";

import bgImage from "@theme/demo/assets/img/register.jpeg";

import {HeaderLinks} from "@var/theme/AuthLayout";

class Auth extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }
  render() {
    const {classes, ...rest} = this.props;
    return (
      <div>
        <PageHeader {...rest} links={HeaderLinks} />
        <div className={classes.wrapper} ref="wrapper">
          <div className={classes.fullPage} style={{backgroundImage: "url(" + bgImage + ")"}}>
            {this.props.children}
            <Footer white />
          </div>
        </div>
      </div>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(AuthStyle)(Auth);
