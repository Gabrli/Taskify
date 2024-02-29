import { createContext } from "react";
import { ITask } from "../types/ITask";

export const taskListContext = createContext<ITask[]>([])