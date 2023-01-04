import { Container } from "./styles";

export function Ingredient({imgSrc, altImg, text}){
    return(
        <Container>
            <img src={imgSrc} alt={altImg}/>
            <text>{text}</text>
        </Container>
    )
}