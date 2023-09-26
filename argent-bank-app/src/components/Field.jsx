import PropTypes from "prop-types";
import "../style/style.css"

export const FIELD_TYPES = {
  TEXT: "text",
  EMAIL: "email",
  PASSWORD: "password",
};

const Field = ({ type = FIELD_TYPES.TEXT, label, name, placeholder, isRequired }) => {
  let component;

  switch (type) {
    case FIELD_TYPES.TEXT:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          {...(isRequired ? { required: true } : {})}
        />
      );
      break;
    case FIELD_TYPES.EMAIL:
      component = (
        <input
          type="email"
          name={name}
          placeholder={placeholder}
          {...(isRequired ? { required: true } : {})}

        />
      );
      break;
    case FIELD_TYPES.PASSWORD:
      component = (
        <input
          type="password"
          name={name}
          placeholder={placeholder}
          {...(isRequired ? { required: true } : {})}
        />
      );
      break;
    default:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          {...(isRequired ? { required: true } : {})}
        />
      );
  }

  return (
    <div className="inputField">
      <label>{label}</label>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
};

Field.defaultProps = {
  label: "",
  placeholder: "",
  type: FIELD_TYPES.TEXT,
  name: "field-name",
  isRequired: false,
};

export default Field;