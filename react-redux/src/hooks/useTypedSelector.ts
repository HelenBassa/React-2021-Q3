import { createSelectorHook } from 'react-redux';
import { RootState } from '../store/store';

const useTypedSelector = createSelectorHook<RootState>();

export default useTypedSelector;
