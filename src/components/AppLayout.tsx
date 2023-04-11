import { routes } from "@/routes";
import Footer from "./Footer";
import Menu from "./Menu";

type AppLayoutProps = {
    children: React.ReactNode;
};
export const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className=" w-screen ">
            <div className="container block mx-auto">
                <Menu routes={routes} />
                {children}
                <Footer />
            </div>
        </div>
    );
};
