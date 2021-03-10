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
      height: "200vh",
      width: "100%",
    },
    bodyContentContainer: {
      display: "grid",
      gridGap: "24px",
      [breakpoints.up('md')]: {
        gridTemplateColumns: "1fr"
      },
      [breakpoints.up('lg')]: {
        gridTemplateColumns: "6.5fr 1fr 6fr",
        marginTop: "40px",
      }
    },
    bodyTextContainer: {
      width: "1/4", height: "40vh", background: palette.additional["gray"][4],
      padding: "48px 8px 48px 8px",
      position: "relative",
      "& > h1": {
        color: palette.additional["gray"][9],
        fontSize: "36px",
        lineHeight: "1.2em"
      },
      "& > p": {
        color: palette.additional["gray"][9],
        fontSize: "16px",
        lineHeight: "24px",
        maxWidth: "55%",
      }
    },
    hr: {
      background: "darkgray",
    },
    bodyTextWrapper: {
      [breakpoints.up('lg')]: {
        position: "absolute",
        bottom: "2px",
      }
    },
    topAlignedList: {
        position: "absolute",
        top: 0,
        "& > h1": {
          padding: "8px",
          lineHeight: "1.2em",
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
          </div>
          <div></div>
          <div className={classes.bodyTextContainer}>
            <div className={classes.bodyTextWrapper}>
              <h1>Join us to build a brazen future</h1>
              <hr className={classes.hr}></hr>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
          </div>
          </section>
          <section className={classes.bodyContentContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.topAlignedList}>
              <p>Get to know us </p>
              <hr className={classes.hr}></hr>
              <h1>ChainSafers, interviewed: Dustin Brickwood </h1>
              <hr className={classes.hr}></hr>
              <h1>ChainSafers, interviewed: Ed Mack </h1>
              <hr className={classes.hr}></hr>
              <h1>ChainSafers, interviewed: Elizabeth Binks </h1>
              <hr className={classes.hr}></hr>
              <h1>The story behind ChainSafe </h1>
              <hr className={classes.hr}></hr>
              <br></br>
              <br></br>
            </div>
          </div>
          <div></div>
          <div className={classes.bodyTextContainer}>
            
          </div>
        </section>
      </main>
    </section>
  </div>
  )
}

export default CareersPage;