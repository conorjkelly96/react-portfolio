import { Grid } from "@mui/material";
import { IntroCard } from "../../components/IntroCard";
import { MemojiCard } from "../../components/MemojiCard";

export const Home = () => {
  return (
    <Grid container spacing={4}>
      <IntroCard />
      <MemojiCard />
    </Grid>
  );
};
