import React from 'react'
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";

const useStyles = makeStyles(({ breakpoints, palette, constants }: ITheme) => {
  return createStyles({
    pageContainer: {
      [breakpoints.up('md')]: {
        margin: "5% 0 5% 0",
      }
    },
    contentContainer: {
      marginTop: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    headerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    bodyContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      maxWidth: "650px",
      margin: "5%",
    },
    bodyText: {
      fontSize: "16px",
      lineHeight: "24px",
      maxWidth: "650px",
      width: "100%",
    },
    calloutText: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "38px",
    },
    emphasizedText: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 400,
    },
    italicText: {
      fontStyle: "italic",
      fontSize: "20px",
      lineHeight: "32px",
      color: palette.additional["gray"][8],
    },
    verticalLine: {
      backgroundColor: "#b5b5b5", height: "100px", width: "1px", marginTop: "24px"
    },
    hr: {
      height: "1px", width: "100%", background: "lightgray"
    },
    profileImg: {
      backgroundColor: "#B5b5b5", width: "300px", height: "300px", marginTop: "40px"
    },
    wideImg: {

    }
  })
})

const SquareGrid: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <section className={classes.contentContainer}>
        Hello
      </section>
    </div>
  )
}

export default SquareGrid;