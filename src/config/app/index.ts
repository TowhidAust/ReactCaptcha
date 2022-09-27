const defaultConfig = {
	SITENAME: 'ROPANA',
	DEFAULT_LANGUAGE: 'english',
	DEFAULT_COUNTRY_CODE: '880',
	SENTRY_DSN: import.meta.env.VITE_APP_SENTRY_DSN,
	BASE_URL: import.meta.env.VITE_APP_BASE_URL,
	BACKEND_URL: import.meta.env.VITE_APP_BACKEND_URL,
	ENVIRONMENT: import.meta.env.VITE_APP_ENVIRONMENT,
};

export default defaultConfig;
