export interface IUserInput{
  category:string,
  author:string,
  userQuote:string
}

export interface IApiQuotes{
  [id:string]:string
}

export interface IQuote extends IUserInput{
  id:string
}

export interface ICategories{
  [categories:string]:string
}