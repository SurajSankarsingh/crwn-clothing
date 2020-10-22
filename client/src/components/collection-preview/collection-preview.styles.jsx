import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-radius: 20px;

  
  @media screen and (max-width: 800px) {
    align-items: center; 
  }

  @media screen and (max-width: 620px) {
    align-items: center; 
  }

  @media screen and (max-width: 400px) {
    align-items: center;  
  }

  @media screen and (max-width: 300px) {
    align-items: center;  
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 4fr 4fr;
    width: 80%;
    gap: 50px;
  }

  @media screen and (max-width: 620px) {
    display: grid; 
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 400px) {
    display: grid;  
    grid-template-columns: 1fr 1fr; 
  }

  @media screen and (max-width: 300px) {
    display: grid;  
    grid-template-columns: 1fr 1fr; 
  }
`;