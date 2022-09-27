import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ropanaLogo from '@/assets/logo.svg';

type MetaDataPropsType = {
	pageTitle: string;
};
function MetaData(props: MetaDataPropsType) {
	const { t } = useTranslation();
	const { pageTitle } = props;
	return (
		<Helmet>
			<title>{t(`${pageTitle}`)}</title>
			<link rel="icon" href={ropanaLogo} />
		</Helmet>
	);
}
MetaData.propTypes = {
	pageTitle: PropTypes.string,
};
export default MetaData;
