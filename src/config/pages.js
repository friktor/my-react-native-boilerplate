/**
 * @providesModule configPages
 */

const makePage = (title, key) => ({ key, title })

export const homePage = makePage('Welcome to App!', 'home')
export const anotherPage = makePage('Welcome to @Another@ Page!', 'another')