export default interface IConfig {
    requestHistory: {
        transactionEventServiceBaseUrl: string,
        getTransactionsPath: string,
        getTransactionDetailsPath: string
    },

    policy: {
        policyManagementServiceBaseUrl: string;
        getPolicyPath: string;
        deletePolicyPath: string;
        getDraftPolicyPath: string;
        updateDraftPolicyPath: string;
        getCurrentPolicyPath: string;
        getPolicyHistoryPath: string;
        publishPolicyPath: string;
        distributePolicyPath: string;
    }
}