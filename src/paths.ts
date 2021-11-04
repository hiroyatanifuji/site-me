type Resources<T extends string> = T extends `${infer R1}/${infer R2}` ? R1 | Resources<R2> : T;
type ParamsKeys<T extends string> = T extends `[${infer P}]` ? P : never;
type Params<T extends string> = {[K in ParamsKeys<Resources<T>>]: string};

declare const nominative: unique symbol;
export type Path = string & { [nominative]: never };

const createPathGenerator = <T extends string>(path: T): (params: Params<T>) => Path => {
  return (params: Params<typeof path>) => {
    return path.split('/').map(resource => {
      return resource.replace(/^\[(.*)\]$/, (value) => {
        const paramsKey = value.slice(1, resource.length - 1) as keyof typeof params;
        return params[paramsKey];
      });
    }).join('/') as Path;
  }
}

const Paths = {
  TOP: createPathGenerator('/'),
  ABOUT: createPathGenerator('/about'),
  POSTS: createPathGenerator('/posts'),
  POST: createPathGenerator(`/posts/[post-id]`),
  WORKS: createPathGenerator(`/works`),
  WORK: createPathGenerator(`/works/[work-id]`),
} as const;

export default Paths;