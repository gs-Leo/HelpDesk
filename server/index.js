import {app} from "./src/server.js";

const port = 3333;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});