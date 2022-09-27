import {
	Avatar,
	Badge,
	Button,
	Col,
	Dropdown,
	Layout,
	Menu,
	Row,
	Space,
	Tag,
} from 'antd';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	MessageOutlined,
	NotificationOutlined,
	DownOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '@/assets/avatar.svg';
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from '@/router/appRoutes';
import { logout } from '@/redux/authSlice';
import { RootState } from '@/redux/store';

const { Header } = Layout;
type TopBarPropsType = {
	isCollapsed: boolean;
	setIsCollapsed: Function;
};
function TopBar(props: TopBarPropsType) {
	const { isCollapsed, setIsCollapsed } = props;
	const { user } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const menu = (
		<Menu
			items={[
				{
					label: <Link to={PRIVATE_ROUTE.DOCTOR_PROFILE}>My Profile</Link>,
					key: '0',
				},
				{
					label: <Link to={PRIVATE_ROUTE.DOCTOR_PROFILE}>Change Password</Link>,
					key: '1',
				},
				{
					type: 'divider',
				},
				{
					label: 'Logout',
					key: '3',
					onClick: () => {
						dispatch(logout());
						navigate(PUBLIC_ROUTE.LANDING);
					},
				},
			]}
		/>
	);
	return (
		<Header className="white-bg" style={{ height: 'auto' }}>
			<Row gutter={16}>
				<Col lg={12}>
					{isCollapsed ? (
						<MenuUnfoldOutlined onClick={() => setIsCollapsed(!isCollapsed)} />
					) : (
						<MenuFoldOutlined onClick={() => setIsCollapsed(!isCollapsed)} />
					)}
				</Col>
				<Col lg={12}>
					<Row gutter={16} justify="end">
						<Col lg={8}>
							<Tag className="layout-bg font-weight-600 pl-4 pr-4 py-2 border-radius-20">
								10:37 PM • Aug 22, 2022
							</Tag>
						</Col>
						<Col lg={2}>
							<Badge count={2} color="#F97316" offset={[0, 20]}>
								<Avatar
									className="border-solid-1px white-bg"
									shape="circle"
									size="small"
									icon={<MessageOutlined className="fourth-font-color" />}
								/>
							</Badge>
						</Col>
						<Col lg={2}>
							<Badge count={2} color="#F97316" offset={[0, 20]}>
								<Avatar
									className="border-solid-1px white-bg"
									shape="circle"
									size="small"
									icon={<NotificationOutlined className="fourth-font-color" />}
								/>
							</Badge>
						</Col>
						<Col lg={2}>
							<Avatar src={avatar} shape="circle" size="large" />
						</Col>
						<Col lg={3}>
							<Dropdown overlay={menu} trigger={['click']}>
								<Button
									className="p-0 sixth-font-color font-weight-600"
									type="link"
									onClick={(e) => e.preventDefault()}
								>
									<Space>
										{user?.name || 'No Doctor'}
										<DownOutlined />
									</Space>
								</Button>
							</Dropdown>
						</Col>
					</Row>
				</Col>
			</Row>
		</Header>
	);
}

export default TopBar;
