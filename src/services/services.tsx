export const Services = () => {
    const fetchRequest = async (url: string, options: RequestInit) => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    };
    return { fetchRequest };
};

const get = (url: string, options?: RequestInit) => {
    const { fetchRequest } = Services();
    return fetchRequest(url, { method: "GET", ...options });
};

export const use = {
    get,
};
