import defaults from './defaults';
import getDefaultKnobs from '../modules/knobs';

export default (props = {}) => ({
    ...getDefaultKnobs(defaults),
});
