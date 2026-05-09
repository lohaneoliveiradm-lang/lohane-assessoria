import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { useState } from "react";
import { MainButton } from "../../components/MainButton";
import { colors } from "../../styles/colors";

export const MobileDrawer = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    const sectionLinks: Record<string, string> = {
        "Serviços": "#services",
        "Sobre": "#about",
    };

    const handleItemClick = () => {
        setOpen(false);
    };

    return (
        <>
            {/* O Botão Hambúrguer */}
            <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ display: { xs: "flex", md: "none" }, p: 0}}
            >
                <MenuIcon />
            </IconButton>

            {/* O Painel Lateral */}
            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: colors.bgCard,
                            color: colors.offWhite,
                            "& .MuiTypography-root": { color: colors.offWhite },
                        },
                    },
                }}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                >
                    <List>
                        {/* Botão de fechar */}
                        <ListItem component="button" onClick={handleItemClick}>
                            <CloseIcon sx={{ color: colors.primary }} />
                        </ListItem>
                        {/* Itens de navegação */}
                        {["Serviços", "Sobre"].map((text) => (
                            <ListItem key={text} disablePadding>
                                <a
                                    href={sectionLinks[text]}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                        width: "100%",
                                        display: "block",
                                        padding: "8px 16px",
                                    }}
                                    onClick={handleItemClick}
                                >
                                    <ListItemText primary={text} />
                                </a>
                            </ListItem>
                        ))}
                        <ListItem>
                            <MainButton onClick={handleItemClick}>Entre em contato</MainButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};
