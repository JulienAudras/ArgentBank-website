import PropTypes from "prop-types";

import "../style/style.css";

export const BUTTON_TYPES = {
  SUBMIT: 1,
  PRESSABLE: 2
};

const Button = ({ title, onClick, type, disabled, className, children }) => {
  switch (type) {
    case BUTTON_TYPES.SUBMIT:
      return (
        <input
          disabled={disabled}
          className={className}
          type="submit"
          value={children}
          onClick={onClick}
          title={title}
        />
      );
      case BUTTON_TYPES.GREEN:
      return (
        <button
          type=""
          disabled={disabled}
          className={className}
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
    case BUTTON_TYPES.PRESSABLE:
      return (
        <button
          type=""
          disabled={disabled}
          className={className}
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type="button"
          disabled={disabled}
          className={className}
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
  }
};

// eslint-disable-next-line react/no-typos
Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.number,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
Button.defaultProps = {
  disabled: false,
  onClick: () => null,
  type: BUTTON_TYPES.DEFAULT,
  title: "",
  children: null,
  cursor: "pointer"
}

export default Button;
