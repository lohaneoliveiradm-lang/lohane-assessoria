import { Button } from "@mui/material";
import { colors } from "../styles/colors";


import type { ButtonProps } from "@mui/material";

interface MainButtonProps extends ButtonProps {
    children: React.ReactNode;
}

export const MainButton = ({ children, ...props }: MainButtonProps) => {
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: colors.quaternary,
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                textTransform: "none",
                "&:hover": {
                    backgroundColor: colors.tertiary,
                },
            }}
            {...props}
        >
            {children}
        </Button>
    );
};
