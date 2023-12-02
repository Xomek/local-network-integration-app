import { useAppDispatch } from ".";
import { bindActionCreators } from "@reduxjs/toolkit";
import AllActions from "app/store/actions";

export const useActions = () => {
  const dispatch = useAppDispatch();

  return { ...bindActionCreators(AllActions, dispatch), dispatch };
};
