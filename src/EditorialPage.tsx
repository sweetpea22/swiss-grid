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

const EditorialPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <section className={classes.contentContainer}>
        <header className={classes.headerContainer}>
          <h1>Employee Spotlight Series I</h1>
          <div style={{ backgroundColor: "#B5b5b5", width: "300px", height: "300px", marginTop: "40px" }}></div>
          <div className={classes.verticalLine}></div>
          <h1>Dustin Brickwood,<span style={{fontStyle: "italic"}}> Developer</span></h1>
        </header>
        <main className={classes.bodyContainer}>
          <p className={classes.bodyText}>
            Dustin Brickwood is a Developer and open-source contributor driven by a higher purpose: to inspire more people and organizations to build and solve global problems with Blockchain. His career with ChainSafe started at ETHDenver, a Web3 Hackathon, in 2018.   
          </p>
          <br></br>
          <p className={classes.emphasizedText}>
            ChainSafe is a company built by developers for developers; a place dedicated to contributing to open source technology. What's appealing about that to someone thinking of joining? 
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
          <div className={classes.hr}></div>
          <br></br>
          <p className={classes.calloutText}>
            “Building out a decentralized web is bigger than us or any other single organization.”
          </p>
          <br></br>
          <div className={classes.hr}></div>
          <br></br>
          <p className={classes.emphasizedText}>
            What was your initial role here and how has that evolved? 
          </p>
          <br></br>
          <p className={classes.bodyText}>
          When I started, I had been contributing to the open-source community on my own. As a recent graduate, the hiring team saw my potential and gave me the tools and the resources to make a difference in this industry. 
          </p>
          <br></br>
          <p className={classes.bodyText}>
          I expressed an interest in working on Go and core infrastructure, and that was where I was able to direct my efforts. When I needed a new challenge, I was able to express that. I had to work tenaciously to learn Rust, and that fueled my passion for continuously learning new tools and contributing in new ways.
          </p>
          <br></br>
          <p className={classes.bodyText}>
          To say that ChainSafe is engineering-driven is highly accurate. We are structured in a way that is responsive to the interests and curiosity of the individuals who make up the team. We provide the platform, the support, and the opportunity to step up and prove your capabilities.
          </p>
          <br></br>
          <p className={classes.bodyText}>
          Being part of the team at ChainSafe is a deeply satisfying way to grow into the Engineer you genuinely want to be: someone using technology to solve real problems that impact the world.
          </p>
          <br></br>
          <p className={classes.bodyText}>
            Building out a decentralized web is bigger than us or any other single organization. We are all invested in making web3 a reality, building out the tools and the tech that we ourselves use. 
          </p>
          <br></br>
          <div style={{ backgroundColor: "#B5b5b5", width: "100%", height: "300px", marginTop: "40px" }}></div>
          <br></br>
          <br></br>
          <p className={classes.emphasizedText}>
            Why do you love it here?
          </p>
          <br></br>
          <p className={classes.bodyText}>
            There aren't very many companies in the world doing the work that we are doing. It's a true community-driven initiative with multiple people pushing this technology forward. As contributors to open source tech, we subscribe to the vital importance of knowledge sharing with the community.
          </p>
          <br></br>
          <p className={classes.bodyText}>
            We are continuously communicating with folks all over the world who are as excited and passionate as we are - and at ChainSafe, I'm privileged to be working with a significant number of them. 
          </p>
          <br></br>
          <p className={classes.bodyText}>
            Everyone here is open to bounce ideas off. We share the same ambition and motivation to build this out for a better world. Being a part of something larger than our organization is fantastic. This type of tech is elevating the ability to work together in a global market. 
          </p>
          <br></br>
          <br></br>
          <div style={{ backgroundColor: "#B5b5b5", width: "100%", height: "300px" }}></div>
          <br></br>
          <br></br>
          <p className={classes.emphasizedText}>
            What has been your greatest accomplishment?
          </p>
          <br></br>
          <p className={classes.bodyText}>
            This upcoming year will be monumental for ChainSafe. We have a number of projects that are going live this year that are very exciting, and we can’t wait to see how our community will use the software we’ve been working so hard on.
          </p>
          <br></br>
          <p className={classes.bodyText}>
            I've had the pleasure of collaborating on projects that a year and a half ago didn't even seem possible. It's an enabling technology, and it's exciting to see what others will use it for.
          </p>
          <br></br>
          <p className={classes.emphasizedText}>
            What would you say to encourage people to get into open source software?
          </p>
          <br></br>
          <p className={classes.bodyText}>
            Coming from a non-traditional tech background and working on these complex projects is incredibly satisfying.
          </p>
          <br></br>
          <p className={classes.bodyText}>
            When I first started, I had imposter syndrome, because I wasn't a "blockchain engineer" or a "developer." But the more you immerse yourself in open source and step into the conversation about its potential, the more you are drawn in and inspired to make a difference. Intelligence is not knowledge, imagination is, and there are no limits to your own creativity.
          </p>
          <br></br>
          <br></br>
          <div className={classes.hr}></div>
          <br></br>
          <p className={classes.italicText}>
            The work we do at ChainSafe will offer you the most significant technical challenges you can imagine - and some that you can't. 
          </p>
          <br></br>
          <p className={classes.bodyText}>
            We work with the best people and make meaningful contributions to the open-source work that is driving the Web3 infrastructure and blockchain space forward. If you want to be part of our community, we encourage you to explore our project work on GitHub, our values, and the open roles on our team. 
               
          </p>
        </main>
      </section>
    </div>
  )
}

export default EditorialPage;