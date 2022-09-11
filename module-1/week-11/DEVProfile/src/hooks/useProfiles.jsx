import { useContext } from "react";
import { UserContext } from "../context/UsersContext/UsersContext";

export const useProfiles = () => {
    const context = useContext(UserContext);

    return context;
}