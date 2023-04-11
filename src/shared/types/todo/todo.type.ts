import { TodoTypeEnum } from "@/shared/enums";

export type Todo = {
    id: number;
    title: string;
    content: string;
}

export type TodoAction = {
    type: TodoTypeEnum;
    payLoad: Todo
}