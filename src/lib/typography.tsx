
const enum TypographyTypesEnum
{
    h1 = "h1",
    h2 = "h2",
    p1 = "p1",
    p2 = "p2",
    p3 = "p3",
    t1 = "t1",
    t2 = "t2",
    t3 = "t3"
}

type TypographyTypes = keyof typeof TypographyTypesEnum

export const typographyClasses: {
    [key in TypographyTypes]: string
} = {
    h1: 'text-2xl font-bold',
    h2: 'text-xl font-bold',
    p1: 'text-base font-medium',
    p2: 'text-sm font-medium',
    p3: 'text-xs font-medium',
    t1: 'text-base font-light',
    t2: 'text-sm font-light',
    t3: 'text-xs font-light',
}
