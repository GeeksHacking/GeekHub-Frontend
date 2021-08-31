import ky from "ky";

export const apiClient = ky.create({
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
