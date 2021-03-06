import React from 'react'
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";

type IParagraphProps = { 
  bodyText?: string;
  h1?: string;
  h3?: string;
}
const Paragraph: React.FC<IParagraphProps> = ({bodyText, h1, h3}) => {
  // const classes = useStyles();
  return (
    <div>
      hello
    </div>
  )
}

export default Paragraph;