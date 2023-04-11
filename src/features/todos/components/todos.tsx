import { Todo } from "@/shared/types";
import React from "react";

export type TodoPageProps = {
    children: React.ReactNode;
};
type TodoProps = {
    data: Todo[];
};
export const Todos = ({ data }: TodoProps) => {
    return (
        <React.Fragment>
            {data?.length &&
                data.map((item, index) => (
                    <div key={index}>
                        <div>{item.content}</div>
                        <div>{item.id}</div>
                    </div>
                ))}
        </React.Fragment>
    );
};
