import { Container } from "@muni/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useTheme } from "@mui/material";



const Header3 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(null);
    }

    const theme = useTheme()











    return (
        <Container>
            <Buttom
             id="basic-button"
                 aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={width:222,bgcolor:theme.palette.myColor.main,color:  theme.palette.text.secondary}


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


        </Container >
    )












        
    )
}
export default Header3;