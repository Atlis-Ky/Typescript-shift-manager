import React from 'react';
import { Button } from 'react-bootstrap';

interface PageButtonsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PageButtons: React.FC<PageButtonsProps> = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
      {/* Previous Arrow */}
      <Button
        variant="light"
        size="sm"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        style={{ borderRadius: '8px' }}
      >
        &lt;
      </Button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <Button
          key={page}
          size="sm"
          variant={page === currentPage ? 'secondary' : 'light'}
          
          onClick={() => onPageChange(page)}
          style={{
            borderRadius: '8px',
          }}
        >
          {page}
        </Button>
      ))}

      {/* Next Arrow */}
      <Button
        variant="light"
        size="sm"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        style={{ borderRadius: '8px' }}
      >
        &gt;
      </Button>
    </div>
  );
};

export default PageButtons;