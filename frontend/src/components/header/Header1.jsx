import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";


const Header1 = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box sx={{
            bgcolor: "#2B3445",
            py: "4px",
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
        }}

        >
            <Container>
                <Stack direction={"row"} alignItems={"center"}>
                    <Typography
                        sx={{
                            mr: 2,
                            p: "4px 10px",
                            bgcolor: "#D23F57",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#fff",
                        }}
                        variant="body2"
                    >
                        HOT
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "#fff",
                        }}
                        variant="body2"
                    >
                        Free Express Shipping
                    </Typography>

                    <Box flexGrow={1} />








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
                                <LightModeOutlined />
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
                                <DarkModeOutlined />
                            </IconButton>
                        )}
                    </div>
           
           
           
           
           
                </Box>
                )
}

                export default Header1;