import axios, { CancelToken } from "axios";
import Routes from "../../../Routes";

const requestHistoryRoutes = Routes.requestHistoryRoutes

export const getTransactionDetails = async (transactionFilePath: string, cancellationToken: CancelToken): Promise<string> => {
    const url = `${requestHistoryRoutes.getTransactionDetailsRoute}/${encodeURIComponent(transactionFilePath)}`;

    const response = await axios(url, {
        method: "GET",
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        cancelToken: cancellationToken
    });

    if (response.statusText !== "OK") {
        throw response.statusText;
    }

    return response.data;
};