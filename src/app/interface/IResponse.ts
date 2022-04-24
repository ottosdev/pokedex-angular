export interface IResponse {
  count: number;
  next: string;
  results: IResults[];
}

interface IResults {
  name: string;
  url: string;
}

export interface IPokeProps {
  id: number;
  name: string;
  pokeTypes: string[];
  pokeStatsPower: number[];
  pokeStatsName: string[];
  types: IPokeType[];
  stats: IPokeStats[];
  abilities: IPokeAbilities[]
}

export interface IPokeType {
  type: {
    name: string
  }
}

export interface IPokeStats {
  base_stat: number;
  stat: {
    name: string
  }
}

export interface IPokeAbilities{
  ability: {
    name: string;
  }
}
