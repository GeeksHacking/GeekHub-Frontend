import ky from "ky";

const useKy = (): typeof ky => {
    return ky.create({
        prefixUrl: "https://geekhub-api.geekshacking.com/",
        hooks: {
            afterResponse: [
                async (request, _options, response) => {
                    if (response.status !== 401) return;

                    return ky(request);
                },
            ],
        },
    });
}

export const apiClient = useKy();