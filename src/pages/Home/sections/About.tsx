import { Box, Container, Typography } from "@mui/material";
import { CardAbout } from "../../../components/CardAbout";
import { colors } from "../../../styles/colors";

export const About = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                minHeight: "400px",
                py: 8,
            }}
        >
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
                    "@media (max-width: 1040px)": {
                        flexDirection: "column",
                    },
                }}
            >
                <Box component="div" sx={{ width: "100%" }}>
                    <Typography
                        component="h6"
                        sx={{
                            textTransform: "uppercase",
                            color: colors.primary,
                            fontSize: "14px",
                            fontWeight: "bold",
                        }}
                    >
                        Sobre Nós
                    </Typography>

                    <Typography
                        component="h2"
                        sx={{
                            fontWeight: "bold",
                            mt: 1,
                            fontSize: { xs: "30px", sm: "48px", md: "36px" },
                            lineHeight: { xs: "40px", sm: "56px", md: "42px" },
                        }}
                    >
                        Mais que contabilidade,{" "}
                        <span className="contrast">
                            uma parceria estratégica
                        </span>
                    </Typography>

                    <Typography
                        variant="body1"
                        component="p"
                        className="hero-info-description"
                        sx={{
                            mt: 3,
                            fontSize: "18px",
                            fontWeight: "400",
                            color: colors.steelBlue,
                        }}
                    >
                        Possuímos 8 anos de experiência na área administrativa e estamos em constante desenvolvimento na área contábil, onde já atuamos profissionalmente. Ajudamos empresas a transformar
                        números em decisões inteligentes. Combinamos tecnologia
                        de ponta com atendimento humano para entregar uma
                        contabilidade transparente, ágil e orientada para
                        resultados.
                    </Typography>

                    <Typography
                        variant="body1"
                        component="p"
                        className="hero-info-description"
                        sx={{
                            mt: 3,
                            fontSize: "18px",
                            fontWeight: "400",
                            color: colors.steelBlue,
                        }}
                    >
                        Nossa missão é descomplicar a vida do empreendedor,
                        oferecendo soluções fiscais, tributárias e estratégicas
                        que liberam você para focar no que realmente importa: o
                        crescimento do seu negócio.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        width: "100%",
                    }}
                >
                    <CardAbout
                        description="Clientes Atendidos"
                        icon="desktop"
                        cardId={4}
                        title="+3.000"
                    />
                    <CardAbout
                        description="Anos de Experiência"
                        icon="fiscal"
                        cardId={4}
                        title="8"
                    />
                    <CardAbout
                        description="Satisfação dos Clientes"
                        icon="contabil"
                        cardId={4}
                        title="99,9%"
                    />
                </Box>
            </Container>
        </Box>
    );
};
