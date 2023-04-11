export type ErrorProps = {
    msg: string;
}
export type ErrorFallbackProps = {
    error: ErrorProps;
    action: () => void
}