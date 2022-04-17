export interface IApiPokemonReponse {
  results: IPropInfo[],
  next: string,
  previous: string
}

export interface IPokemon {
  id: number,
  name: string,
  types: IType[],
  weight: number,
  abilities: IAbility[],
  moves: IPropInfo[],
  sprites: ISpritesInfo
}

export interface IPropInfo {
  name: string,
  url: string
}

export interface IType {
  type: IPropInfo
}

export interface IAbility {
  ability: IPropInfo
}

export interface ISpritesInfo {
  back_default: string | null,
  back_female: string | null,
  back_shiny: string | null,
  back_shiny_female: string | null,
  front_default: string | null,
  front_female: string | null,
  front_shiny: string | null,
  front_shiny_female: string | null
}
