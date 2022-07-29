import react from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModel.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onclick={props.onclick} />;
};
const ModelOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.content}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onclick}>Close</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onclick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay
          title={props.title}
          content={props.content}
          onclick={props.onclick}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModel;
