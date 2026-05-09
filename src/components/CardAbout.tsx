import MovingIcon from "@mui/icons-material/Moving";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
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
    desktop: (
        <SupervisorAccountIcon
            sx={{ color: colors.primary, fontSize: "30px" }}
        />
    ),
    fiscal: (
        <WorkspacePremiumIcon
            sx={{ color: colors.primary, fontSize: "30px" }}
        />
    ),
    contabil: <MovingIcon sx={{ color: colors.primary, fontSize: "30px" }} />,
};

export const CardAbout = ({
    cardId,
    icon,
    title,
    description,
    ...props
}: CardDataProps) => {
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
                transition: "300ms",
            }}
            {...props}
        >
            <CardActionArea
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",

                        width: "100%",
                        flexGrow: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            justifyContent: "start",
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            component="div"
                            sx={{
                                bgcolor: colors.terracota,
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "8px",
                                p: 2,
                            }}
                        >
                            {icones[icon]}
                        </Box>

                        <Box>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{
                                    fontSize: "30px",
                                    fontWeight: "bold",
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: colors.steelBlue,
                                    fontSize: "16px",
                                }}
                            >
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
