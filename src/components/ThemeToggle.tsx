import useGlobalContext from "../hooks/useGlobalContext";

const ThemeToggle = () => {
  const { test } = useGlobalContext();
  console.log(test);
  return <h2>ThemeToggle</h2>;
};

export default ThemeToggle;
