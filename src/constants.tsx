const BOWSER_MESSAGES = [
    "BWAAAHAAAAHAAAAA!!!"
];

const SEASHELL_IMAGE = "./styles/images/seashell2.png";
const CONE_IMAGE = "./styles/images/cone222.png";
const NEON_CIRLE_IMAGE = "./styles.images/neon_circle.png";
const NEON_X_IMAGE = "./styles.images/neon_X.png";

const BOARD_MAP = new Map<string, string>([
    ["(X, neon)", NEON_X_IMAGE],
    ["(O, neon)", NEON_CIRLE_IMAGE],
    ["(X, shell)", CONE_IMAGE],
    ["(O, shell)", SEASHELL_IMAGE],
]);

export { BOWSER_MESSAGES, BOARD_MAP }