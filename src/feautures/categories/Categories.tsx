import { memo, useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/UseTypedSelector";

import CategoriesFullScreen from "./CategoriesFullScreen";
import CategoriesMobile from "./CategoriesMobile";

interface IProps {
  window?: () => Window;
  mobile: boolean;
}

const Categories = ({ window, mobile }: IProps) => {
  const { getCategoriesThunk } = useActions();
  const { items, categoryId } = useTypedSelector(({ category }) => category);

  useEffect(() => {
    getCategoriesThunk();
  }, [categoryId]);

  return (
    <>
      {mobile ? (
        <CategoriesMobile categories={items} />
      ) : (
        <CategoriesFullScreen categories={items} />
      )}
    </>
  );
};

export default memo(Categories);
