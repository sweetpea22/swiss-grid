import React from 'react'
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import Slider from './Slider';


const useStyles = makeStyles(({ palette, breakpoints, constants }: ITheme) => {
  return createStyles({
    headerContainer: {
      background: "#141414",
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      [breakpoints.down('md')]:{
      }
    },
    headerContentContainer: {
      display: "grid",
      [breakpoints.up('md')]: {
        gridTemplateColumns: "35% 1fr",
        columnGap: "48px",
        margin: "0 5% 0 5%",
      },
      [breakpoints.up('lg')]: {
        gridTemplateColumns: "35% 1fr",
        columnGap: "48px",
        margin: "0 5% 0 5%",
      },
      [breakpoints.up('xl')]: {
        gridTemplateColumns: "22% 1fr 1fr",
        margin: "0 7% 0 7%",
      },
      [breakpoints.up(3800)]:{
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
      },
      [breakpoints.down('md')]: {
        gridTemplateColumns: "1fr",
        justifyItems: "center",
        margin: "30px 24px 24px 24px",
      },
      [breakpoints.down('sm')]:{
        gridTemplateColumns: "1fr",
        justifyItems: "center",
        margin: "32px 0"
      },
    },
    headerTextContainer: {
      [breakpoints.down('md')]: {
        display: "grid",
        justifyItems: "center",
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
        textAlign: "center",
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
      overflowX: "hidden",
    },
    bodyContentContainer: {
      display: "grid",
      [breakpoints.up('lg')]: {
        gridTemplateColumns: "minmax(0,5fr) minmax(0,.5fr) minmax(0, 5fr)",
        marginTop: "6%",
        rowGap: 0,
      },
      [breakpoints.up(3800)]:{
        gridTemplateColumns: "minmax(0,5fr) 100px minmax(0, 5fr)",
        margin: "3% 10%",
        rowGap: 0,
      },
      [breakpoints.between(960, 1100)]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        marginTop: "24px",
        width: "100%",
      },
      [breakpoints.down('md')]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        width: "100%",
      },
    },
    singleColContainer: {
      display: "grid",
      [breakpoints.up('md')]: {
        gridTemplateColumns: "1fr",
        marginTop: "8%",
      },
      [breakpoints.up(3800)]:{
        margin: "0 10%",
      },
    },
    bodyTextContainer: {
      background: palette.additional["gray"][3],
      position: "relative",
      width: "100%",
      [breakpoints.up('lg')]:{
        minHeight: "50vh",
        maxHeight: "55vh",
      },
      [breakpoints.up(3800)]:{
        maxHeight: "none",
        minHeight: "45vh",
      },
      [breakpoints.between(990, 1100)]:{
        height: "unset",
        maxHeight: "100%",
      },
    },
    gutter: {
      [breakpoints.down('md')]:{
        display: "none",
      }
    },
    bodyTextWrapper: {
      padding: "0 8px",
      maxWidth: "95%",
      [breakpoints.up('lg')]: {
        position: "absolute",
        bottom: "2px",
        width: "100%",
        maxWidth: "99%",
      },
      [breakpoints.down('sm')]: {
        bottom: 0,
      },
      "& > p": {
        color: palette.additional["gray"][9],
        fontSize: "16px",
        lineHeight: "24px",
        [breakpoints.down('sm')]:{
          maxWidth: "100%",
        },
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
      maxWidth: "100%",
      minWidth: "99%",
      [breakpoints.up('lg')]:{
        position: "absolute",
        bottom: 0,
        width: "calc(100% - 16px)"
      },
      [breakpoints.down('md')]: {
        margin: "16px 0 16px 8px",
        maxWidth: "95%",
        minWidth: "90%",
        position: "relative",
        top: "auto",
      },
      [breakpoints.between(990, 1100)]:{
        minWidth: "93%",
      },
      [breakpoints.up('md')]:{
        margin: "0 8px",
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
          lineHeight: "44px",
          [breakpoints.up('md')]:{
            padding: "8px",
          }
    }
    },
    imgWrapper: {
      position: "relative", height: "100%",
      [breakpoints.between(990, 1100)]: {
        maxWidth: "100%",
        position: "static",
      },
      [breakpoints.down('md')]: {
        maxWidth: "100%",
        position: "static",
        top: "auto",
      },
      "& > img": {
        maxWidth: "100%",
        maxHeight: "100%",
        [breakpoints.up('xl')]:{
          width: "unset",
          maxWidth: "40vw",
          maxHeight: "auto",
        },
        [breakpoints.up('lg')]:{
          margin: "0 0 0 8px",
          width: "calc(100% - 16px)",
        },
        [breakpoints.down('md')]:{
          width: "100%",
        },
      }
    },
    headerImg: {
      [breakpoints.up('md')]:{
        width: "350px", height: "520px", background: "#b5b5b5",
      },
      [breakpoints.down('sm')]: {
        width: "100%",
        height: "500px",
      },
    },
    bulletListContainer: {
      background: palette.additional["gray"][9],
      borderRadius: constants.generalUnit,
      position: "relative",
      minHeight: "50vh",
      maxHeight: "100%",
      display: "flex",
      justifyContent: "flex-start",
    },
    bulletList: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      marginLeft: "24px",
      "& > p": {
        color: palette.additional["gray"][5],
        marginTop: constants.generalUnit * 2,
        fontSize: "20px",
        lineHeight: "24px",
      },
      "& > h3":{
        color: palette.additional["gray"][6],
        fontSize: "36px",
        lineHeight: "44px",
        marginBottom: constants.generalUnit * 2,
      }
    }
  })
})
const CareersPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
    <section>
      <header className={classes.headerContainer}>
        <div className={classes.headerContentContainer}>
          <img src="https://res.cloudinary.com/ddxhvanz2/image/upload/v1615485968/chainsafe%20careers%20page/gradient_jsmmlh.png" alt="Modern gradient from yellow to black" className={classes.headerImg}/>
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
        <article className={classes.bodyContentContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.imgWrapper}>
            <img 
            src="https://res.cloudinary.com/ddxhvanz2/image/upload/v1615566017/chainsafe%20careers%20page/office_lxglkb.png"
            alt="ChainSafe's office in Chinatown, a sunfilled room full of standing desks"/>
            </div>
          </div>
          <div className={classes.gutter}></div>
          <div className={classes.bodyTextContainer}>
            <div className={classes.bodyTextWrapper}>
              <h1>Join us to build a brazen future</h1>
              <hr></hr>
              <br></br>
              <p>Our mission is to support the future of open-source software and to bring the power of trustless systems to its greatest potential. </p>
              <br></br>
              <p>We do this by delivering high-quality code efficiently, and doing that in a people-first manner.</p>
            </div>
          </div>
          </article>
          {/* Get to know us */}
          <article className={classes.bodyContentContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.topAlignedList}>
              <p>Get to know us </p>
              <hr></hr>
              <h1><a href="/editorial">ChainSafers, interviewed: Dustin Brickwood</a></h1>
              <hr></hr>
              <h1><a href="/openpositions">ChainSafers, interviewed: Ed Mack</a></h1>
              <hr></hr>
              <h1><a href="/openpositions">ChainSafers, interviewed: Elizabeth Binks</a></h1>
              <hr></hr>
              <h1><a href="/openpositions">The story behind ChainSafe</a></h1>
              <hr></hr>
              <h1><a href="/openpositions">How we support employees</a></h1>
              <hr></hr>
            </div>
          </div>
          <div className={classes.gutter}></div>
          <div className={classes.bodyTextContainer}>
            <div className={classes.imgWrapper}>
            <img src="https://res.cloudinary.com/ddxhvanz2/image/upload/v1615563740/chainsafe%20careers%20page/chainsafe-office2_dimbga.png"  alt=""/>
            </div>
          </div>
          </article>
          {/* Culture */}
          <section className={classes.bodyContentContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.bodyTextWrapper}>
              <h1>Culture is number one.</h1>
              <hr></hr>
              <br></br>
              <p>Great cultures make better organizations, which make better societies. ChainSafe is strongly committed to maintaining a welcoming environment for everyone to do their best work. </p>
              <br></br>
              <p>There are ChainSafers on every continent. That means creating a space of  diversity, inclusion, and belonging is second to none. </p>
              <br></br>
            </div>
          </div>
          <div className={classes.gutter}></div>
          <div className={classes.bodyTextContainer}>
            <div className={classes.bodyTextWrapper}>
              <Slider/>
            </div>
          </div>
          </section>
          {/* Culture */}
          <section className={classes.bodyContentContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.bodyTextWrapper}>
              <h1>Learn with friendly and supportive humans</h1>
              <hr></hr>
              <br></br>
              <p>Founded by Developers for Developers, we foster an environment where tasks are assigned based on what you want to learn, not just what you already know. </p>
              <br></br>
              <p>Building the future shouldn’t come at a cost of personal development. We want everyone to have the resources and support to be their best selves. </p>
              <br></br>
            </div>
          </div>
          <div className={classes.gutter}></div>
          <div className={classes.bodyTextContainer}>
            <div className={classes.bodyTextWrapper}>
              <article className={classes.bulletListContainer}>
                <div className={classes.bulletList}>
                  <p>Fast opportunities for personal growth</p>
                  <p>Mentorship and budget for professional development</p>
                  <p>Lots of autonomy and responsibility</p>
                  <p>Work on a variety of ecosystems and tech stacks</p>
                  <p>Sustainable and thoughtful culture</p>
                  <p>A results-driven environment</p>
                  <p>Close collaboration with an international team</p>
                  <p>Flexible work hours and remote-friendly</p>
                </div>
              </article>
            </div>
          </div>
          </section>
          {/* Current Openings */}
          <section className={classes.singleColContainer}>
          <div className={classes.bodyTextContainer}>
            <div className={classes.topAlignedList}>
              <p>Current Openings Worldwide </p>
              <hr></hr>
              <h1><a href="/openpositions">Go Developer</a></h1>
              <hr></hr>
              <h1><a href="/openpositions">Rust Developer</a></h1>
              <hr></hr>
              <h1><a href="/openpositions">Typescript Ethereum Developer</a></h1>
              <hr></hr>
              <h1><a href="/openpositions">Solutions Engineer</a></h1>
              <hr></hr>
              <h1><a href="/openpositions">Don't see your role? Apply here</a></h1>
              <hr></hr>
            </div>
          </div>
        </section>
      </main>
    </section>
  </div>
  )
}

export default CareersPage;