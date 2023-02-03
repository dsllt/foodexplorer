import styled from "styled-components";
import chroma from "chroma-js";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const Main = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 34px 123px;
    gap: 34px;
    
`

export const Orders = styled.table`
  border-spacing: 0;
  
  > tbody td, thead th{
    border: 2px solid;
    border-color: ${({theme}) => theme.COLORS.DARK_1000}
  }

  >thead th:first-child{
    border-top-left-radius: 8px;
  }
  >thead th:last-child{
    border-top-right-radius: 8px;
  }

  >thead tr th, tbody tr td{
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 160%;
    text-align: left;
  }

  >thead tr th{
    color: ${({theme}) => theme.COLORS.LIGHT_500};
    font-weight: 700;
    padding: 21px 24px;
  }

  >tbody tr td{
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-weight: 400;
    padding: 16px 24px;
  } 
`

export const Selection = styled.div`
  border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`


const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

export const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'transparent', border: 'none', boxShadow: 'none', }),
  input: (styles) => ({ ...styles, ...dot(), }),
  placeholder: (styles)  => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color),color: `${({theme}) => theme.COLORS.LIGHT_400}` }),
  container: base => ({
    ...base,
    flex: 1,
    width: 150,
    height: 35
  })
};