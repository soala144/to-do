import PropTypes from "prop-types";

export function Header({ children }) {
  return <div>{children}</div>;
}

// Define prop types
Header.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is required and must be valid React nodes
};
