import { Container, Wrapper, Price, StyledLink, Heading } from './styles'
import { Span, Div, H1 } from 'glamorous'
import Link from 'next/link'

export default ({ price }) => (
  <Container>
    <Wrapper>
      <Heading>
        Welcome to{' '}
        <Span fontStyle="italic" fontWeight="bold">
          jakespersianrug.com
        </Span>
      </Heading>
      On February 7th, 2018,{' '}
      <Link href="https://twitter.com/jekrb" passHref>
        <StyledLink target="_blank" rel="noopener noreferrer">
          Jake Burden
        </StyledLink>
      </Link>{' '}
      bought a persian rug for 376.344{' '}
      <Link href="https://spankchain.com/" passHref>
        <StyledLink target="_blank" rel="noopener noreferrer">
          Spank
        </StyledLink>
      </Link>{' '}
      ($70 at the time).
      <Div marginTop="24px">That rug is now worth:</Div>
      <Price>${price.toFixed(2)}</Price>
    </Wrapper>
  </Container>
)
