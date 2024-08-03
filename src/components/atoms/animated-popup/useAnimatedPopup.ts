import {useCallback, useRef} from 'react';

import {AnimatedPopupRef} from './index';

export const useAnimatedPopup = () => {
  const ref = useRef<AnimatedPopupRef>(null);

  const onOpen = useCallback(() => {
    ref.current?.open();
  }, []);

  const onClose = useCallback(() => {
    ref.current?.close();
  }, []);

  return {ref, onOpen, onClose};
};
