import styled from 'styled-components'

const DualSLider = styled.div`
  width: 100%;
`

const Title = styled.h2`
  font-size: 21px;
  font-weight: 500;
  line-height: 21px;
  text-transform: uppercase;
  margin-bottom: 30px;
`

const Content = styled.div`
  height: 43px;
  position: relative;
`

const Thumb = styled.input`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background-color: black;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 16px;
    width: 16px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 100%;
  outline: none;
`

const LeftThumb = styled(Thumb)`
  z-index: 3;
`

const RightThumb = styled(Thumb)`
  z-index: 4;
`

const Track = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 2px;
  background-color: black;
  width: 100%;
  z-index: 1;
`

const Fields = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  color: black;
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  margin-top: 20px;
`

const ValueField = styled.div``

const MarkSymbol = styled.sup`
  font-size: 16px;
  line-height: 16px;
`

export { DualSLider, Title, Content, LeftThumb, RightThumb, Track, Fields, ValueField, MarkSymbol }
