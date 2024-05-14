import Button from '@/components/shared/Button'
import Flex from '@/components/shared/Flex'
import Spacing from '@/components/shared/Spacing'
import Text from '@/components/shared/Text'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

const ReservationDonePage = () => {
  const { hotelName } = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  }) as {
    hotelName: string
  }

  const navigate = useNavigate()

  return (
    <div>
      <Spacing size={80} />

      <Flex direction="column" align="center">
        <img
          src="https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_31-512.png"
          width={90}
          height={90}
          alt=""
        />

        <Spacing size={30} />

        <Text typography="t4" bold={true}>
          {hotelName}
        </Text>

        <Spacing size={8} />

        <Text>예약이 완료되었습니다.</Text>
      </Flex>

      <Spacing size={40} />

      <div style={{ padding: 24 }}>
        <Button.Group>
          <Button onClick={() => navigate('/')}>홈</Button>
          <Button onClick={() => navigate('/reservation/list')}>
            예약 리스트
          </Button>
        </Button.Group>
      </div>
    </div>
  )
}

export default ReservationDonePage
