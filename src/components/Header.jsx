import PropTypes from "prop-types";
export default function Header({ children }) {
  return <header>{children}</header>;
}

// Define prop types
Header.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is required and must be valid React nodes
};
