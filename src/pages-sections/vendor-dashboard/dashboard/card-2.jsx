import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp"; // GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { H3, H6, Paragraph } from "components/Typography"; // =========================================================

// =========================================================
const Card2 = ({
  children,
  title,
  amount,
  percentage
}) => {
  return <Card sx={{
    p: 3,
    pr: 1,
    gap: 2,
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between"
  }}>
      <Box flexShrink={0} height="inherit">
        <FlexBox flexDirection="column" justifyContent="space-between" height="inherit">
          <H6 color="grey.600">{title}</H6>

          <div>
            <H3>{amount}</H3>

            <FlexBox mt={0.3} alignItems="center" color="info.main">
              <ArrowDropUp />
              <Paragraph fontSize={12}>{percentage}</Paragraph>
            </FlexBox>
          </div>
        </FlexBox>
      </Box>

      <Box sx={{
      "& > div": {
        minHeight: "0px !important"
      }
    }}>{children}</Box>
    </Card>;
};

export default Card2;