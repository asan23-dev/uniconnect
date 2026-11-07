// Distinct real photography for the community cards. Pexels photos are free to use.
const campusPhotos = {
  hero: 'https://images.pexels.com/photos/6146973/pexels-photo-6146973.jpeg?auto=compress&cs=tinysrgb&w=1400',
  tech: 'https://images.pexels.com/photos/6146987/pexels-photo-6146987.jpeg?auto=compress&cs=tinysrgb&w=1000',
  psychology: 'https://images.pexels.com/photos/5940716/pexels-photo-5940716.jpeg?auto=compress&cs=tinysrgb&w=1000',
  chess: 'https://stgeorgesinternational.static.amais.com/Cologne_Home_Key_Facts_001-665-optimized.webp?version=638603681464400000&version=638603684089200000',
  entrepreneurship: 'https://images.pexels.com/photos/6238170/pexels-photo-6238170.jpeg?auto=compress&cs=tinysrgb&w=1000',
  music: 'https://images.pexels.com/photos/8198162/pexels-photo-8198162.jpeg?auto=compress&cs=tinysrgb&w=1000',
  arts: 'https://images.pexels.com/photos/5940828/pexels-photo-5940828.jpeg?auto=compress&cs=tinysrgb&w=1000',
  sports: 'https://images.pexels.com/photos/159515/basketball-dunk-blue-game-159515.jpeg?auto=compress&cs=tinysrgb&w=1000',
  campus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/University_Students_in_the_class.jpg/1024px-University_Students_in_the_class.jpg',
}

const communityPhoto = c => {
  const name = c.name.toLowerCase()
  if (name.includes('tech') || name.includes('comput')) return campusPhotos.tech
  if (name.includes('psychology')) return campusPhotos.psychology
  if (name.includes('chess')) return campusPhotos.chess
  if (name.includes('entrepreneur')) return campusPhotos.entrepreneurship
  if (name.includes('music') || name.includes('sound')) return campusPhotos.music
  if (name.includes('creative') || name.includes('art')) return campusPhotos.arts
  if (name.includes('sport')) return campusPhotos.sports
  if (name.includes('queer') || name.includes('allied')) return campusPhotos.campus
  return campusPhotos.study || campusPhotos.campus
}

export {campusPhotos, communityPhoto}
