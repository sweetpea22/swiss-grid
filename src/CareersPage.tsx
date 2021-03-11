import React from 'react'
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";


const useStyles = makeStyles(({ palette, breakpoints, constants }: ITheme) => {
  return createStyles({
    pageContainer: {},
    contentContainer: {
    },
    headerContainer: {
      background: "#141414",
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
    },
    headerContentContainer: {
      display: "grid",
      [breakpoints.down('md')]: {
        justifyItems: "center",
        gridTemplateColumns: "1fr",
        margin: "30px 24px 24px 24px",
      },
      [breakpoints.up('md')]: {
        gridTemplateColumns: "35% 1fr",
        columnGap: "20px",
        margin: "0 5% 0 5%",
      },
      [breakpoints.up('lg')]: {
        gridTemplateColumns: "35% 1fr%",
        columnGap: "20px",
        margin: "0 5% 0 5%",
      },
      [breakpoints.up('xl')]: {
        gridTemplateColumns: "22% 1fr 1fr",
      },
    },
    headerTextContainer: {
      [breakpoints.down('md')]: {
        display: "grid",
        "& > p": {
          color: palette.additional["gray"][3],
          fontSize: "16px",
          lineHeight: "22px",
        },
      },
        [breakpoints.up('md')]: {
          marginTop: "15%",
          "& > p": {
            color: palette.additional["gray"][3],
            fontSize: "20px",
            lineHeight: "28px",
          }
        },
    },
    headerTitle: {
      [breakpoints.down('md')]: {
        color: palette.additional["gray"][3],
        fontSize: "48px",
        lineHeight: "56px",
      },
      [breakpoints.up('md')]: {
        color: palette.additional["gray"][3],
        fontSize: "64px",
        lineHeight: "72px",
      },
    },
    bodyContainer: {
      background: palette.additional["gray"][3],
      width: "100%",
    },
    bodyContentContainer: {
      display: "grid",
      gridGap: "24px",
      [breakpoints.up('md')]: {
        gridTemplateColumns: "minmax(0, 1fr)"
      },
      [breakpoints.up('lg')]: {
        gridTemplateColumns: "minmax(0,6fr) minmax(0,.5fr) minmax(0, 6fr)",
        marginTop: "5%",
      }
    },
    bodyTextContainer: { height: "50vh", background: palette.additional["gray"][3],
    position: "relative",
    width: "100%",
    [breakpoints.up('lg')]: {
      padding: "48px 8px 48px 8px",
    },
    },
    hr: {
      background: "darkgray",
    },
    gridline: {
      background: palette.additional["gray"][6],
      height: "1px",
      minWidth: "500px",
      maxWidth: "100%",
    },
    bodyTextWrapper: {
      [breakpoints.up('lg')]: {
        position: "absolute",
        bottom: "2px",
      },
      "& > p": {
        color: palette.additional["gray"][9],
        fontSize: "14px",
        lineHeight: "24px",
      },
      "& > a": {
        color: palette.additional["gray"][9],
        fontSize: "14px",
        lineHeight: "24px",
      },
      "& > h1": {
        color: palette.additional["gray"][9],
        fontSize: "24px",
        lineHeight: "1.2em"
      },
    },
    topAlignedList: {
        position: "absolute",
      top: 0,
        width: "100%",
      "& > h1": {
          color: palette.additional["gray"][9],
          fontSize: "20px",
          padding: "8px",
          lineHeight: "44px",
    }
    },
  })
})
const CareersPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
    <section className={classes.contentContainer}>
        <header className={classes.headerContainer}>
        <div className={classes.headerContentContainer}>
          <div style={{width: "350px", height: "520px", background: "#b5b5b5"}}></div>
          <div className={classes.headerTextContainer}>
            <h1 className={classes.headerTitle}>What does the future look like?</h1>
            <p>Nobody knows, but it starts with infrastructure.</p>
            </div>
        </div>
      </header>
      <main className={classes.bodyContainer}>
        <section className={classes.bodyContentContainer}>
          <div className={classes.bodyTextContainer}>
            <div style={{ background: "#141414", position: "absolute", top: 0, height: "100%", width:"100%"}}>
            <img src="/while.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt=""/>
            </div>
          </div>
          <div></div>
          <div className={classes.bodyTextContainer}>
            <div className={classes.bodyTextWrapper}>
              <h1>Join us to build a brazen future</h1>
              <hr className={classes.hr}></hr>
              <br></br>
              <p>Our mission is to support the future of open-source software and to bring the power of trustless systems to its greatest potential. </p>
              <br></br>
              <p>We do this by delivering high-quality code efficiently, and doing that in a people-first manner.</p>
              <a href="/openpositions"><h3>View open positions</h3></a>
            </div>
          </div>
          </section>
          <section className={classes.bodyContentContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.topAlignedList}>
              <p>Get to know us </p>
              <hr className={classes.hr}></hr>
              <h1><a href="/openpositions">ChainSafers, interviewed: Dustin Brickwood</a></h1>
              <hr className={classes.hr}></hr>
              <h1>ChainSafers, interviewed: Ed Mack </h1>
              <hr className={classes.hr}></hr>
              <h1>ChainSafers, interviewed: Elizabeth Binks </h1>
              <hr className={classes.hr}></hr>
              <h1>The story behind ChainSafe </h1>
              <hr className={classes.hr}></hr>
            </div>
          </div>
          <div></div>
          <div className={classes.bodyTextContainer}>
            <div style={{ height: "100%", width:"100%"}}>
              <img src="/peak.jpeg" style={{maxWidth: "100%", maxHeight: "100%"}} alt=""/>
              </div>
          </div>
        </section>
      </main>
    </section>
  </div>
  )
}

export default CareersPage;