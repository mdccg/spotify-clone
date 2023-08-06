import ArtistType from './../types/ArtistType';
import MixType from './../types/MixType';

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

export const isArtist = (object: MixType | ArtistType): object is ArtistType => 'name' in object;