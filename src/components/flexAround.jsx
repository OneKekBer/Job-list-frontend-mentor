const { default: styled } = require("@emotion/styled");
const { Box } = require("@mui/material");

const FlexAround = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
});

export default FlexAround;
