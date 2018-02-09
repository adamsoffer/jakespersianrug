import { Container, Price } from './styles'

export default ({ price }) => (
  <Container>
    On February 7th, 2018, Jake Burden bought a persian rug for 376.344 Spank
    ($70 at the time).
    <br />That rug is now worth:
    <Price>${price.toFixed(2)}</Price>
  </Container>
)
