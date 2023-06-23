import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFilter, removeAllFilters } from "./../store/index.js";

const Filter = () => {
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    return (
        <Box>
            {filters.map((filter) => {
                return (
                    <Button
                        onClick={() => dispatch(removeFilter(filter.id))}
                        key={filter.id}
                    >
                        {filter.filterName}
                    </Button>
                );
            })}
            <Button color="error" onClick={() => dispatch(removeAllFilters())}>
                Clear
            </Button>
        </Box>
    );
};

export default Filter;
