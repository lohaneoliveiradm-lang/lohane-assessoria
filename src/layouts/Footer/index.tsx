import { Box, Container, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { colors } from "../../styles/colors";

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{ borderTop: `1px solid ${colors.dividerColor}` }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    padding: {
                        xs: "24px 24px",
                        sm: "24px 48px",
                        md: "24px 24px",
                    },
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box component="div" sx={{ textAlign: "left" }}>
                    <Typography
                        component="h3"
                        sx={{
                            fontSize: { md: "18px" },
                            fontWeight: "bold",
                        }}
                    >
                        Lohane <span className="contrast">Assessoria</span>
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            mt: 1,
                            fontSize: "14px",
                            fontWeight: "400",
                            color: colors.steelBlue,
                        }}
                    >
                        © {new Date().getFullYear()} Todos os direitos
                        reservados.
                    </Typography>
                </Box>
                <Box component="div" sx={{ display: "flex", gap: 2 }}>
                    <Link
                        href="https://www.instagram.com/lohaneassessoria/"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            color: colors.steelBlue,
                            ":hover": { color: colors.primary },
                            transition: "color 0.3s",
                        }}
                    >
                        <InstagramIcon />
                    </Link>

                    <Link
                        href="https://wa.me/5521974567004"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            color: colors.steelBlue,
                            ":hover": { color: colors.primary },
                            transition: "color 0.3s",
                        }}
                    >
                        <WhatsAppIcon />
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};
