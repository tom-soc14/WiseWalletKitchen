export default function DaySelector(props) {

    return (
        <>
        <div className="Orange">

        <p>Your week</p>
        <button data-id="0" onClick={(e) => props.handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          M
        </button>
        <button data-id="1" onClick={(e) => props.handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          T
        </button>
        <button data-id="2" onClick={(e) => props.handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          W
        </button>
        <button data-id="3" onClick={(e) => props.handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          T
        </button>
        <button data-id="4" onClick={(e) => props.handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          F
        </button>
        <button data-id="5" onClick={(e) => props.handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          S
        </button>
        <button data-id="6" onClick={(e) => props.handleRecipeChange(e.target.dataset.id)} className="SpanClass">
          S
        </button>
      </div>
        </>
    )
}