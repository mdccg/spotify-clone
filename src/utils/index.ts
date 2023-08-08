import ArtistType from './../types/ArtistType';

export const getGreetings = (): string => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'Bom dia';

  } else if (hour >= 12 && hour < 18) {
    return 'Boa tarde';

  } else {
    return 'Boa noite';

  }
}

export const isArtist = (object: any | ArtistType): object is ArtistType => 'name' in object;

export const divideArray = (inputArray: any[], chunkSize: number) => {
  const dividedArray = [];
  
  for (let i = 0; i < inputArray.length; i += chunkSize) {
    dividedArray.push(inputArray.slice(i, i + chunkSize));
  }

  return dividedArray;
}