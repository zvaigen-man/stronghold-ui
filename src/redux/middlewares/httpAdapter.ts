import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { cloneDeep } from 'lodash';
import axios from 'axios';
import { getStore } from '../store';
import { ERole } from '../../models/enums/role.enum';

export enum MethodOption {
    POST = 'post',
    PUT = 'put',
    GET = 'get',
    DELETE = 'delete',
    PATCH = 'patch',
}

export class HttpClientService {

    post<T>(url: string, data: unknown, options: AxiosRequestConfig = {}): AxiosPromise<T> {
        return this.send({
            ...options,
            url,
            data,
            method: MethodOption.POST,
        });
    }

    put<T>(url: string, data: unknown, options: AxiosRequestConfig = {}): AxiosPromise<T> {
        return this.send({
            ...options,
            url,
            data,
            method: MethodOption.PUT,
        });
    }

    get<T>(url: string, options: AxiosRequestConfig = {}): AxiosPromise<T> {
        return this.send({
            ...options,
            url,
            method: MethodOption.GET,
        });
    }

    delete<T>(url: string, data: unknown, options: AxiosRequestConfig = {}): AxiosPromise<T> {
        return this.send({
            ...options,
            url,
            data,
            method: MethodOption.DELETE,
        });
    }

    patch<T>(url: string, data: unknown, options: AxiosRequestConfig = {}): AxiosPromise<T> {
        return this.send({
            ...options,
            url,
            data,
            method: MethodOption.PATCH,
        });
    }

    protected send<T>(httpOptions: AxiosRequestConfig): AxiosPromise<T> {
        const store = getStore();
        const state = store.getState();

        const isAdmin = setIsAdmin(state.authState.selectedAuth?.roles || [])
        httpOptions.headers = {
            // xid: state.authState.selectedAuth?.id || '',
            xid: 'e6f37a1c-14f6-4627-a006-107ab93c767c',
            xrole: JSON.stringify(state.authState.selectedAuth?.roles || []),
            xisadmin: `${isAdmin == true}`,
            ...httpOptions.headers
        };
        return axios(httpOptions);
    }

    private sanitizeOptions(config: AxiosRequestConfig): AxiosRequestConfig {
        const sanitizedConfig = cloneDeep(config);
        if (sanitizedConfig.headers?.Authorization) delete sanitizedConfig.headers.Authorization;
        return sanitizedConfig;
    }


}

function setIsAdmin(roles: ERole[]) {
    if (roles.includes(ERole.Supervisor)) {
        return true
    } else if (roles.includes(ERole.Citizen)) {
        return false
    }
}