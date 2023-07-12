import { ERole } from "../enums/role.enum";

export interface Auth {
    id: string;
    roles: ERole[];
}