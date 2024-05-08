import { styled } from "@mui/material";
import { InputBase} from "@mui/material"

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
      // padding: theme.spacing(1.4, 2),
    },
  }));
  export default StyledInputBase;