import React from 'react'
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Typography } from '@chainsafe/common-components';

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
          [breakpoints.down('sm')]: {
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
            justifyContent: "space-evenly",
          }
    },
    doubleSquare: {
      minWidth: "731px",
      maxWidth: "731px",
      height: "357px",
          marginBottom: constants.generalUnit * 3,
          marginRight: constants.generalUnit * 3,
          background: palette.additional["gray"][10],

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
    hr: {
      height: "1px", width: "100%", background: "lightgray"
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
            <div className={classes.square}>
              <Typography variant="h2">
                Get on-chain data to power blockchain games.
              </Typography>
            </div>
            <div className={classes.square}>
              <Typography variant="h2">
                Get on-chain data to power blockchain games.
              </Typography>
            </div>
            <div className={classes.square}>
              <Typography variant="h2">
                Get on-chain data to power blockchain games.
              </Typography>
            </div>
            <div className={classes.square}>
              <Typography variant="h2">
                Get on-chain data to power blockchain games.
              </Typography>
            </div>
            <div className={classes.square}>
              <Typography variant="h2">
                Get on-chain data to power blockchain games.
              </Typography>
            </div>
            <div className={classes.square}>
              <Typography variant="h2">
                Get on-chain data to power blockchain games.
              </Typography>
            </div>
            <div className={classes.doubleSquare}>
              <Typography variant="h2">
                Get on-chain data to power blockchain games.
              </Typography>
            </div>
            <div className={classes.square}>
              <Typography variant="h2">
                Get on-chain data to power blockchain games.
              </Typography>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SquareGrid;