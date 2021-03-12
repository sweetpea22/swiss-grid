import React, { useState } from "react";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";
import clsx from "clsx";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {
  return createStyles({
    container: {
      background: palette.additional["gray"][4],
      borderRadius: constants.generalUnit,
      position: "relative",
      minHeight: "50vh",
      maxHeight: "100%",
      display: "flex",
      justifyContent: "flex-start",
    },
    slideWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      opacity: 0,
      transitionDuration: "1s ease",
    },
    currentSlide: {
      opacity: 1,
      transitionDuration: "1s",
    },
    textWrapper: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "flex-start",
      marginLeft: "24px",
      marginTop: constants.generalUnit * 4,

    },
    title: {
      color: palette.common.black.main,
      fontSize: "72px",
      lineHeight: "82px",
      marginBottom: "2rem",
      [breakpoints.down('sm')]:{
        fontSize: "36px",
        lineHeight: "44px",
        marginTop: "1rem",
      },
    },
    bodyText: {
      color: palette.common.black.main,
      marginTop: constants.generalUnit * 2,
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "normal",
      [breakpoints.up('lg')]: {
        maxWidth: 600
      },
      [breakpoints.down('lg')]: {
        maxWidth: "75%",
      }
    },
    icon: {
      position: "absolute",
      top: "80%",
      color: "#000",
      cursor: "pointer",
      userSelect: "none",
      fontSize: constants.generalUnit * 4,
      zIndex: zIndex?.layer3,
      "&:first-of-type": {
        left: constants.generalUnit * 4,
      },
      "&:nth-of-type(2)": {
        right: constants.generalUnit * 4,
      },
    }
  })
})


const slides = [
  {
    title: "Openness",
    caption: "We welcome differing ideas and beliefs without judgment and practice candor and respect in all communications.",
  },
  {
    title: "Learning",
    caption: "We relentlessly identify opportunities to improve both professionally and personally, while working on unproven but promising technology.",
  },
  {
    title: "Collaboration",
    caption: "We believe that we can achieve more as a team than we ever could individually and are eager to give and receive constructive feedback in order to improve.",
  },
  {
    title: "Compassion",
    caption: "We recognize each individual's humanity, treat everyone with love & kindness, and go above & beyond in helping everyone feel at home.",
  },
  {
    title: "Accountability",
    caption: "We follow through on duties, responsibilities, & commitments in a timely fashion and admit mistakes even if no one else sees them while taking ownership for any consequences of our decisions.",
  },
  {
    title: "Diligence",
    caption: "We hold ourselves and our colleagues accountable to a high standard and look for the long-term solution instead of providing a short-term fix.",
  },
  {
    title: "Friendliness",
    caption: "We inject our personality and random fun things into ordinary routines and don't take things too seriously even in stressful situations.",
  },
    {
    title: "Freedom",
    caption: "We respect autonomy and independence and encourage others to express themselves freely. We choose a schedule and location that fits our lifestyles.",
  },
]


const Slider: React.FC = () => {

  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={classes.container}>
      {current === 0 ? null :<VscArrowLeft onClick={prevSlide} className={classes.icon} />}
      {current === length - 1 ? null :<VscArrowRight onClick={nextSlide} className={classes.icon} />}
      {slides.map((slide, index) =>
      (
        <div className={clsx(classes.slideWrapper, { [classes.currentSlide]: index === current })} key={index}>
          { index === current && (
            <>
              <div className={classes.textWrapper}>
                <p>{current +1}/8</p>
                <p className={classes.title}>{slide.title}</p>
                <p className={classes.bodyText}>{slide.caption}</p>
              </div>
            </>
          )}
        </div>
      )
      )}
    </div>
  );
};

export default Slider