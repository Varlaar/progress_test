import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessToken } from "../store/user/actions";
import { fetchBonus } from "../store/bonus/action";
import { Bonus } from "../components";
import { selectBonus } from "../store/bonus/selector";
import { selectUser } from "../store/user/selector";
import { Spinner } from "../components";

const BonusPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectBonus);
  const user = useSelector(selectUser);
  const initApp = async () => {
    try {
      const accessToken = await dispatch(fetchAccessToken());
      dispatch(fetchBonus(accessToken));
      console.log("aceeeeeeeeees", accessToken);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  useEffect(() => {
    initApp();
  }, []);
  return <>{isLoading || user.isLoading ? <Spinner /> : <Bonus />}</>;
};

export default BonusPage;
