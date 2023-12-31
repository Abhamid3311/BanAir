import { useState, useEffect, memo } from "react";
import { usePaginationPages } from "./usePaginationPages";

function Pagination({ gotoPage, length, pageSize, setPageSize }) {
    const [perPage, setPerPage] = useState(pageSize);

    const {
        canGo,
        currentPage,
        pages,
        goTo,
        goNext,
        goPrev
    } = usePaginationPages({
        gotoPage,
        length,
        pageSize
    });

    useEffect(() => {
        setPageSize(Number(perPage));
    }, [perPage, setPageSize]);

    return (
        <div className="flex flex-col lg:flex-row  items-center justify-center lg:justify-between mt-3 text-secondary">
            <span>Show
                <select
                    className="px-2 py-[6px] border rounded-md w-30 bg-mainBg mx-2"
                    value={pageSize}
                    onChange={(e) => setPerPage(e.target.value)}
                >
                    {[10, 15, 20, 25, 30].map((pageSize) => (
                        <option className="py-2" value={pageSize} key={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
                entries
            </span>

            <div className="m-4 flex items-center justify-center">
                <button
                    onClick={goPrev}
                    disabled={!canGo.previous}
                    className="m-1 px-2 py-1 border rounded-md bg-white hover:bg-primary hover:text-white"
                >
                    <p>Previous</p>
                </button>
                {pages.map((page, i) => (
                    <button
                        onClick={() => goTo(page)}
                        key={i}

                        className={`m-1 px-3 py-1 border rounded-md ${currentPage === page ? "bg-primary text-white" : "bg-mainBg text-secondary"} hover:bg-primary hover:text-white`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={goNext}
                    disabled={!canGo.next}
                    className="m-1 px-2 py-1 border rounded-md bg-white hover:bg-primary hover:text-white"
                >
                    <p>Next</p>
                </button>



            </div>
        </div>

    );
}

export default memo(Pagination);