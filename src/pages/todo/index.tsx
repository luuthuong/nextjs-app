import { getTodoPromise } from "@/features/todos";
import { Todo } from "@/shared/types";
import { Loading } from "@nextui-org/react";
import {
    GetServerSideProps,
    GetServerSidePropsContext,
    PreviewData,
} from "next";
import dynamic from "next/dynamic";
import { ParsedUrlQuery } from "querystring";

export const getServerSideProps: GetServerSideProps<TodoPageProps> = async (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    const data = await getTodoPromise();
    return {
        props: { data },
    };
};

const TodoDynamic = dynamic(
    () => import("@/features/todos").then((m) => m.Todos),
    {
        loading: () => <Loading />,
    }
);
type TodoPageProps = {
    data: Todo[];
};
const TodoPage = ({ data }: TodoPageProps) => {
    return <TodoDynamic data={data} />;
};

export default TodoPage;
