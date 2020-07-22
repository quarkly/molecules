import getDefaultKnobs from '../modules/knobs';
import defaults from './defaults';

export default () => ({
	...getDefaultKnobs(defaults),
});
