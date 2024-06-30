import Pagination from '@mui/material/Pagination';
import './style.css'

 const PaginationComponent = ({page, handlePageChange}) => {
  console.log("PaginationComponent rendered with page:", page);
  return (
    <div className='pagination'>
      {/* <Pagination count={10} showFirstButton showLastButton /> */}
      <Pagination 
      count={10} 
      page={page} 
      onChange = {(event, value) => handlePageChange(event, value)}
       sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--orange) !important",
            color: "#fff !important",
            borderColor: "var(--orange) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          }
        }}
      />
    </div>
  );
}

export default PaginationComponent;