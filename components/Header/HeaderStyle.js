import { makeStyles } from '@material-ui/core/styles';

export const headerStyle = makeStyles((theme) => ({
	header: {
		height: '250px',
	},
	siteTitle: {
		// mixBlendMode: 'difference',
	},
	titleContainer: {
		overflow: 'hidden',
		display: 'block',
		position: 'fixed',
		top: '30px',
		left: '30px',
		zIndex: '99999',
		mixBlendMode: 'difference',
	},
	subTitle: {
		fontSize: '40px',
		color: '#fff',
		mixBlendMode: 'difference',
	},
	subTitleContainer: {
		overflow: 'hidden',
		display: 'block',
		position: 'absolute',
		top: '180px',
		left: '30px',
	},
	smallLogo: {
		fontSize: '30px',
		mixBlendMode: 'difference',
		color: 'white',
	},
}));
