import { styled } from "@mui/material";

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2), // padding for adjusting magnigying glass position
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
export default SearchIconWrapper; 
