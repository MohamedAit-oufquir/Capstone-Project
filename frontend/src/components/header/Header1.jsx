import React from 'react';

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  
    return(
    <div>

        <div>
            {theme.palette.mode === "light" ? (
                <IconButton
                    onClick={() => {
                        localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                        );
                        colorMode.toggleColorMode();
                    }}
                    color="inherit"
                >
                    <LightModeOutlinedIcon />
                </IconButton>
            ) : (
                <IconButton
                    onClick={() => {
                        localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                        );
                        colorMode.toggleColorMode();
                    }}
                    color="inherit"
                >
                    <DarkModeOutlinedIcon />
                </IconButton>
            )}
        </div>

    </div>
    )
}

export default Header1;