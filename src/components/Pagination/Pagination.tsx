import React, { FC, useState } from "react";
import cn from "classnames/bind";
import styles from "./Pagination.scss";

type PaginationType = {
  page: number | undefined;
  pages: number[];
  theme: "dark" | "light";
  changePage: () => void;
};

const Pagination: FC<PaginationType> = ({ pages, theme }) => {
  const [page, setPage] = useState(1);

  const changePage = (p: number) => {
    setPage(p);
  };
  const cx = cn.bind(styles);
  return (
    <div className={cx("pagination", theme)}>
      <div
        className="pagination__arrow"
        onClick={() => changePage(page === 1 ? page : page - 1)}>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.68774 0.283006C7.51288 0.0692831 7.19787 0.037782 6.98415 0.212646L0.384147 5.61265C0.268079 5.70761 0.200766 5.84966 0.200766 5.99962C0.200766 6.14959 0.268079 6.29164 0.384147 6.3866L6.98415 11.7866C7.19787 11.9615 7.51288 11.93 7.68774 11.7162C7.86261 11.5025 7.83111 11.1875 7.61739 11.0126L1.49036 5.99962L7.61739 0.986603C7.83111 0.811739 7.86261 0.496728 7.68774 0.283006Z"
            fill="#DEDEDE"
          />
        </svg>
      </div>

      <button
        onClick={() => changePage(1)}
        className={cx("pagination__item", {
          pagination__item_current: page === 1,
        })}>
        1
      </button>
      {page > 3 && pages.length > 5 ? (
        <div className="pagination__separator">...</div>
      ) : (
        ""
      )}
      {(page === pages.length - 1 || page === pages.length) &&
      pages.length > 4 ? (
        <button
          onClick={() => changePage(pages.length - 3)}
          className={cx("pagination__item")}>
          {pages.length - 3}
        </button>
      ) : (
        ""
      )}
      {page === pages.length && pages.length > 3 ? (
        <button
          onClick={() => changePage(pages.length - 3)}
          className={cx("pagination__item")}>
          {pages.length - 2}
        </button>
      ) : (
        ""
      )}
      {page > 2 ? (
        <button
          onClick={() => changePage(page === 1 ? page : page - 1)}
          className={cx("pagination__item")}>
          {page - 1}
        </button>
      ) : (
        ""
      )}

      {page !== 1 && page !== pages.length ? (
        <button
          onClick={() => changePage(page)}
          className={cx("pagination__item", "pagination__item_current")}>
          {page}
        </button>
      ) : (
        ""
      )}
      {page < pages.length - 1 ? (
        <button
          onClick={() => changePage(page === pages.length ? page : page + 1)}
          className={cx("pagination__item")}>
          {page + 1}
        </button>
      ) : (
        ""
      )}

      {page === 1 && pages.length > 3 ? (
        <button
          onClick={() => changePage(page + 2)}
          className={cx("pagination__item")}>
          {page + 2}
        </button>
      ) : (
        ""
      )}
      {(page === 1 || page === 2) && pages.length > 4 ? (
        <button
          onClick={() => changePage(4)}
          className={cx("pagination__item")}>
          {4}
        </button>
      ) : (
        ""
      )}

      {page < pages.length - 2 && pages.length > 5 ? (
        <div className="pagination__separator">...</div>
      ) : (
        ""
      )}

      <button
        onClick={() => changePage(pages.length)}
        className={cx("pagination__item", {
          pagination__item_current: pages.length === page,
        })}>
        {pages.length}
      </button>
      <div
        className="pagination__arrow"
        onClick={() => changePage(page === pages.length ? page : page + 1)}>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.68774 0.283006C7.51288 0.0692831 7.19787 0.037782 6.98415 0.212646L0.384147 5.61265C0.268079 5.70761 0.200766 5.84966 0.200766 5.99962C0.200766 6.14959 0.268079 6.29164 0.384147 6.3866L6.98415 11.7866C7.19787 11.9615 7.51288 11.93 7.68774 11.7162C7.86261 11.5025 7.83111 11.1875 7.61739 11.0126L1.49036 5.99962L7.61739 0.986603C7.83111 0.811739 7.86261 0.496728 7.68774 0.283006Z"
            fill="#DEDEDE"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
