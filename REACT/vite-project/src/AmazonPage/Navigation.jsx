import logo from "./assets/amazonlog.png";

function Navigation() {
  return(
    <div className="nav">
      <img src={logo} alt="Amazon Logo"style={{height: "50px",width: "auto"}} />
      <input placeholder="Search Amazon" />
      
    </div>
  )
}

export default Navigation;