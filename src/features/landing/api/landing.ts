import { BlogType } from "@/shared/types";

const mockDataBlog: BlogType[] = [
    {
        id: 1,
        content: 'Content blog 1'
    },
    {
        id: 2,
        content: 'Content blog 2'
    },
    {
        id: 3,
        content: 'Content blog 3'
    },
    {
        id: 4,
        content: 'Content blog 4'
    },
    {
        id: 5,
        content: 'Content blog 5'
    }
]
export const getBlogDataPromise = () => {
    return new Promise<BlogType[]>((resolve) => {
        setTimeout(() => {
            const data = mockDataBlog.map(x => ({
                id: Math.floor(Math.random() * 10),
                content: Math.floor(Math.random() * 10) + x.content
            }))
            resolve(data)
        }, 2000);
    })
}