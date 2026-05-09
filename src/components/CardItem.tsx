import MonitorIcon from "@mui/icons-material/Monitor";
import MovingIcon from "@mui/icons-material/Moving";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@mui/material";
import { colors } from "../styles/colors";

import type { CardProps } from "@mui/material";

interface CardDataProps extends CardProps {
    children?: React.ReactNode;
    cardId: number;
    icon: "desktop" | "fiscal" | "contabil";
    title: string;
    description: string;
}

const icones = {
    desktop: <MonitorIcon sx={{ color: colors.primary }} />,
    fiscal: <TextSnippetIcon sx={{ color: colors.primary }} />,
    contabil: <MovingIcon sx={{ color: colors.primary }} />,
};

export const CardItem = ({ cardId, icon, title, description, ...props }: CardDataProps) => {
    return (
        <Card
            key={cardId}
            sx={{
                backgroundColor: colors.bgCard,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                textAlign: "start",
                flexGrow: 1,
                color: colors.white,
                border: `2px solid ${colors.ebonyClay}`,
                ":hover": {
                    borderColor: colors.borderCard,
                },
                borderRadius: "12px",
                maxWidth: { xs: "100%", sm: "750px", md: "100%" },
                transition: "300ms",
            }}
            {...props}
        >
            <CardActionArea
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    p: 2,
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                    }}
                >
                    <Box
                        component="div"
                        sx={{
                            bgcolor: colors.terracota,
                            display: "inline-flex",
                            alignItems: "center",
                            borderRadius: "8px",
                            alignSelf: "flex-start",
                            p: 1,
                        }}
                    >
                        {icones[icon]}
                    </Box>

                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{
                            fontSize: "20px",
                            mt: 3,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: colors.steelBlue,
                            mt: 2,
                            fontSize: "16px",
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
