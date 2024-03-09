import { priority_high, priority_medium, priority_low } from "./array";

const clearArrays = () => {
    priority_high.splice(0, priority_high.length);
    priority_medium.splice(0, priority_medium.length);
    priority_low.splice(0, priority_low.length);
};

export default clearArrays;