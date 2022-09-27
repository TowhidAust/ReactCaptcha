import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC_ROUTE } from './appRoutes';
import { RootState } from '@/redux/store';

export default function PrivateOutlet() {
	const { token } = useSelector((state: RootState) => state.auth);
	return token ? <Outlet /> : <Navigate to={PUBLIC_ROUTE.LANDING} replace />;
}
