import { Button } from "react-bootstrap";

// custom made pagination for page navigation

interface PageButtonsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PageButtons = ({
  totalPages,
  currentPage,
  onPageChange,
}: PageButtonsProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1); // Generates an array of page numbers, covers any cases where page start to scale up or end up as 0 for some reason

  return (
    <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
      <Button
        variant="light"
        size="sm"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        style={{ borderRadius: "8px" }}
      >
        &lt;
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          size="sm"
          variant={page === currentPage ? "secondary" : "light"}
          onClick={() => onPageChange(page)}
          style={{
            borderRadius: "8px",
          }}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="light"
        size="sm"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        style={{ borderRadius: "8px" }}
      >
        &gt;
      </Button>
    </div>
  );
};

export default PageButtons;
