import React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import ExpandMore from "@material-ui/icons/ExpandMore";

import { AccordionStyle } from "./AccordionStyle";

export const Accordion = withStyles(AccordionStyle)((
  {
    classes,
    active = 0,
    collapses
  }: WithStyles<typeof AccordionStyle> & {
    active?: number,
    collapses: {title: string, content: React.ReactNode}[],
  }
) => {
  const [activeLocal, setActiveLocal] = React.useState(active || -1);

  const handleChange = (panel: number) => (event: React.ChangeEvent<any>, expanded: boolean) => {
    setActiveLocal(expanded ? panel : -1);
  };

    return (
      <div className={classes.root}>
        {collapses.map((prop, key) => {
          return (
            <ExpansionPanel
              expanded={activeLocal === key}
              onChange={handleChange(key)}
              key={key}
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                classes={{
                  root: classes.expansionPanelSummary,
                  expanded: classes.expansionPanelSummaryExpaned,
                  content: classes.expansionPanelSummaryContent,
                  expandIcon: classes.expansionPanelSummaryExpandIcon
                }}
              >
                <h4 className={classes.title}>{prop.title}</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                {prop.content}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );

});

export default Accordion;
