import styled from 'styled-components';

export const SidebarWrapper = styled.div`
	.sidebar {
		z-index: 10000;
		width: 280px;
		flex: 0 0 280px;
		height: 100%;
		padding-top: 70px;
		transition: all 0.3s;
		border-right: 1px solid #e5e8f0;
		.ant-menu-inline .ant-menu-item {
			width: calc(100% - 8px);
			&:after {
				left: 0;
				right: auto;
			}
		}
		.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
			border-radius: 0 20px 20px 0;
		}

		&.ant-layout-sider-collapsed {
			@media only screen and (max-width: 767px) {
				width: 0;
				min-width: 0 !important;
				max-width: 0 !important;
				flex: 0 0 0 !important;
			}
		}

		&.ant-layout-sider-collapsed {
			.sidebar-menu {
				a {
					h5 {
						display: none;
					}
				}
			}
		}
	}

	@media only screen and (min-width: 768px) {
		.collapse-width {
			width: 0px;
		}
	}
`;
