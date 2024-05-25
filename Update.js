import React from "react";

function Update(props){
    return(
        <>
        <div className="m-3">
        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
            Task
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
           value={props.task}
          />
        </div>
        <br />

        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
          Description
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            value={props.description}
          />
        </div>
        <br />

        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
          Assigned To
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            value={props.assto}
          />
        </div>
        <br />

        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
          Assigned By
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            value={props.assby}
          />
        </div>
        <br />

        <button
          type="button"
          class="btn btn-secondary btn-lg"
        >
          Update
        </button>
        <br />
        </div>
        </>
    )
}

export default Update