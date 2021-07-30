import React from 'react'
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Typography } from '@chainsafe/common-components';
import clsx from "clsx";

const useStyles = makeStyles(({ breakpoints, palette, constants }: ITheme) => {
  return createStyles({
    container: {
      overflowX: "hidden",
      background: "#0f0f0f",
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
        justifyContent: "flex-start",
      },
      [breakpoints.down('999')]: {
        justifyContent: "space-evenly",
      },
      [breakpoints.down('599')]: {
        flexDirection: "column",
        alignItems: "center",
      }
    },

    square: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "357px",
      minWidth: "357px",
      height: "357px",
      marginBottom: constants.generalUnit * 3,
      background: palette.additional["gray"][4],
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
      background: "url('/bob.png')",
      backgroundBlendMode: "darken",
      [breakpoints.down(1299)]: {
        maxWidth: "357px",
        minWidth: "357px",
      },
      "& > span": {
        maxWidth: "600px",
        [breakpoints.down(1299)]: {
          maxWidth: "300px"
        }
      },
    },
    bodyContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      maxWidth: "650px",
      margin: "5%",
    },
    titleText: {
      maxWidth: "1000px",
      textAlign: "left",
      fontFamily: "Anderson Grotesk, Arial",
      fontWeight: 300,
      letterSpacing: "-0.5px",
      marginBottom: constants.generalUnit * 4,
      [breakpoints.down("md")]: {
        fontSize: "48px",
        lineHeight: "55px",
        maxWidth: "90%",
        marginBottom: constants.generalUnit * 2,
      }
    },
    pageTitle: {
      maxWidth: "1000px",
      textAlign: "left",
      fontWeight: 500,
      letterSpacing: "-0.5px",
      marginBottom: constants.generalUnit * 4,
      [breakpoints.down("md")]: {
        fontSize: "48px",
        lineHeight: "55px",
        maxWidth: "90%",
        marginBottom: constants.generalUnit * 2,
      },
      [breakpoints.down('599')]: {
        textAlign: "center",
      }
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
    blackPaper: {
      background: "url('/oo.png')",
    },
    texturedGray: {
      background: "url('/na.png')",
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
    gray9: {
      background: "#262626"
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
    squareTitleText: {
      fontFamily: "Anderson Grotesk",
      fontWeight: 500,
      height: "100px",
      minHeight: "100px",
    },
  })
})

const SquareGrid: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.gridContainer}>
        <article className={classes.contentContainer}>
          <Typography variant="h1" className={clsx(classes.white, classes.pageTitle)}>
            Services
          </Typography>
          <div className={classes.squareContainer}>
            <div className={clsx(classes.darkgray, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white, classes.squareTitleText)}>
                Distributed systems design
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Architect your systems so they can scale safely.
              </Typography>
            </div>
            
            <div className={clsx(classes.gray9, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white, classes.squareTitleText)}>
                Solutions Research
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Our in-house computer scientists are there to help you crack the toughest problems.
              </Typography>
            </div>
            
            <div className={clsx(classes.yellow, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.dark)}>
                Blockchain Implementation
              </Typography>
              <div className={clsx(classes.hr, classes.bgDark)}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.dark)}>
                Your protocol deserves world-class treatment.
              </Typography>
            </div>
            
            <div className={clsx(classes.lightgray, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2)}>
                Smart Contract Audits
              </Typography>
              <div className={clsx(classes.hr, classes.bgDark)}></div>
              <Typography variant="h6" className={clsx(classes.bodyText)}>
                Get a second opinon so you can go to market faster and with peace of mind.
              </Typography>
            </div>
            
            <div className={clsx(classes.blackPaper, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white)}>
                Smart Contract Engineering
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Is gas-efficient, security-critical code the foundation of your project’s success?
              </Typography>
            </div>
            
            <div className={clsx(classes.darkgray, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white)}>
                dApp Development
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                We have a team of engineers and designers dedicated to crafting quality app experiences.
              </Typography>
            </div>
            <div className={clsx(classes.doubleSquare)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white)}>
                Tooling development
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Often when you’re doing something new, you’ll want tools just right for the job. Check out tools we’ve already built, or put in a request for one today.
              </Typography>
            </div>
            <div className={clsx(classes.texturedGray, classes.square)}>
              <Typography variant="h2" className={clsx(classes.marginTop, classes.h2, classes.white)}>
                Software maintenance
              </Typography>
              <div className={classes.hr}></div>
              <Typography variant="h6" className={clsx(classes.bodyText, classes.white)}>
                Ensures that the great code you wrote works forward and backward in time.
              </Typography>
            </div>
          </div>
          <Typography variant="h1" className={clsx(classes.white, classes.pageTitle)}>
            It all starts with an <a className={classes.white} href="mailto:info@chainsafe.com">email.</a>
          </Typography>
        </article>
      </div>
    </section>
  )
}

export default SquareGrid;