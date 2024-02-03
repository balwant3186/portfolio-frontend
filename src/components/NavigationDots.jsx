import { menuItems } from "./Navbar/Navbar";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {menuItems.map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313bac" } : {}}
        />
      ))}
    </div>
  );
};
export default NavigationDots;
