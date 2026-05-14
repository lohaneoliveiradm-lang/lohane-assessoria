import { MainButton } from "../../../components/MainButton";
import { colors } from "../../../styles/colors";
import "./Hero.scss";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import LohaneDesktop from "../../../assets/lohane-assessoria-2.jpeg";

export const Hero = () => {
    return (
        <Box component="section" id="hero" className="hero">
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: {
                        xs: "40px 24px",
                        sm: "60px 48px",
                        md: "60px 24px",
                    },
                    gap: "40px",
                }}
                className="hero-container"
            >
                <Box className="hero-info">
                    <Typography
                        component="h6"
                        sx={{
                            textTransform: "uppercase",
                            color: colors.primary,
                            fontSize: "14px",
                            fontWeight: "bold",
                        }}
                    >
                        Contabilidade Moderna
                    </Typography>
                    <Typography
                        component="h1"
                        sx={{
                            fontWeight: "bold",
                            marginTop: "16px",
                            maxWidth: { xs: "350px", sm: "500px", md: "600px" },
                            fontSize: { xs: "36px", sm: "48px", md: "60px" },
                            lineHeight: { xs: "40px", sm: "56px", md: "60px" },
                        }}
                    >
                        Sua Contabilidade{" "}
                        <span className="contrast">Descomplicada</span>, Focada
                        no <span className="contrast">Crescimento</span>
                    </Typography>

                    <Typography
                        variant="body1"
                        component="p"
                        className="hero-info-description"
                        sx={{
                            mt: 3,
                            fontSize: "18px",
                            fontWeight: "400",
                            maxWidth: "500px",
                            color: colors.steelBlue,
                        }}
                    >
                        Transformamos números em estratégia. Soluções contábeis
                        digitais para empresas que querem crescer com segurança
                        e inteligência.
                    </Typography>

                    <Box sx={{ mt: 4 }} className="hero-buttons">
                        <Link
                            href="https://wa.me/5521974567004"
                            target="_blank"
                            rel="noopener"
                        >
                            <MainButton>Começar agora</MainButton>
                        </Link>
                        <Link href="#about">
                            <Button
                                variant="outlined"
                                sx={{
                                    color: colors.white,
                                    borderColor: colors.borderCard,
                                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                                    ":hover": {
                                        backgroundColor: colors.hoverButton,
                                    },
                                    textTransform: "none",
                                }}
                            >
                                Saber mais
                            </Button>
                        </Link>
                    </Box>
                </Box>

                <Box
                    className="hero-image-border"
                    sx={{ display: { xs: "none", md: "flex" } }}
                >
                    <Box
                        className="hero-image"
                        sx={{ bgcolor: colors.bgImage, borderRadius: "16px" }}
                    >
                        <img src={LohaneDesktop} alt="" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
