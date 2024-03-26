'use server'

import { GetAllMangasParams } from '@/types/manga'
import { getMangas } from '../service/getMangas';


export async function getFilteredMangas({ 
  query, 
  genre, 
  category, 
  sort
}: GetAllMangasParams) {
  try {
    let filteredManga = await getMangas();

    // keyword
    if (query) {
      filteredManga = filteredManga.filter(manga => manga.title.toLowerCase().includes(query.toLowerCase()));
    }

    // genre
    if (genre) {
      filteredManga = filteredManga.filter(manga => manga.genre.toLowerCase() === genre);
    }

    // category
    if (category) {
      filteredManga = filteredManga.filter(manga => manga.category.toLowerCase() === category);
    }

    // sorting
    if (sort === 'ascending') {
      filteredManga.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'descending') {
      filteredManga.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    return filteredManga

  } catch (error) {
    console.error(error);
    throw error;
  }
}