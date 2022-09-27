import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { RootState } from '@/redux/store';
import { apiUrl, mobileNumberVerifyEndpoint } from '@/api/endpoints';

// import { tokenReceived, loggedOut } from './authSlice';

const baseQuery = fetchBaseQuery({
	baseUrl: apiUrl,
	prepareHeaders: (headers, { getState }) => {
		const { token } = (getState() as RootState).auth;
		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	// TODO need to fix with refresh token when we found 401 error
	if (result.error && result.error.status === 401) {
		// try to get a new token
		const refreshResult = await baseQuery(
			mobileNumberVerifyEndpoint,
			api,
			extraOptions,
		);
		if (refreshResult.data) {
			// store the new token
			// api.dispatch(tokenReceived(refreshResult.data));
			// retry the initial query
			result = await baseQuery(args, api, extraOptions);
		} else {
			// api.dispatch(loggedOut());
		}
	}
	return result;
};

export const emptySplitApi = createApi({
	reducerPath: 'authAPi',
	baseQuery: baseQueryWithReauth,
	endpoints: () => ({}),
});
