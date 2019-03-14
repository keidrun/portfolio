import React from 'react';

type Props = {
  id: string,
  name: string,
  title: string,
  children: any,
};

const Model = ({ id, name, title, children }: Props) => (
  <div
    className="modal fade"
    id={id}
    tabIndex="-1"
    role="dialog"
    aria-labelledby={name}
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id={name}>
            {title}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            type="button"
            className="my-btn my-btn--main-color btn"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Model;
