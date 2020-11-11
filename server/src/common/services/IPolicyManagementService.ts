import { Logger } from "winston";
import { GetPolicyByIdRequest } from "../models/PolicyManagementService/GetPolicyById/GetPolicyByIdRequest";
import { Policy } from "../../../frontend/src/types/Policy/Policy";

export default interface IPolicyManagementService {
    logger: Logger,
    getPolicy: (request: GetPolicyByIdRequest) => Promise<Policy>,
    getCurrentPolicy: (getCurrentPolicyUrl: string) => Promise<Policy>
}