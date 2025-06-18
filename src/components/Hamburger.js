import {BiMenu} from "react-icons/bi";

const Hamburger = (props) => {
    const {open, setOpen} = props;
  return (
    <BiMenu onClick={() => setOpen(!open)} className="hamburger"/>
  );
};

export default Hamburger;
