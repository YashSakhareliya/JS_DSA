const dominoPiling = (M, N) => {
    if (!Number.isInteger(M) || !Number.isInteger(N)) {
        throw new Error("Inputs must be integers");
    }
    
    if (M < 1 || N < 1 || M > 16 || N > 16) {
        throw new Error("Inputs must be between 1 and 16");
    }
    
    if (M > N) {
        throw new Error("M must be less than or equal to N");
    }

    return Math.floor((M * N) / 2);
}

export default dominoPiling;