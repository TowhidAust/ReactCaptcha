import { Modal } from 'antd';
import React from 'react';

type ModalPropsType = {
	title: any;
	handleOk: any; // TODO
	handleCancel: any; // TODO
	isModalOpen: boolean;
	children: any; // TODO
	closable: boolean;
	footer: any; // TODO
};
export default function CustomModal(props: ModalPropsType) {
	const {
		title,
		handleOk,
		handleCancel,
		isModalOpen,
		children,
		closable,
		footer,
	} = props;
	return (
		<Modal
			title={title}
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			closable={closable}
			width="656px"
			footer={footer}
		>
			{children}
		</Modal>
	);
}
