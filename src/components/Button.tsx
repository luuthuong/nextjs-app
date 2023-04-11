import { ThemeContext } from "@/contexts";
import { useContext, useEffect } from "react";

type Button = {
    title: string;
    customClass?: string;
    textColor?: string;
    onClickEvent?: () => void;
};

const Button = ({ ...config }: Button) => {
    const theme = useContext(ThemeContext);
    useEffect(() => {
        console.log(theme);
    }, []);
    return (
        <button
            onClick={config.onClickEvent}
            style={{ color: config.textColor || "#000" }}
            className={`${config.customClass} text-center`}
        >
            {config.title}
        </button>
    );
};

export default Button;
