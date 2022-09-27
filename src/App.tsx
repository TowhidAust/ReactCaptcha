import { HelmetProvider } from 'react-helmet-async';
import GlobalStyle from './styles/globalStyle';
import './styles/less/App.less';
import AppRoutes from './router';

function App() {
	return (
		<HelmetProvider>
			<>
				<GlobalStyle />
				<AppRoutes />
			</>
		</HelmetProvider>
	);
}

export default App;
