export const getAllWorks = (state) => {
    return state;
};

export const getVisibleWork = (state, filters) => {
    if (filters.length === 0) {
        return state;
    }
    return state.filter((item) => {
        const filterTags = [].concat(
            ...item.languages,
            item.level,
            item.role,
            ...item.tools
        );

        return filters.every((filter) =>
            filterTags.includes(filter.filterName)
        );
    });
};
