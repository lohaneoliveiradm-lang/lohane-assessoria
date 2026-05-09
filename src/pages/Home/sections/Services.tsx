import { Box, Container, Typography } from "@mui/material";
import { CardItem } from "../../../components/CardItem";
import { colors } from "../../../styles/colors";

export const Services = () => {
    return (
        <Box component="section" id="services">
            <Container
                maxWidth="lg"
                sx={{
                    padding: {
                        xs: "40px 24px",
                        sm: "60px 48px",
                        md: "60px 24px",
                    },
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                className="hero-container"
            >
                <Typography
                    component="h6"
                    sx={{
                        textTransform: "uppercase",
                        color: colors.primary,
                        fontSize: "14px",
                        fontWeight: "bold",
                    }}
                >
                    Nossos Serviços
                </Typography>

                <Typography
                    component="h2"
                    sx={{
                        fontWeight: "bold",
                        marginTop: "4px",
                        maxWidth: { xs: "450px", sm: "500px", md: "800px" },
                        fontSize: { xs: "30px", sm: "48px", md: "36px" },
                        lineHeight: { xs: "40px", sm: "56px", md: "42px" },
                    }}
                >
                    Soluções sob medida para o seu negócio
                </Typography>
                <Box
                    sx={{
                        mt: 4,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: { xs: "center", md: "stretch" },
                        flexDirection: { xs: "column", md: "row" },
                        gap: 4,
                    }}
                    className="services-cards"
                >
                    <CardItem
                        cardId={1}
                        icon="desktop"
                        title="Contabilidade Digital"
                        description="Processos 100% online com dashboards. Acompanhe suas finanças de qualquer lugar."
                    />
                    <CardItem
                        cardId={2}
                        icon="fiscal"
                        title="Gestão Fiscal"
                        description="Cumprimento de todas as obrigações fiscais com automação inteligente e sem burocracia."
                    />
                    <CardItem
                        cardId={3}
                        icon="contabil"
                        title="Consultoria Estratégica"
                        description="Planejamento financeiro personalizado para maximizar seus resultados e reduzir custos."
                    />
                </Box>
            </Container>
        </Box>
    );
};
