import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background:  ${({theme}) => theme.COLORS.DARK_1000};
  border-radius: 5px;
  padding: 4px 8px;
  gap: 12px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  margin-top: 24px;
  margin-bottom: 48px;
    



`