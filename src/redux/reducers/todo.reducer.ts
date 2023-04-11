import { TodoTypeEnum } from "@/shared/enums/todos";
import { Todo, TodoAction } from "@/shared/types";

export const todoReducer = (state: Todo[], action: TodoAction) => {
    switch (action.type) {
        case TodoTypeEnum.DO:
            console.log('do', action.payLoad);
            return state
        case TodoTypeEnum.UNDO:
            console.log('undo', action.payLoad);
            return state;
        case TodoTypeEnum.DEL:
            console.log('del', action.payLoad);
            return state;
        default:
            return state;
    }
};