import React from 'react'
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";
import Paragraph from "./Paragraph";

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
      alignItems: "center",
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
  })
})

const EditorialPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <section className={classes.contentContainer}>
        <header className={classes.headerContainer}>
          <h1>Employee Spotlight</h1>
          <div style={{ backgroundColor: "#B5b5b5", width: "300px", height: "300px", marginTop: "40px" }}></div>
          <div style={{ backgroundColor: "#b5b5b5", height: "100px", width: "1px", marginTop: "24px" }}></div>
          <h1>Dustin Brickwood,<span style={{fontStyle: "italic"}}> Developer</span></h1>
        </header>
        <main className={classes.bodyContainer}>
          <p className={classes.bodyText}>
            Dustin Brickwood is a Developer and open-source contributor driven by a higher purpose: to inspire more people and organizations to build and solve global problems with Blockchain. His career with ChainSafe started at ETHDenver, a Web3 Hackathon, in 2018.   
          </p>
          <br></br>
          <p className={classes.emphasizedText}>
            Q: ChainSafe is a company built by developers for developers; a place dedicated to contributing to open source technology. What's appealing about that to someone thinking of joining? 
          </p>
          <br></br>
          <p className={classes.bodyText}>
            At ChainSafe, we are building the core infrastructure that's going to push Web3 forward. The opportunity to be part of disrupting an industry that impacts virtually everyone is unbelievably exciting. We initially established ourselves through developing alternative node implementations for varying protocols. We witnessed these networks begin to evolve in very cool ways which inspired us to get more involved and become active participants in the development of these networks. 
          </p>
          <br></br>
          <p className={classes.bodyText}>
            The way we build software, the work we do on networks (e.g., Ethereum, Polkadot) to further the end goal of decentralization, is challenging and rewarding for any Developer.
          </p>
          <br></br>
          <p className={classes.calloutText}>
            “Building out a decentralized web is bigger than us or any other single organization.”
          </p>
          <br></br>
          <p className={classes.emphasizedText}>
            What was your initial role here and how has that evolved? 
          </p>
          <br></br>
          <p className={classes.bodyText}>
          When I started, I had been contributing to the open-source community on my own. As a recent graduate, the hiring team saw my potential and gave me the tools and the resources to make a difference in this industry. 
          </p>
        </main>
      </section>
    </div>
  )
}

export default EditorialPage;