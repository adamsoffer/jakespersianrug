import { Container, Price, StyledLink } from './styles'
import Link from 'next/link'

export default ({ price }) => (
  <Container>
    <div>
      On February 7th, 2018,{' '}
      <Link href="https://twitter.com/jekrb" passHref>
        <StyledLink target="_blank" rel="noopener noreferrer">
          Jake Burden
        </StyledLink>
      </Link>{' '}
      bought a persian rug for 376.344 Spank ($70 at the time).
      <br />That rug is now worth:
      <Price>${price.toFixed(2)}</Price>
    </div>
  </Container>
)
