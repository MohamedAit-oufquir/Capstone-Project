import { Container } from "@muni/material";




const Header3 = ()=> {
    const [anchorEl, setAnchorEl]= useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(null);
    }
    return (
        
        <Container>
            <Buttom

                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                >
            </Buttom>
            <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": 'basic-button'

          }}
          >
            <menuItem onClick={handleClose}>profile</menuItem>
            <MenuItem onClick ={handleClose}>My Account</MenuItem>
            <MenuItem onClick = {handleClose}>Logout</MenuItem>
          </Menu>


        </Container>
    )












        
    )
}
export default Header3;