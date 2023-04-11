import { ThemeContext } from "@/contexts";
import { useRouter } from "next/router";
import { useContext } from "react";

const TodoDetail = () => {
    const router = useRouter();
    const { todoId } = router.query;
    return <div>Todo {todoId}</div>;
};

export default TodoDetail;
