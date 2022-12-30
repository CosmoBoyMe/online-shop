import { FC } from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { changeImage } from './ProductDetailsAction'

import { MockData } from './IProductDetails'

const ProductDetailsImages: FC<MockData> = (mockData: MockData) => {
  // const [activeImagePath, setActiveImagePath] = useState(mockData.images[0])

  const dispatch = useDispatch()

  return (
    <Slides>
      {mockData.images.map((path, index) => (
        <SlidesItem key={index}>
          <SlidesImage onClick={() => dispatch(changeImage(path))} src={path} alt={mockData.name} />
        </SlidesItem>
      ))}
    </Slides>
  )
}

export default ProductDetailsImages

const Slides = styled.ul`
  display: grid;
  grid-auto-rows: 240px;
  max-width: 225px;
  row-gap: 15px;
  list-style: none;
`
const SlidesItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border: 1px solid transparent;
  &:hover {
    border-color: var(--gray);
    border-radius: 10px;
  }
`

const SlidesImage = styled.img`
  cursor: pointer;
  max-width: 100%;
  height: auto;
`
