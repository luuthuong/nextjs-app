import { Todo } from "@/shared/types";

const mockDataTodo: Todo[] = [
    {
        id: 1,
        title: 'Title todo 1',
        content: 'Content 1'
    },
    {
        id: 2,
        title: 'Title todo 2',
        content: 'Content 2'
    },
    {
        id: 3,
        title: 'Title todo 3',
        content: 'Content 3'
    },
    {
        id: 4,
        title: 'Title todo 4',
        content: 'Content 4'
    },
]

export const getTodoPromise = () => new Promise<Todo[]>((resolve, reject) => {
    setTimeout(() => {
        const data = mockDataTodo.map(item => ({
            ...item,
            id: Math.floor(Math.random() * 10),
            content: Math.floor(Math.random() * 10) + item.content
        }));
        resolve(data)
    }, 2000);
});