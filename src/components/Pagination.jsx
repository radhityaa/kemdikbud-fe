import React from 'react'
import ArrowLeftPaginate from '../assets/icons/ArrowLeftPaginate'
import ArrowRightPatinate from '../assets/icons/ArrowRightPatinate'

export default function Pagination() {
    return (
        <>
            <div className="flex items-center justify-center gap-1 pt-16">
                {/* NOTE - Previous Button */}
                <button className="flex items-center justify-center h-10 w-10 btn-paginate">
                    {/* NOTE - Previous Icon */}
                    <ArrowLeftPaginate />
                </button>

                {/* NOTE - Number Buttons */}
                {/* NOTE - Active Page */}
                <button className="flex items-center justify-center h-10 w-10 mx-1 active-page-paginate rounded-full">
                    1
                </button>

                {/* NOTE - Other Pages */}
                <button className="flex items-center justify-center h-10 w-10 mx-1 other-page-paginate">
                    2
                </button>
                <button className="flex items-center justify-center h-10 w-10 mx-1 other-page-paginate">
                    3
                </button>
                {/* NOTE - Add more buttons as needed for other pages */}

                {/* NOTE - Next Button */}
                <button className="flex items-center justify-center h-10 w-10 btn-paginate">
                    {/* NOTE - Next Icon */}
                    <ArrowRightPatinate />
                </button>
            </div>

        </>
    )
}
