import React from "react";

import ReactDom from "react-dom";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfrim} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfrim}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfrim={props.onConfrim} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfrim={props.onConfrim}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
