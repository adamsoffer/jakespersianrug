import { Container, Wrapper, Price, StyledLink } from './styles'
import { Div } from 'glamorous'
import Link from 'next/link'

export default ({ price }) => (
  <Container>
    <Wrapper>
      On February 7th, 2018,
      <Link href="https://twitter.com/jekrb" passHref>
        <StyledLink target="_blank" rel="noopener noreferrer">
          Jake Burden
        </StyledLink>
      </Link>
      bought a persian rug for 376.344 Spank ($70 at the time).
      <Div marginTop="24px">That rug is now worth:</Div>
      <Price>${price.toFixed(2)}</Price>
    </Wrapper>
  </Container>
)
