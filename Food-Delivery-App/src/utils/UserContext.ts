import { createContext } from "react";
export const UserContext = createContext({
  user: { name: "Yash Garg", email: "abc@xyz.com" },
});
UserContext.displayName = "UserContext1";
