import React from "react";
import { createPortal } from "react-dom";

export class PortalModal extends React.Component {
  state = {
    isOpen: false,
  };
  toggleModalHendler() {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  }
  render() {
    const { isOpen } = this.state;

    function createModal(toggleModal) {
      return (
        <div>
          <p>This is modal</p>
          <button onClick={toggleModal}>Toggle modal</button>
        </div>
      );
    }

    return (
      <>
        <button onClick={this.toggleModalHendler.bind(this)}>
          Toggle modal
        </button>
        {isOpen &&
          createPortal(
            createModal(this.toggleModalHendler.bind(this)),
            document.getElementById("modals"),
          )}
      </>
    );
  }
}
