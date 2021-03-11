import React from 'react'
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import Slider from './Slider';


const useStyles = makeStyles(({ palette, breakpoints, constants }: ITheme) => {
  return createStyles({
    pageContainer: {
    },
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
      [breakpoints.down('md')]:{
        marginBottom: "24px",
      }
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
        gridTemplateColumns: "35% 1fr",
        columnGap: "20px",
        margin: "0 5% 0 5%",
      },
      [breakpoints.up('xl')]: {
        gridTemplateColumns: "22% 1fr 1fr",
        margin: "0 7% 0 7%",

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
        gridTemplateColumns: "minmax(0, 1fr)",
        marginTop: "24px",
      },
      [breakpoints.up('lg')]: {
        gridTemplateColumns: "minmax(0,5fr) minmax(0,.5fr) minmax(0, 5fr)",
        marginTop: "8%",
      }
    },
    singleColContainer: {
      display: "grid",
      gridGap: "24px",
      [breakpoints.up('md')]: {
        gridTemplateColumns: "minmax(0, 1fr)",
        marginTop: "8%",
      },
    },
    bodyTextContainer: {
      background: palette.additional["gray"][3],
      position: "relative",
      width: "100%",
      [breakpoints.down('md')]: {
        minHeight: "50vh",
        padding: "48px 8px 48px 8px",
      },
      [breakpoints.up('md')]: {
        height: "45vh",
        padding: "48px 8px 48px 8px",
      },
      [breakpoints.up('lg')]: {
        padding: "48px 8px 48px 8px",
        height: "50vh",
      },
    },
    hr: {
      background: palette.additional["gray"][3],
    },
    bodyTextWrapper: {
      [breakpoints.up('lg')]: {
        position: "absolute",
        bottom: "2px",
      },
      "& > p": {
        color: palette.additional["gray"][9],
        fontSize: "16px",
        lineHeight: "24px",
        maxWidth: "60%",
      },
      "& > a": {
        color: palette.additional["gray"][9],
        fontSize: "16px",
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
      [breakpoints.down('md')]: {
        gridRow: 1,
      },
      "& > p": {
        color: palette.additional["gray"][9],
        fontSize: "16px",
        lineHeight: "24px",
        maxWidth: "60%",
      },
      "& > h1": {
          color: palette.additional["gray"][9],
          fontSize: "20px",
          padding: "8px",
          lineHeight: "44px",
    }
    },
    imgWrapper: {
      position: "absolute", top: 0, height: "100%",
      [breakpoints.down('lg')]: {
        width: "100%",
      },
      "& > img": {
        width: "100%",
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
          <img src="/gradient.png" alt="" style={{width: "350px", height: "520px", background: "#b5b5b5"}}/>
          <div className={classes.headerTextContainer}>
            <h1 className={classes.headerTitle}>What does the future look like?</h1>
            <p>Nobody knows, but it starts with infrastructure.</p>
            <br></br>
            <p style={{color: "white"}}><u>View open positions</u></p>
            </div>
        </div>
      </header>
        <main className={classes.bodyContainer}>
        {/* Intro */}
        <section className={classes.bodyContentContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.imgWrapper}>
            <img 
            src="/office1.png"
            alt=""/>
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
              <br></br>
              {/* <a href="/openpositions"><h3>View open positions</h3></a> */}
            </div>
          </div>
          </section>
          {/* Get to know us */}
          <section className={classes.bodyContentContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.topAlignedList}>
              <p>Get to know us </p>
              <hr className={classes.hr}></hr>
              <h1><a href="/editorial">ChainSafers, interviewed: Dustin Brickwood</a></h1>
              <hr className={classes.hr}></hr>
              <h1><a href="/openpositions">ChainSafers, interviewed: Ed Mack</a></h1>
              <hr className={classes.hr}></hr>
              <h1><a href="/openpositions">ChainSafers, interviewed: Elizabeth Binks</a></h1>
              <hr className={classes.hr}></hr>
              <h1><a href="/openpositions">The story behind ChainSafe</a></h1>
              <hr className={classes.hr}></hr>
              <h1><a href="/openpositions">How we support employees</a></h1>
              <hr className={classes.hr}></hr>
            </div>
          </div>
          <div></div>
          <div className={classes.bodyTextContainer}>
            <div className={classes.imgWrapper}>
            <img src="/plant.png" style={{ height: "100%"}} alt=""/>
            </div>
          </div>
          </section>
          {/* Culture */}
          <section className={classes.bodyContentContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.bodyTextWrapper}>
              <h1>Culture is number one.</h1>
              <hr className={classes.hr}></hr>
              <br></br>
              <p>Great cultures make better organizations, which make better societies. ChainSafe is strongly committed to maintaining a welcoming environment for everyone to do their best work. </p>
              <br></br>
              <p>There are ChainSafers on every continent. That means creating a space of  diversity, inclusion, and belonging is second to none. </p>
              <br></br>
              <h1><a href="/openpositions">Read about our value system</a></h1>

            </div>
          </div>
          <div></div>
          <div className={classes.bodyTextContainer}>
            <Slider/>
          </div>
          </section>
          {/* Current Openings */}
          <section className={classes.singleColContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.topAlignedList}>
              <p>Current Openings Worldwide </p>
              <hr className={classes.hr}></hr>
              <h1><a href="/openpositions">Go Developer</a></h1>
                <hr className={classes.hr}></hr>
              <h1><a href="/openpositions">Rust Developer</a></h1>
              <hr className={classes.hr}></hr>
              <h1><a href="/openpositions">Typescript Ethereum Developer</a></h1>
              <hr className={classes.hr}></hr>
              <h1><a href="/openpositions">Solutions Engineer</a></h1>
              <hr className={classes.hr}></hr>
              <h1><a href="/openpositions">Don't see your role? Apply here</a></h1>
              <hr className={classes.hr}></hr>
            </div>
          </div>
        </section>
      </main>
    </section>
  </div>
  )
}

export default CareersPage;

//  https://res.cloudinary.com/ddxhvanz2/image/upload/v1615486323/chainsafe%20careers%20page/office1_uftrt6.png 2x