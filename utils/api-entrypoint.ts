export default function () {
    const config = useRuntimeConfig();
    return config.public.API_ENTRYPOINT;
}