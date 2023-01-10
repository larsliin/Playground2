const listActions = {
    async fetch_countries() {
        return await fetch('assets/countries.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            });
    }
};

export default listActions;
