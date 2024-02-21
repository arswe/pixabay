import  Photo  from './Photo'

export default interface FetchPhotoResponse {
  total: number
  totalHits: number
  hits: Photo[]
}
