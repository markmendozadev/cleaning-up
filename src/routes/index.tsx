import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";

export default function PageRoutes() {
  return useRoutes([MainRoutes]);
}
