import PropTypes from "prop-types";
export default function Header({ children }) {
  return (
    <div>
      {children} <p>Soala & Temitayo</p>
    </div>
  );
}

// Define prop types
Header.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is required and must be valid React nodes
};
