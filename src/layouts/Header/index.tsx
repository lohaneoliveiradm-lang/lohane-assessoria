import { Box, Container, Link } from "@mui/material";
import "./index.scss";
import { MobileDrawer } from "./MobileDrawer";
import { MainButton } from "../../components/MainButton";
import { colors } from "../../styles/colors";

export const Header = () => {
    const navLinks = [
        { name: "Serviços", href: "#services" },
        { name: "Sobre", href: "#about" },
    ];

    return (
        <Box component="header" className="header"
        sx={{ borderBottom: `1px solid ${colors.dividerColor}` }}>
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: { xs: "12px 24px", sm: "12px 48px", md: "12px 24px" },
                }}
            >
                <a className="logo" href="#">
                    Lohane <span>Assessoria</span>
                </a>

                <nav className="nav-links">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <Link href="https://wa.me/5521974567004" target="_blank" rel="noopener">
                        <MainButton>Entre em contato</MainButton>
                    </Link>
                </nav>

                <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" } }>
                    <MobileDrawer />
                </Box>
            </Container>
        </Box>
    );
};
