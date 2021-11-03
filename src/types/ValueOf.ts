type ValueOf<T extends Record<string, unknown>> = T[keyof T];

export default ValueOf;
