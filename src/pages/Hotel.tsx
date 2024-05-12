import Carousel from '@/components/hotel/Carousel'
import Contents from '@/components/hotel/Contents'
import useHotel from '@/components/hotel/hooks/useHotel'
import Rooms from '@/components/hotel/Rooms'
import Top from '@/components/shared/Top'
import Map from '@components/hotel/Map'
import { useParams } from 'react-router-dom'

const HotelPage = () => {
  const { id } = useParams() as { id: string }

  const { isLoading, data } = useHotel({ id })

  if (data == null || isLoading) {
    return <div>Loading...</div>
  }

  const { name, comment, images, contents, location } = data

  return (
    <div>
      <Top title={name} subTitle={comment} />
      <Carousel images={images} />
      <Rooms hotelId={id} />
      <Contents contents={contents} />
      <Map location={location} />
    </div>
  )
}

export default HotelPage
