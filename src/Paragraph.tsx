import React, { ReactNode } from 'react'
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";

type IParagraphProps = { 
  bodyText?: string;
  h1?: string | ReactNode;
  h3?: string | ReactNode;
  hr?: boolean;
}

const useStyles = makeStyles(({ breakpoints, palette, constants }: ITheme) => {
  return createStyles({
    paragraphContainer: {
    },

    titleContainer: {
      
    },
    subHeadingContainer: {

    },
    h1: {
      fontSize: "40px",
      color: palette.common.black.main,
    },
    hr: {

    },
    h3: {

    },
    bodyTextContainer: {},
    bodyText: {

    },
  })
})

const Paragraph: React.FC<IParagraphProps> = ({bodyText, h1, h3, hr}) => {
  const classes = useStyles();
  return (
    <div className={classes.paragraphContainer}>
      <div className={classes.titleContainer}>
      </div>
        {h1 && <h1 className={classes.h1}>{hr}</h1>}
        {h3 && <h3 className={classes.h3}>{h3}</h3>}
        {hr && <hr className={classes.hr}></hr>}
      <div className={classes.bodyTextContainer}>
        <p className={classes.bodyText}>
          {bodyText}
        </p>
      </div>
    </div>
  )
}

export default Paragraph;