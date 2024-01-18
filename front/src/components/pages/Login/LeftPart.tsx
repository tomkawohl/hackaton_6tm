import styled from 'styled-components';

export default function LeftPart() {
  return (
    <LeftPartStyled>
      <img src="/images/001.jpg" alt="" />
    </LeftPartStyled>
  );
}

const LeftPartStyled = styled.div`
  height: 100%;
  flex: 1;
  min-wdth: 5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
