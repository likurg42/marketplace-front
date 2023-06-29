type Name = string;
type Path = string;

type Paths = {
  readonly [k: Name]: Path;
};

export const pathsPublic: Paths = {
  home: '/',
};

export const pathsPrivate: Paths = {
  accountSettings: '/account-settings',
};

export const paths = { ...pathsPrivate, ...pathsPublic };

export const checkPathMatch = (pathname: string, currentPaths: Paths) => {
  const allPaths = Object.values(currentPaths);
  const pathFirstSection = pathname.split('/')[1];

  return allPaths.some((path) => path.slice(1) === pathFirstSection);
};
