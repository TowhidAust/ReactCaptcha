import { Col, Layout, Menu, Row, Tag } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	DashboardOutlined,
	AccountBookOutlined,
	ProjectOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { SidebarWrapper } from './styles';
import logo from '@/assets/logo.svg';
import { PRIVATE_ROUTE } from '@/router/appRoutes';
import { RootState } from '@/redux/store';
import { removeUnderscore } from '@/helper';

const { Sider } = Layout;
type SideBarPropsType = {
	isCollapsed: boolean;
};
function SideBar(props: SideBarPropsType) {
	const { isCollapsed } = props;
	const { selectedRole } = useSelector((state: RootState) => state.auth);
	const location = useLocation();
	const navigate = useNavigate();
	const handleMenuItemClick = (value: any) => {
		navigate(value?.key);
	};
	return (
		<SidebarWrapper style={{ height: '100vh' }}>
			<Sider
				className="layout-bg"
				width={240}
				collapsed={isCollapsed}
				// theme="light"
				style={{
					overflow: 'auto',
					height: '100vh',
				}}
			>
				<Row className="logo p-3" align="bottom">
					<Col>
						<img src={logo} alt="logo" style={{ width: '100%' }} />
					</Col>
					<Col>
						<Tag className="ml-1" color="#004282">
							{removeUnderscore(selectedRole)}
						</Tag>
					</Col>
				</Row>
				<Menu
					className="mt-5 custom-side-bar layout-bg"
					onClick={handleMenuItemClick}
					mode="inline"
					theme="dark"
					defaultSelectedKeys={[location?.pathname]}
					items={[
						{
							label: <div style={{ fontWeight: '600' }}> Dashboard </div>,
							key: PRIVATE_ROUTE.DOCTOR_DASHBOARD,
							icon: <DashboardOutlined style={{ fontSize: '18px' }} />,
						},
						{
							label: <div style={{ fontWeight: '600' }}>My Bookings</div>,
							key: PRIVATE_ROUTE.DOCTOR_BOOKINGS,
							icon: <AccountBookOutlined style={{ fontSize: '18px' }} />,
						},
						{
							label: <div style={{ fontWeight: '600' }}>Set Schedule</div>,
							key: PRIVATE_ROUTE.DOCTOR_SET_SCHEDULE,
							icon: <ProjectOutlined style={{ fontSize: '18px' }} />,
						},
					]}
				/>
			</Sider>
		</SidebarWrapper>
	);
}

export default SideBar;
