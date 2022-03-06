export default function ButtonsPaginate(props) {
  return (
    <>
      {props.page > 1 ? (
        <button
          type="button"
          class="btn btn-dark"
          onClick={props.previous}
          id="btnPreviousPage"
        >
          Previous
        </button>
      ) : (
        ""
      )}
      {props.countProd - props.page * props.limit > 0 ? (
        <button
          type="button"
          class="btn btn-dark"
          onClick={props.next}
          id="btnNextPage"
        >
          Next
        </button>
      ) : (
        ""
      )}
    </>
  );
}
