import { serverHttp } from "./http";
import "./websocket";

serverHttp.listen(8080, () => console.log("Server is running on port 8080"));
