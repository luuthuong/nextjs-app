import { AppLayout } from "@/components/AppLayout";
import { Button } from "@nextui-org/react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
type AppProviderProps = {
    children: React.ReactNode;
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
        <div role="alert">
            <p>Something went wrong.</p>
            <pre>{error}</pre>
            <Button onClick={resetErrorBoundary} size={"lg"}>
                Refresh
            </Button>
        </div>
    );
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AppLayout>{children}</AppLayout>
        </ErrorBoundary>
    );
};
