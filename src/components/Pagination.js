import React from 'react';

const Pagination = ({currentPage, setCurrentPage, totalPages}) => {    
    if(totalPages > 1) { 
        return (
            <div className="pagination">
                {currentPage !== 1 && (
                    <button
                    className='btn'
                    onClick={() => setCurrentPage(currentPage - 1)}>
                        {' < Prev'}
                    </button>                                
                )}    
                {currentPage - 2 > 1 && (
                    <>
                        <button
                        className='btn'
                        onClick={() => setCurrentPage(1)}>
                            1
                        </button>                                                                    
                        <span className="btn outlined">…</span>    
                    </>
                )}

                {[
                    currentPage - 2, 
                    currentPage - 1
                ].map((val, key) => val >= 1 && (
                    <button
                    className='btn'
                    onClick={() => setCurrentPage(val)}>
                        {val}
                    </button>                                                
                ))}  

                <span className="btn outlined">{currentPage}</span>
                {[
                    currentPage + 1, 
                    currentPage + 2
                ].map((val, key) => val <= totalPages && (
                    <button
                    className='btn'
                    onClick={() => setCurrentPage(val)}>
                        {val}
                    </button>
                ))}
                {currentPage + 2 < totalPages && (
                    <>
                    <span className="btn outlined">…</span>    
                    <button
                    className='btn'
                    onClick={() => setCurrentPage(1)}>
                        {totalPages}
                    </button>                                                                    
                    </>
                )}                                   
                
                {currentPage !== totalPages && (
                    <button 
                    className='btn'
                    onClick={() => setCurrentPage(currentPage + 1)}>
                    {'Next >'}
                    </button>                                                            
                )}
            </div>
        )
    }                    
}

export default Pagination;