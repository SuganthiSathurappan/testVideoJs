import { Navbar, Nav } from "react-bootstrap";

const NavbarForm = () => {
    return (
        <div>

            <Navbar className="navbar-border">
                <img
                    className="brand-image"
                    src='assets/logocopy.png' alt=""
                    width="100px"
                    height="100px"
                />

            </Navbar>
            {/* <div>{children}</div> */}
        </div>
    )
};

export default NavbarForm;