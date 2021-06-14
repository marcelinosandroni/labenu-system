import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid: 60px 1fr / 1fr 7fr;
  gap: 1rem;
  padding: 1rem;
  
  & > :first-child {
    grid-row: 1 / 3;
  }
`

