import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PUBLIC_ROUTE } from './appRoutes';
import * as element from './element';

const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'));

export default function AppRoutes() {
	const publicRoutes = [
		{
			path: PUBLIC_ROUTE.LANDING,
			component: element.CaptchaPage,
		},
	];
	return (
		<Suspense fallback={<Spin />}>
			<Router>
				<Routes>
					{publicRoutes.map((route) => (
						<Route
							key={Math.random()}
							path={route.path}
							element={<route.component />}
						/>
					))}

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Router>
		</Suspense>
	);
}
