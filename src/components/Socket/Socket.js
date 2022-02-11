

import {URL} from "../../api/apiDB"
let ws = new WebSocket(`${URL.SOCKET}/chat`);
export {ws};