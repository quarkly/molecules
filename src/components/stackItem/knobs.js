import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default () => ({
	...getDefaultKnobs(defaults),
});
