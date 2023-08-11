import { createContext } from "react";

const userContext = createContext({
  LoggedinUser: "Default User",
});

export default userContext;
