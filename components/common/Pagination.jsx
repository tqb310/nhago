function PaginationItem({ index, active, setActive }) {
    return (
        <div
            className={
                'inline-block p-1 text-center mx-1 w-[30px] select-none cursor-pointer ' +
                (active
                    ? 'bg-primary-color text-white'
                    : 'text-primary-color hover:bg-gray-200 ')
            }
            onClick={() => setActive(index)}
        >
            {index + 1}
        </div>
    );
}

function Pagination({
    handleTurnPage,
    itemsPerPage,
    landingVisionIndex,
    page,
    length,
    handleVisiblePageItem,
    countOfPageVision = 10,
}) {
    return (
        <div className='mt-8 flex justify-center'>
            <div
                className={
                    'inline-block p-1 text-center mx-1 w-[30px] hover:bg-gray-200 text-primary-color select-none cursor-pointer ' +
                    (landingVisionIndex == 0 ? 'invisible' : '')
                }
                onClick={() => handleLandingVision(-1)}
            >
                «
            </div>
            {Array.from(
                new Array(
                    (length -
                        landingVisionIndex * countOfPageVision * itemsPerPage) /
                        itemsPerPage <
                    countOfPageVision
                        ? Math.ceil(
                              (length -
                                  landingVisionIndex *
                                      countOfPageVision *
                                      itemsPerPage) /
                                  itemsPerPage,
                          )
                        : countOfPageVision,
                ),
                (a, b) => (
                    <PaginationItem
                        key={b}
                        index={landingVisionIndex * countOfPageVision + b}
                        active={
                            landingVisionIndex * countOfPageVision + b == page
                        }
                        setActive={handleTurnPage}
                    />
                ),
            )}
            <div
                className={
                    'inline-block p-1 text-center mx-1 w-[30px] hover:bg-gray-200 text-primary-color select-none cursor-pointer ' +
                    ((length -
                        landingVisionIndex * countOfPageVision * itemsPerPage) /
                        itemsPerPage <
                    countOfPageVision
                        ? 'hidden'
                        : '')
                }
                onClick={() => handleVisiblePageItem(1)}
            >
                »
            </div>
        </div>
    );
}

export default Pagination;

