import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "@bubbly/components/layouts/Grid/GridContainer";
import GridItem from "@bubbly/components/layouts/Grid/GridItem";
import Table from "@bubbly/components/modules/Table/Table";
import Button from "@bubbly/components/modules/Buttons/Button";
import Timeline from "@bubbly/components/modules/Timeline/Timeline";
import Tabs from "@bubbly/components/modules/Tabs/Tabs";
import Tasks from "@bubbly/components/modules/Tasks/Tasks";
import Card from "@bubbly/components/modules/Card/Card";
import CardHeader from "@bubbly/components/modules/Card/CardHeader";
import CardAvatar from "@bubbly/components/modules/Card/CardAvatar";
import CardText from "@bubbly/components/modules/Card/CardText";
import CardBody from "@bubbly/components/modules/Card/CardBody";
import CardFooter from "@bubbly/components/modules/Card/CardFooter";

import {
  widgetStories,
  bugs,
  website,
  server
} from "@bubbly/components/demo/var/general";

import image from "@bubbly/components/demo/assets/img/faces/card-profile1-square.jpg";

import { cardTitle, roseColor } from "@bubbly/MainStyles";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  }
};

class Widgets extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning" text>
                <CardText color="warning">
                  <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                  <h4 className={classes.cardCategoryWhite}>
                    New employees on 15th September, 2016
                  </h4>
                </CardText>
              </CardHeader>
              <CardBody>
                <Table
                  hover={true}
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    {cols: ["1", "Dakota Rice", "$36,738", "Niger"]},
                    {cols: ["2", "Minerva Hooper", "$23,789", "Curaçao"]},
                    {cols: ["3", "Sage Rodriguez", "$56,142", "Netherlands"]},
                    {cols: ["4", "Philip Chaney", "$38,735", "Korea, South"]},
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Tabs
              title="Tasks:"
              headerColor="rose"
              tabs={[
                {
                  tabName: "Bugs",
                  TabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Website",
                  TabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Server",
                  TabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={12} sm={12} lg={6}>
                <Card pricing>
                  <CardBody pricing>
                    <h6 className={classes.cardCategory}>SMALL COMPANY</h6>
                    <div className={classes.icon}>
                      <Home className={classes.iconRose} />
                    </div>
                    <h3
                      className={`${classes.cardTitle} ${classes.marginTop30}`}
                    >
                      $29
                    </h3>
                    <p className={classes.cardDescription}>
                      This is good if your company size is between 2 and 10
                      Persons.
                    </p>
                    <Button round color="rose">
                      Choose plan
                    </Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} lg={6}>
                <Card pricing plain>
                  <CardBody pricing plain>
                    <h6 className={classes.cardCategory}>Freelancer</h6>
                    <div className={classes.icon}>
                      <Icon className={classes.iconWhite}>weekend</Icon>
                    </div>
                    <h3
                      className={`${classes.cardTitle} ${classes.marginTop30}`}
                    >
                      FREE
                    </h3>
                    <p className={classes.cardCategory}>
                      This is good if your company size is between 2 and 10
                      Persons.
                    </p>
                    <Button round color="white">
                      Choose plan
                    </Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={11}>
                <Card testimonial>
                  <div className={classes.testimonialIcon}>
                    <FormatQuote />
                  </div>
                  <CardBody>
                    <h5 className={classes.cardTestimonialDescription}>
                      Your products, all the kits that I have downloaded from
                      your site and worked with are sooo cool! I love the color
                      mixtures, cards... everything. Keep up the great work!
                    </h5>
                  </CardBody>
                  <CardFooter testimonial>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <h6 className={classes.cardCategory}>@ALECTHOMPSON</h6>
                    <CardAvatar testimonial testimonialFooter>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={image} alt="..." />
                      </a>
                    </CardAvatar>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Timeline simple stories={widgetStories} />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Widgets);
