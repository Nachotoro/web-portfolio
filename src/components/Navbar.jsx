const ArrowIcon = () => {
    return (
      <img src="./src/assets/arrow_outward_FILL0_wght400_GRAD0_opsz24 3.png" alt="Arrow Icon" />
    );
  };

function NavBar(){
    return(
        <div className="nav-bar">
        <ul>
            <li>
                <ArrowIcon/>
                <p>Projects</p>
            </li>
            <li>
                <ArrowIcon/>
                <p>Photo gallery</p>
            </li>
            <li>
                <ArrowIcon/>
                <p>Blog</p>
            </li>
        </ul>
        </div>
    )
}

export default NavBar;