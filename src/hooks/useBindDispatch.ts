import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const useBindDispatch = (cb: any) => {
  const dispatch = useDispatch();
  const dispatched = useMemo(
    () => bindActionCreators(cb, dispatch),
    [dispatch, cb]
  );

  return dispatched;
};

export default useBindDispatch;
