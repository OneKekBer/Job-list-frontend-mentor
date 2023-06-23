import { Box, Button, Typography, useMediaQuery } from "@mui/material";

import React from "react";
import FlexAround from "./flexAround";
import { useDispatch } from "react-redux";

import { addFilter } from "../store";

const ListItem = ({ item }) => {
    const isNonMobileScreen = useMediaQuery("(min-width:996px)");
    const dispatch = useDispatch();

    const tags = [].concat(
        ...item.languages,
        item.level,
        item.role,
        ...item.tools
    );

    return (
        <Box
            flexDirection={isNonMobileScreen ? "row" : "column"}
            justifyContent={isNonMobileScreen ? "space-between" : "center"}
            sx={{
                display: "flex",
                background: "white",
                width: isNonMobileScreen ? "70%" : "100%",
                marginBottom: "20px",
                padding: "20px",
                boxSizing: "border-box",
                transition: "all .5s ease",
                boxShadow: " 0px 0px 63px -2px rgba(153,204,204,0.4)",
                borderRadius: "8px",
                "&:hover": {
                    borderLeft: "10px solid rgba(153,204,204,1)",
                },
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="20px"
            >
                <Box>
                    <img src={item.logo} alt={item.company} />
                </Box>
                <Box
                    display="flex"
                    alignItems="start"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography color="rgba(153,204,204,1)" variant="h7">
                            {item.company}
                        </Typography>
                        {item.new ? (
                            <Box
                                sx={{
                                    background: "#99cccc",
                                    borderRadius: "10px",
                                    padding: "4px",
                                    color: "white",
                                }}
                            >
                                New!
                            </Box>
                        ) : (
                            ""
                        )}
                        {item.featured ? (
                            <Box
                                sx={{
                                    background: "hsl(180, 14%, 20%)",
                                    borderRadius: "10px",
                                    padding: "4px",
                                    color: "white",
                                }}
                            >
                                featured!
                            </Box>
                        ) : (
                            ""
                        )}
                    </Box>

                    <Typography variant="h6">{item.position}</Typography>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                        gap="5px"
                    >
                        <Typography variant="h7">{item.postedAt}</Typography>

                        <Typography variant="h7">{item.postedAt}</Typography>
                        <Typography variant="h7">{item.location}</Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                display="flex"
                gap="10px"
                justifyContent={isNonMobileScreen ? "" : "center"}
                alignItems="center"
            >
                {tags.map((filterName) => {
                    return (
                        <Button
                            size="small"
                            sx={{
                                color: "#99cccc",
                                fontWeight: "600",
                                background: "hsl(180, 31%, 95%)",
                                "&:hover": {
                                    color: "white",
                                    background: "#99cccc",
                                },
                            }}
                            variant="contained"
                            key={filterName}
                            onClick={() => dispatch(addFilter(filterName))}
                        >
                            {filterName}
                        </Button>
                    );
                })}
            </Box>
        </Box>
    );
};

export default ListItem;
