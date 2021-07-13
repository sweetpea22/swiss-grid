import React from 'react'
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Typography } from '@chainsafe/common-components';
import clsx from "clsx";

const useStyles = makeStyles(({ breakpoints, palette, constants }: ITheme) => {
  return createStyles({
    container: {
      overflowX: "hidden",
      objectFit: "cover",
      objectPosition: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      [breakpoints.down(767)]:{
        alignItems: "flex-start",
      },
    },
    gridContainer: {
      paddingTop: "80px",
      paddingLeft: "20px",
      paddingRight: "20px",
      width: "calc(100% - 16px)",
      display: "block",
      maxWidth: "1200px",
    },
    contentContainer: {
      width: "100%",
      marginBottom: "80px",
      paddingLeft: constants.generalUnit,
      paddingRight: constants.generalUnit,
      display: "flex",
      flexDirection: "column",
      float: "left",
      [breakpoints.down(599)]: {
        marginBottom: "20px",
      }
    },
    squareContainer:{
      display: "flex",
      flexWrap: "wrap",
      [breakpoints.down('1299')]: {
        justifyContent: "center",
      },
      [breakpoints.down('999')]: {
        justifyContent: "space-evenly",
      },
      [breakpoints.down('599')]: {
        flexDirection: "column",
        justifyContent: "space-evenly",
      }
    },
    square: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "357px",
      minWidth: "357px",
      height: "357px",
      marginBottom: constants.generalUnit * 3,
      background: palette.additional["gray"][7],
      marginRight: constants.generalUnit * 3,
      [breakpoints.down('md')]: {
        margin: "1rem 0 1rem 0",
      }
    },
    doubleSquare: {
      display: "flex",
      flexDirection: "column",
      minWidth: "740px",
      maxWidth: "740px",
      height: "357px",
      marginBottom: constants.generalUnit * 3,
      marginRight: "21px",
      background: palette.additional["gray"][10],
      [breakpoints.down(1299)]: {
        maxWidth: "357px",
        minWidth: "357px",
      }
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
      maxWidth: "300px",
      width: "100%",
      paddingLeft: "1.5rem",
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
    hr: {
      height: "1px", width: "75%", background: "lightgray", margin: "5rem 1rem 1rem 1.5rem",
    },
    darkgray: {
      background: "#1A1A1A",
    },
    lightgray: {
      background: "#F5F5F",
    },
    texturedGray: {
      background: "#01F4C7",
    },
    yellow: {
      background: palette.additional["yellow"][5],
    },
    marginTop: {
      marginTop: "1rem",
      [breakpoints.down(767)]: {
        marginTop: ".66rem",
      },
    },
    h2: {
      fontSize: "36px",
      fontWeight: 500,
      lineHeight: "48px",
      margin: "1.5rem 1rem 1rem 1.5rem",
      letterSpacing: "-.66px",
    },
    white: {
      color: palette.additional["gray"][1],

    },
    bgDark: {
      background: "black",
    },
    dark: {
      color: palette.additional["gray"][10],
    },
  })
})

const SquareGrid: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.gridContainer}>
        <article className={classes.contentContainer}>
          <div className={classes.squareContainer}>
            <div className={clsx(classes.darkgray, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white)}>
                Distributed systems design
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Architect your systems so they can scale safely.
              </Typography>
            </div>
            
            <div className={clsx(classes.darkgray, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white)}>
                Distributed systems design
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Architect your systems so they can scale safely.
              </Typography>
            </div>
            
            <div className={clsx(classes.yellow, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.dark)}>
                Distributed systems design
              </Typography>
              <div className={clsx(classes.hr, classes.bgDark)}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.dark)}>
                Architect your systems so they can scale safely.
              </Typography>
            </div>
            
            <div className={clsx(classes.lightgray, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2)}>
                Distributed systems design
              </Typography>
              <div className={clsx(classes.hr, classes.bgDark)}></div>
              <Typography variant="h6" className={clsx(classes.bodyText)}>
                Architect your systems so they can scale safely.
              </Typography>
            </div>
            
            <div className={clsx(classes.darkgray, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white)}>
                Distributed systems design
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Architect your systems so they can scale safely.
              </Typography>
            </div>
            
            <div className={clsx(classes.darkgray, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white)}>
                Distributed systems design
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Architect your systems so they can scale safely.
              </Typography>
            </div>
            <div className={clsx(classes.darkgray, classes.doubleSquare)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white)}>
                Distributed systems design
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Architect your systems so they can scale safely.
              </Typography>
            </div>
            <div className={clsx(classes.darkgray, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white)}>
                Distributed systems design
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Architect your systems so they can scale safely.
              </Typography>
            </div>
            
          </div>
        </article>
      </div>
    </section>
  )
}

export default SquareGrid;