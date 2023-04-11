import { BlogType } from "@/shared/types";
import React from "react";

type LandingProps = {
    data: BlogType[];
};
export const Landing = ({ data }: LandingProps) => {
    console.log(data);
    return (
        <React.Fragment>
            {data?.length &&
                data.map((item) => <h1 key={item.id}>{item.content}</h1>)}
        </React.Fragment>
    );
};
