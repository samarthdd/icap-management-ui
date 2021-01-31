import axios, { CancelToken, Method } from "axios";

const _handleUnauthorisedResponse = () => {
    if (localStorage.getItem("currentUser")) {
        localStorage.removeItem("currentUser");
        window.location.reload();
    }
}

const axiosRequestHelper = async (
    url: string,
    method: Method,
    cancellationToken: CancelToken,
    authToken?: string,
    data?: any,
    headers?: { [header: string]: string }) => {

    try {
        const response = await axios(url, {
            withCredentials: true,
            method,
            data: JSON.stringify(data),
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': authToken,
                ...headers
            },
            cancelToken: cancellationToken
        });

        if (response.status < 200 || response.status > 299) {
            throw response;
        }

        if (response.request.responseUrl !== url) {
            // auto logout if server returned a redirect URL because of missing session token
            _handleUnauthorisedResponse();
        }

        return response.data;
    }
    catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error.response.data);

        if ([403].indexOf(error.response.status) !== -1) {
            // auto logout if 403 Forbidden response returned from api
            _handleUnauthorisedResponse();
        }

        throw error;
    }
}

export default axiosRequestHelper;