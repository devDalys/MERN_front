import {RootState} from "./store.ts";
import {useSelector} from "react-redux";

export const useTSelector = () => useSelector((state: RootState) => state)
