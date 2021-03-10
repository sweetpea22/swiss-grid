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
      // [breakpoints.down('md')]: {
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      // },
      [breakpoints.down('md')]: {
        display: "grid",
        gridTemplateColumns: "20% 1fr",
        margin: "0 24px 0 24px",
      },
      [breakpoints.down('lg')]: {
        display: "grid",
        gridTemplateColumns: "40% 1fr 1fr",
        columnGap: "20px",
        margin: "0 24px 0 24px",

      },
      [breakpoints.up('lg')]: {
        display: "grid",
        gridTemplateColumns: "22% 1fr 1fr",
        columnGap: "40px",
        margin: "0 10% 0 10%",
      },
      [breakpoints.up('xl')]: {
        gridTemplateColumns: "22% 1fr 1fr",
      },
    },
    headerTextContainer: {
      [breakpoints.up('md')]: {
        marginTop: "15%",
      },
      "& > h1": {
        color: palette.additional["gray"][3],
        fontSize: "64px",
        lineHeight: "72px",
      },
      "& > p": {
        color: palette.additional["gray"][3],
        fontSize: "20px",
        lineHeight: "28px",
      }
    },
    bodyContainer: {
      background: palette.additional["gray"][3],
      height: "300vh",
      width: "100%",
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
            <h1>What does the future look like?</h1>
            <p>Nobody knows, but it starts with infrastructure.</p>
            </div>
        </div>
      </header>
      <main className={classes.bodyContainer}>

      </main>
    </section>
  </div>
  )
}

export default CareersPage;