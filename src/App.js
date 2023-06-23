import { useSelector } from "react-redux";
import ListItem from "./components/list-item";
import { Box } from "@mui/material";
import Bg from "./assets/images/bg-header-desktop.svg";
import FlexCenterColumn from "./components/flexCenterColumn";
import { getAllWorks, getVisibleWork } from "./store/todo/works-selector";
import Filter from "./components/filter";
import { useEffect } from "react";

function App() {
    const filters = useSelector((state) => state.filters);

    const allWorks = useSelector((state) =>
        getVisibleWork(state.works, filters)
    );

    // const fun = (i, item) => {
    //     const foundItem = works.find((work) => work.languages.includes(i));
    //     if (foundItem) {
    //         return <ListItem key={foundItem.id} item={foundItem} />;
    //     }
    //     return null; // Return null if no matching item is found
    // };

    return (
        <Box className="App">
            <FlexCenterColumn
                className="wrappper"
                sx={{
                    background: "white",
                }}
            >
                <Box
                    width="100%"
                    mb={4}
                    sx={{
                        background: "#99cccc",
                    }}
                >
                    <img width="100%" src={Bg} />
                </Box>
                <Filter />

                {allWorks.map((work) => {
                    return <ListItem key={work.id} item={work} />;
                })}
            </FlexCenterColumn>
        </Box>
    );
}

export default App;
