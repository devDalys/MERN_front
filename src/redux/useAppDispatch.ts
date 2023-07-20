import {useDispatch} from "react-redux";
import {AppDispatch} from "@type/globaltypes.ts";


export const useAppDispatch = () => useDispatch<AppDispatch>()
