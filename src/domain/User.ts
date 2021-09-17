import {Email, UniqueId, UserName} from "../types";

export type User = {
    id: UniqueId;
    name: UserName;
    email: Email;
};