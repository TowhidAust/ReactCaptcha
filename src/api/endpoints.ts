import { config } from '@/config';

export const baseApiUrl = `${config.BASE_URL}`;
export const apiUrl = `${config.BASE_URL}/api/v1`;

export const mobileNumberVerifyEndpoint = '/verify/';
export const setPasswordEndpoint = '/set-password/';
export const tokenRefreshEndpoint = '/token/refresh/';
export const loginEndpoint = '/sign-in/';
export const loginOTPEndpoint = '/sign-in/verify-otp/';
export const getRolesEndpoint = '/my-roles/';
export const myAssociationsEndpoint = '/my-associations/';
export const myBasicProfileEndpoint = '/my-basic-profile/';
