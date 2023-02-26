export default function ToggleButton(props) {
  return (
    <div className="footer">
      <button className="toggleButton" onClick={props.handleClick}>
        {props.value}
      </button>
    </div>
  );
}
