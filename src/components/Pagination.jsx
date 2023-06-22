import { useContext } from "react";
import { CaracteresContext } from "../context/CaracteresContext";

export const Pagination = () => {

    const {totalResults, pages, actualPage, prevPage, nextPage, goToPage} = useContext(CaracteresContext)

  return (
    <>
      <div className="col-3 d-flex align-items-center">
        <b>Total Results:</b> {totalResults}
      </div>

      <div className="col-3 d-flex align-items-center">
        <b>Page: {actualPage} of </b>{pages}
      </div>

      <div className="col-3 d-flex align-items-center">
        <b>Go to page:</b>
        <select name="goTo" className="form-select w-auto" value={actualPage} data-type="goTo" onChange={(e)=> goToPage("", e)}>
          {
            Array.from(Array(pages).keys()).map((page)=>{
              return <option key={page + 1} value={page + 1}>{page + 1}</option>
            })
          }
        </select>
      </div>

      <div className="col-3 text-end">
        {prevPage && <button className="btn btn-success mx-2" data-type="prev" onClick={(e)=>goToPage(prevPage, e)}>Prev</button>}
        {nextPage && <button className="btn btn-success" data-type="next" onClick={(e)=>goToPage(nextPage, e)}>Next</button>}
      </div>
    </>
  );
};
