import { Landing, getBlogDataPromise } from "@/features/landing";
import { BlogType } from "@/shared/types";
import { GetStaticProps } from "next";
import React from "react";
export const getStaticProps: GetStaticProps<{ data: BlogType[] }> = async (
    context
) => {
    const data = await getBlogDataPromise();
    return {
        props: { data },
        revalidate: 10,
    };
};

type LandingPageProps = {
    data: BlogType[];
};
const LandingPage = ({ data }: LandingPageProps) => {
    return <Landing data={data} />;
};
export default LandingPage;
