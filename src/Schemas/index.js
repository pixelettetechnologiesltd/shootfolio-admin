import * as Yup from "yup";

export const signinSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Your password is too short."),
});

export const addClubSchema = Yup.object({
  photoPath: Yup.mixed().required("Logo is required"),
  title: Yup.string().required("Title is required"),
  gameTypeId: Yup.string().required("Game Type is required"),
  symbol: Yup.string().required("Symbol is required"),
  status: Yup.string().required("Status is required"),
});

export const addGameTypeSchema = Yup.object({
  photoPath: Yup.mixed().required("Icon is required"),
  gameTitle: Yup.string().required("Game Title is required"),
  status: Yup.string().required("Status is required"),
});

export const addLeagueTypeSchema = Yup.object({
  gameTypeId: Yup.string().required("Game Type is required"),
  gameModeId: Yup.string().required("Game Mode is required"),
  leagueTitle: Yup.string().required("League Title is required"),
  status: Yup.string().required("Status is required"),
  investableBudget: Yup.string().required("Investment Budget is required"),
});

export const addGameModeSchema = Yup.object({
  gameType: Yup.string().required("Game Type is required"),
  modeTitle: Yup.string().required("Game Mode is required"),
  status: Yup.string().required("Status is required"),
  quiz: Yup.string().required("Quiz is required"),
  duration: Yup.string().required("Duration is required"),
});

export const editGameModeSchema = Yup.object({
  // gameType: Yup.string().required("Game Type is required"),
  modeTitle: Yup.string().required("Game Mode is required"),
  status: Yup.string().required("Status is required"),
  quiz: Yup.string().required("Quiz is required"),
  duration: Yup.string().required("Duration is required"),
});

export const addPortfolioSchema = Yup.object({
  club: Yup.string().required("Club is required"),
  coin: Yup.string().required("Coin is required"),
  quantity: Yup.number().required("quantity is required"),
});
