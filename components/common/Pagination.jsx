import Link from 'next/link';

function PaginationItem({ pageLabel, active }) {
    return (
        <Link href={'/tin-tuc?p=' + pageLabel}>
            <a
                className={
                    'inline-block p-1 text-center mx-1 w-[30px] select-none cursor-pointer ' +
                    (active
                        ? 'bg-primary-color text-white'
                        : 'text-primary-color hover:bg-gray-200 ')
                }
            >
                {pageLabel}
            </a>
        </Link>
    );
}

function Pagination({
    itemsPerPage,
    page,
    visibleLabelSize,
    dataSize,
    pathname,
}) {
    const startPageLabel = page - (page % visibleLabelSize);

    let actualVisibleLabelSize = 1,
        isNextSeries =
            dataSize - startPageLabel * itemsPerPage >
            visibleLabelSize * itemsPerPage;

    if (isNextSeries) {
        actualVisibleLabelSize = visibleLabelSize;
    } else {
        actualVisibleLabelSize = Math.ceil(
            (dataSize - startPageLabel * itemsPerPage) / itemsPerPage,
        );
    }

    const visibleLabel = Array.from(
        new Array(Math.max(actualVisibleLabelSize, 0)),
        (_, index) => startPageLabel + index + 1,
    );
    return (
        <div className='mt-8 flex justify-center'>
            {startPageLabel !== 0 && actualVisibleLabelSize > 0 && (
                <Link
                    href={`${pathname}?p=${
                        startPageLabel - visibleLabelSize + 1
                    }`}
                >
                    <a
                        className={
                            'inline-block p-1 text-center mx-1 w-[30px] hover:bg-gray-200 text-primary-color select-none cursor-pointer '
                        }
                    >
                        «
                    </a>
                </Link>
            )}
            {visibleLabel &&
                visibleLabel.map((pageLabel, index) => (
                    <PaginationItem
                        key={index}
                        pageLabel={pageLabel}
                        active={pageLabel == page}
                    />
                ))}
            {isNextSeries && (
                <Link
                    href={`${pathname}?p=${
                        startPageLabel + visibleLabelSize + 1
                    }`}
                >
                    <a
                        className={
                            'inline-block p-1 text-center mx-1 w-[30px] hover:bg-gray-200 text-primary-color select-none cursor-pointer '
                        }
                    >
                        »
                    </a>
                </Link>
            )}
        </div>
    );
}

export default Pagination;

